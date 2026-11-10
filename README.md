# Missão Dinheiro Pocket — jogo digital (versão Experimental)

Jogo de cartas de educação financeira para crianças (5–11 anos; 12–17 pendente), parte do ecossistema **Meu Dinheiro Club**. Standalone: não altera o jogo principal.

## Como rodar
- Duplo clique em `index.html`, ou
- `python -m http.server 8000` nesta pasta e abrir http://localhost:8000

Sem build e sem backend: funciona offline, inclusive por duplo clique (`file://`). Fonte Nunito vem do Google Fonts (cai para fonte do sistema sem internet).

## Regras em vigor (competitivo v1.3.3)
- 6 cartas por partida; jogadores alternam entre quem lê as pistas e quem responde.
- Cada carta tem 6 pistas; acertar na pista k vale 7−k pontos (6 a 1). Uma das pistas é falsa (+2 se identificada).
- Cena A/B/C: +2 / +1 / −1 (ordem permutada). Regra A/B define a penalidade por erro.
- Empate = vitória compartilhada.
- Ajudas estilo Show do Milhão (Dica, Opções, Pista falsa): usar uma ajuda reduz os pontos de descoberta pela metade (arredondado para cima).
- Resposta com "Quase!": o jogo dá uma dica e libera nova tentativa na pista seguinte.
- Filtro por faixa etária (5–7, 8–11, todas) e duração da partida; álbum de cartas descobertas salvo no navegador (`localStorage`, chave `mdp-album`).

## Estrutura
- `index.html` — página de entrada; carrega `style.css`, `cartas.js` e `game.js`.
- `style.css` — todo o visual.
- `cartas.js` — **fonte única das cartas**: `CARDS` (as 32 cartas, 8 originais + 24 novas; JSON puro depois de `const CARDS =`) e `EXTRA` (dica de tipo, "nudge" e respostas aceitas de cada carta). Fica em `.js` e não em `.json` porque o navegador bloqueia `fetch` de arquivo local no duplo clique.
- `game.js` — lógica do jogo, telas e caminhos das imagens (`ASSETS`, `POSE`).
- `assets/personagens/` — imagens webp leves (idle, think/pensa, cheer, wow etc.) de Caio, Mel, Letícia, Vinicius, Bia, Tiko, Rodrigo, Natty + `logo-main.webp`. O jogo usa `*-idle`, `*-think` (Bia: idle), `*-cheer` e o logo.

Para publicar, envie a pasta inteira (não só o `index.html`).

## Esquema de carta
`{title, char, icon, p[6], fake(1-based), correct[], near[], scene, opts[3], pts[3], why[3], faixa, tema}`

## Pendências conhecidas
- Aprovação das 24 cartas novas (respostas, cenas, faixas, personagens).
- Pista falsa por nível nas 8 cartas originais; conferir cartas 4–8 do gabarito v1.3.3.
- Versão 12–17 anos.
- Testes com crianças (Caio ainda não testou).

## Publicar no GitHub Pages
Já ativo: Deploy from branch → `main` / root. O jogo abre em https://rodbrito2112-lgtm.github.io/missao-dinheiro-pocket/ e cada push na `main` atualiza o site em 1–2 minutos.

## Versões relacionadas (Claude Artifacts)
Experimental: https://claude.ai/artifact/96RKMqMqstYpQJ1VVUSbHQ · Teste Fechado (usa banco do Claude, não roda fora): https://claude.ai/artifact/PP2kxPCzMr5HVT29CCFPKZ · Teste Aberto (feedback por WhatsApp): https://claude.ai/artifact/3ySm7iV7XW6gNTFNk25iGA
