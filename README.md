# Missão Dinheiro Pocket — jogo digital (versão Experimental)

Jogo de cartas de educação financeira para crianças (5–11 anos; 12–17 pendente), parte do ecossistema **Meu Dinheiro Club**. Standalone: não altera o jogo principal.

## Como rodar
- Duplo clique em `index.html`, ou
- `python -m http.server 8000` nesta pasta e abrir http://localhost:8000

`index.html` é um arquivo único (HTML + CSS + JS + imagens embutidas em base64). Funciona offline, sem backend. Fonte Nunito vem do Google Fonts (cai para fonte do sistema sem internet).

## Regras em vigor (competitivo v1.3.3)
- 6 cartas por partida; jogadores alternam entre quem lê as pistas e quem responde.
- Cada carta tem 6 pistas; acertar na pista k vale 7−k pontos (6 a 1). Uma das pistas é falsa (+2 se identificada).
- Cena A/B/C: +2 / +1 / −1 (ordem permutada). Regra A/B define a penalidade por erro.
- Empate = vitória compartilhada.
- Ajudas estilo Show do Milhão (Dica, Opções, Pista falsa): usar uma ajuda reduz os pontos de descoberta pela metade (arredondado para cima).
- Resposta com "Quase!": o jogo dá uma dica e libera nova tentativa na pista seguinte.
- Filtro por faixa etária (5–7, 8–11, todas) e duração da partida; álbum de cartas descobertas salvo no navegador (`localStorage`, chave `mdp-album`).

## Estrutura
- `index.html` — o jogo completo (é o que publicar).
- `docs/cartas.json` — as 32 cartas em JSON (8 originais + 24 novas) para revisão/edição. As cartas vivem no código, na constante `CARDS`; se editar o JSON, é preciso copiar de volta.
- `assets/personagens/` — imagens webp leves (idle, think/pensa, cheer, wow etc.) de Caio, Mel, Letícia, Vinicius, Bia, Tiko, Rodrigo, Natty + `logo-main.webp`. Hoje o jogo usa só `*-idle`, `*-think` (Bia: idle) e `*-cheer`, embutidas no HTML.

## Esquema de carta
`{title, char, icon, p[6], fake(1-based), correct[], near[], scene, opts[3], pts[3], why[3], faixa, tema}`

## Pendências conhecidas
- Aprovação das 24 cartas novas (respostas, cenas, faixas, personagens).
- Pista falsa por nível nas 8 cartas originais; conferir cartas 4–8 do gabarito v1.3.3.
- Versão 12–17 anos.
- Testes com crianças (Caio ainda não testou).
- Considerar separar CSS/JS/dados e referenciar `assets/` em vez de base64.

## Publicar no GitHub Pages
Settings → Pages → Deploy from branch → `main` / root. O jogo abre em `https://<usuario>.github.io/<repo>/`.

## Versões relacionadas (Claude Artifacts)
Experimental: https://claude.ai/artifact/96RKMqMqstYpQJ1VVUSbHQ · Teste Fechado (usa banco do Claude, não roda fora): https://claude.ai/artifact/PP2kxPCzMr5HVT29CCFPKZ · Teste Aberto (feedback por WhatsApp): https://claude.ai/artifact/3ySm7iV7XW6gNTFNk25iGA
