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
| 1 · Hero | Trocar equipamentos da imagem (calibrador à direita no lugar do CalPro, trocar BDX2 duplicada por Gilair Plus, proporções reais) | ⏳ aguardando imagem final |
| 2 · Produtos | Imagem de acessórios exibida **completa** (sem corte) | ✅ |
| 2 · Produtos | Trocar o decibelímetro Instrutherm pelo **SV 971A** | ⏳ aguardando imagem |
| 3 · Sobre | "15 anos" → **"20 anos"** | ✅ |
| 4 · Calibração | OK | ✅ |
| 5 · FAQ | OK | ✅ |
| 6 · Indicação técnica | Texto → **"Nós analisamos sua aplicação e te indicamos o instrumento adequado"** | ✅ |
| 6 · Indicação técnica | Nova foto (capacete não amarelo, com 104 BIS na lapela ou SV 971A na mão) | ⏳ aguardando imagem |

### Como trocar as imagens pendentes

As imagens das pastas do Google Drive citadas no documento de ajustes não estavam acessíveis no momento da construção. Quando estiverem prontas, basta substituir os arquivos mantendo o mesmo nome (os pontos estão marcados com `<!-- TROCAR -->` no HTML):

| Arquivo | Uso | Recomendação |
|---|---|---|
| `assets/img/hero-bg.webp` | Fundo do hero (pessoa + equipamentos à direita) | 1920×960 ou maior, área da esquerda livre para o texto |
| `assets/img/decibelimetro.webp` | Card "Decibelímetro" (SV 971A) | fundo branco, ~700×560 |
| `assets/img/especialista.webp` | Pessoa da seção do formulário | PNG/WebP com fundo transparente, ~1100×1400 |

## Animações

Somente animações de entrada foram adicionadas (fade/slide/zoom acionados ao entrar na tela via `IntersectionObserver`). Respeitam `prefers-reduced-motion`.

## Formulário

O formulário valida os campos no navegador. Para enviar os leads, adicione o endpoint (webhook/CRM) no atributo `data-endpoint` do `<form id="form-indicacao">` — o JS fará um `POST` em JSON com `nome`, `email`, `whatsapp`, `tipo_avaliacao` e `norma`.

> As respostas das perguntas 02–05 do FAQ não constavam no PDF; foram redigidas com base nas informações da própria página e podem ser revisadas.
