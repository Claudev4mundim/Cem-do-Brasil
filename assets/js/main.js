(function () {
  'use strict';

  /* ---------- Animações de entrada ---------- */
  var items = document.querySelectorAll('.reveal');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- FAQ: mantém apenas um item aberto ---------- */
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- Máscara de WhatsApp ---------- */
  var whats = document.getElementById('f-whats');
  if (whats) {
    whats.addEventListener('input', function () {
      var d = whats.value.replace(/\D/g, '').slice(0, 11);
      var out = d;
      if (d.length > 2) out = '(' + d.slice(0, 2) + ') ' + d.slice(2);
      if (d.length > 7) out = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
      whats.value = out;
    });
  }

  /* ---------- Formulário ---------- */
  var form = document.getElementById('form-indicacao');
  if (!form) return;
  var msg = form.querySelector('.form__msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    form.querySelectorAll('input, select').forEach(function (field) {
      var ok = field.checkValidity();
      if (field.name === 'whatsapp') ok = field.value.replace(/\D/g, '').length >= 10;
      field.classList.toggle('is-invalid', !ok);
      if (!ok) valid = false;
    });

    msg.classList.remove('is-ok', 'is-error');
    if (!valid) {
      msg.textContent = 'Preencha todos os campos corretamente.';
      msg.classList.add('is-error');
      return;
    }

    // Integração: defina data-endpoint no <form> para enviar os dados (webhook / CRM).
    var endpoint = form.getAttribute('data-endpoint');
    var data = Object.fromEntries(new FormData(form).entries());
    var done = function () {
      msg.textContent = 'Recebemos seus dados! Um especialista da CEM vai entrar em contato em breve.';
      msg.classList.add('is-ok');
      form.reset();
    };

    if (!endpoint) { done(); return; }

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      done();
    }).catch(function () {
      msg.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
      msg.classList.add('is-error');
    });
  });

  form.querySelectorAll('input, select').forEach(function (field) {
    field.addEventListener('input', function () { field.classList.remove('is-invalid'); });
    field.addEventListener('change', function () { field.classList.remove('is-invalid'); });
  });
})();
