# Contexto para o Claude Code

Projeto: "Missão Dinheiro Pocket", jogo digital de educação financeira infantil (Meu Dinheiro Club). Idioma da interface e do conteúdo: português do Brasil, linguagem simples para crianças a partir de 5 anos. Faixas (desde 15/11/2026): "5 a 7 anos" (`5–7`), "8 a 12 anos" (chave `8–11` — não renomear, o álbum salvo depende dela) e "13 anos ou mais", jovens e adultos (`13+`). Nas cartas de 13+: nada de número que envelhece (taxa de juros atual, salário mínimo, regra do ano), sem marcas de banco/app/casa de apostas, tom sem medo. O kit impresso fica só com faixas infantis.

- Nome comercial, usado em todo texto visível ao jogador: **Missão Dinheiro: Pistas** (bot do modo solo: "Robô das Pistas"). "Pocket" é só nome interno: não aparece na interface, mas continua no repositório, no link do site, nas pastas e nas chaves de localStorage (`mdp-pocket-*`, não renomear).

- O jogo é `index.html` + `style.css` + `cartas.js` + `game.js`, com imagens em `assets/personagens/`. Mantenha funcionando por duplo clique (`file://`), sem build: nada de `fetch`/módulos ES para carregar arquivos locais; use `<script src>` e `<img src>` com caminhos relativos.
- localStorage: só as chaves existentes (`mdp-album`, `mdp-pocket-v3-save`, `mdp-pocket-v3-tut`) e as autorizadas em 14/11/2026 para o pacote 2 — `mdp-pocket-char` (personagem do modo solo), `mdp-pocket-som` (som ligado/desligado), `mdp-pocket-conquistas` (conquistas entre partidas) e `mdp-pocket-fb` (rascunho do feedback). Nenhuma outra sem pedido. O jogo precisa funcionar mesmo se o storage falhar (try/catch).
- Marca: azul-marinho #09274D, turquesa #12B8BB, amarelo #FFC12E, fonte Nunito.
- Acessibilidade: contraste AA, alvos de toque ≥44px, respeitar prefers-reduced-motion, lang="pt-BR".
- Regras do jogo em README.md (v1.3.3). Não alterar mecânica de pontuação sem pedido explícito.
- Cartas: `cartas.js` é a fonte única (`CARDS` + `EXTRA`). Mantenha o esquema e o `CARDS` como JSON válido. As 32 primeiras cartas são as do kit impresso (`kit/kit.js` usa `KIT_N=32`): não reordene nem insira cartas antes delas; cartas novas do jogo digital entram sempre no fim. Tema novo "Ajudar e compartilhar" (classe `ajudar`, azul derivado do navy).
- Imagens: usar webp de `assets/personagens/`; fotos são quadradas 192×192 (exceto `*-pensa`, `*-aponta` etc., que são corpo inteiro: não usar em quadrados com corte).
- Teste rápido: abrir no navegador e jogar uma partida completa (tutorial → 6 cartas → resultado).
