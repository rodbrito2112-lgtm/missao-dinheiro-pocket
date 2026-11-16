# Missão Dinheiro Pocket — jogo digital (versão Experimental)

**Nome comercial (o que o jogador vê): Missão Dinheiro: Pistas.** "Pocket" é só o nome interno do projeto (repositório, pastas, documentação, chaves de salvamento). No modo solo, o "Robô das Pistas" é um colega, não adversário.

Jogo de cartas de educação financeira para crianças a partir de 5 anos, adolescentes e adultos (faixas 5 a 7, 8 a 12 e 13 anos ou mais), parte do ecossistema **Missão Dinheiro Club**. Standalone: não altera o jogo principal.

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
- Filtro por faixa etária (5 a 7, 8 a 12, 13 anos ou mais, todas) — **nenhuma vem marcada**, alguém escolhe antes de começar.
- **Configurações** (recolhidas na tela inicial): tamanho da partida, regra do erro (A/B), ajudas, **Cena e escolha opcional** (sem cena, a carta conta só descoberta e pista falsa — como no kit impresso), som e "Recomeçar o álbum" (apaga álbum e conquistas do aparelho, com confirmação).
- **Modo solo (desde 14/11/2026):** uma pessoa joga todas as cartas, com o personagem que escolheu (Caio, Mel, Letícia, Vinicius, Bia ou Tiko). O Robô das Pistas é colega: não pontua, só dá a opinião dele na cena. A tela final mostra os destaques da criança, sem "quem venceu".
- Sorteio: prefere conceitos ainda não descobertos; Juros, Parcelamento e Cartão de crédito só entram depois de Empréstimo ou Poupança (no álbum ou antes na partida).
- Álbum por faixa (tela "Ver álbum"), com celebração ao completar uma faixa; conquistas de atitude (Detetive, Boa escolha, Por conta própria, Não desistiu); som curto opcional (começa desligado).
- Salvo no navegador: `mdp-album`, `mdp-pocket-v3-save`, `mdp-pocket-v3-tut`, `mdp-pocket-char`, `mdp-pocket-som`, `mdp-pocket-conquistas`, `mdp-pocket-fb` (rascunho do feedback).

## Estrutura
- `index.html` — página de entrada; carrega `style.css`, `cartas.js` e `game.js`.
- `style.css` — todo o visual.
- `cartas.js` — **fonte única das cartas**: `CARDS` (100 cartas: as 32 do baralho impresso e, depois delas, as cartas novas só do jogo digital, já são 100 (meta atingida em 16/11/2026); JSON puro depois de `const CARDS =`). Temas: Poupar e guardar, Consumo e escolhas, Dinheiro digital e segurança, Trabalho e ganhar dinheiro e Ajudar e compartilhar e `EXTRA` (dica de tipo, "nudge" e respostas aceitas de cada carta). Fica em `.js` e não em `.json` porque o navegador bloqueia `fetch` de arquivo local no duplo clique.
- `game.js` — lógica do jogo, telas e caminhos das imagens (`ASSETS`, `POSE`).
- `assets/personagens/` — imagens webp leves (idle, think/pensa, cheer, wow etc.) de Caio, Mel, Letícia, Vinicius, Bia, Tiko, Rodrigo, Natty + `logo-main.webp`. O jogo usa `*-idle`, `*-think` (Bia: idle), `*-cheer` e o logo.

Para publicar, envie a pasta inteira (não só o `index.html`).

## Faixas etárias
5 a 7 anos: 33 cartas · 8 a 12 anos: 34 cartas (chave interna `8–11` no `cartas.js`, mantida para não perder álbuns salvos) · 13 anos ou mais (jovens e adultos, desde 15/11/2026): 33 cartas (chave `13+`: dívida, crédito, golpes, apostas, primeiro emprego, contas da casa). As cartas de 13+ não têm pré-requisito de outras faixas. As 8 cartas originais receberam faixa em 10/11/2026 (antes entravam em qualquer filtro). Análise completa, ordem sugerida e propostas pendentes em `docs/mapa-curricular-cartas.md`.

## Esquema de carta
`{title, char, icon, p[6], fake(1-based), correct[], near[], scene, opts[3], pts[3], why[3], faixa, tema}`

## Pendências conhecidas
- Aprovação das 24 cartas novas (respostas, cenas, faixas, personagens).
- Pista falsa por nível nas 8 cartas originais; conferir cartas 4–8 do gabarito v1.3.3.
- Versão 12–17 anos.
- Testes com crianças (Caio ainda não testou).

## Melhorias anotadas (não implementadas)
- ~~Escolher personagem no modo solo~~ — feito em 14/11/2026 (pacote 2).
- ~~Feedback não fica salvo~~ — resolvido em 14/11/2026: rascunho em `mdp-pocket-fb` e aviso antes de sair sem enviar.
- ~~Versão no resumo do feedback~~ — resolvido em 14/11/2026 (`VERSAO_JOGO` em game.js).
- **Código morto:** `showResults()` e `DB` vêm da versão com banco do Claude e não funcionam fora dele.
- **Revisão de especialistas em games:** 17 melhorias priorizadas em `docs/revisao-especialistas-games.md` (o primeiro pacote já foi implementado).

## Publicar no GitHub Pages
Já ativo: Deploy from branch → `main` / root. O jogo abre em https://rodbrito2112-lgtm.github.io/missao-dinheiro-pocket/ e cada push na `main` atualiza o site em 1–2 minutos.

## Versões relacionadas (Claude Artifacts)
Experimental: https://claude.ai/artifact/96RKMqMqstYpQJ1VVUSbHQ · Teste Fechado (usa banco do Claude, não roda fora): https://claude.ai/artifact/PP2kxPCzMr5HVT29CCFPKZ · Teste Aberto (feedback por WhatsApp): https://claude.ai/artifact/3ySm7iV7XW6gNTFNk25iGA
