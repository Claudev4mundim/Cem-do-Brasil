# CEM do Brasil — Landing Page Medição de Ruído

Landing page estática (HTML + CSS + JS puro), construída a partir do layout `LP.pdf` com os ajustes do documento *Ajustes Landing Page - Cem do Brasil*.

```
index.html
assets/
  css/style.css   # layout fiel ao PDF (desktop 1920) + responsivo
  js/main.js      # animações de entrada, FAQ, máscara WhatsApp, formulário
  img/            # imagens extraídas do PDF (webp)
```

Para visualizar, basta abrir `index.html` no navegador ou publicar a pasta em qualquer hospedagem estática (Vercel, Netlify etc.).

## Ajustes aplicados

| Seção | Ajuste | Status |
|---|---|---|
| 1 · Hero | Texto "+15 anos" → **"+20 anos de atuação"** | ✅ |
| 1 · Hero | Nova imagem com os seis instrumentos: Defender 510, BDX II, SV 971, QUESTemp 34, GilAir Plus e calibrador SV 34B à direita | ✅ |
| 2 · Produtos | Imagem de acessórios exibida **completa** (sem corte) | ✅ |
| 2 · Produtos | Decibelímetro Instrutherm trocado pelo **SV 971A** | ✅ |
| 3 · Sobre | "15 anos" → **"20 anos"** | ✅ |
| 4 · Calibração | OK | ✅ |
| 5 · FAQ | OK | ✅ |
| 6 · Indicação técnica | Texto → **"Nós analisamos sua aplicação e te indicamos o instrumento adequado"** | ✅ |
| 6 · Indicação técnica | Imagem do especialista substituída pelo **SV 104 BIS** recortado, flutuando (animação contínua suave) | ✅ |

### Imagem do banner

`assets/img/hero-bg.webp` é a imagem final enviada pelo cliente ("Seis instrumentos industriais em destaque"). No CSS ela fica ancorada em `75% center` para manter todos os equipamentos visíveis em telas de notebook.

## Animações

Animações de entrada (fade/slide/zoom acionados ao entrar na tela via `IntersectionObserver`) e, a pedido do cliente, flutuação contínua do SV 104 BIS na seção de indicação técnica. Tudo respeita `prefers-reduced-motion`.

## Formulário

O formulário valida os campos no navegador. Para enviar os leads, adicione o endpoint (webhook/CRM) no atributo `data-endpoint` do `<form id="form-indicacao">` — o JS fará um `POST` em JSON com `nome`, `email`, `whatsapp`, `tipo_avaliacao` e `norma`.

> As respostas das perguntas 02–05 do FAQ não constavam no PDF; foram redigidas com base nas informações da própria página e podem ser revisadas.
