# Contexto para o Claude Code

Projeto: "Missão Dinheiro Pocket", jogo digital de educação financeira infantil (Meu Dinheiro Club). Idioma da interface e do conteúdo: português do Brasil, linguagem simples para 5–11 anos.

- Nome comercial, usado em todo texto visível ao jogador: **Missão Dinheiro: Pistas** (bot do modo solo: "Robô das Pistas"). "Pocket" é só nome interno: não aparece na interface, mas continua no repositório, no link do site, nas pastas e nas chaves de localStorage (`mdp-pocket-*`, não renomear).

- O jogo é `index.html` + `style.css` + `cartas.js` + `game.js`, com imagens em `assets/personagens/`. Mantenha funcionando por duplo clique (`file://`), sem build: nada de `fetch`/módulos ES para carregar arquivos locais; use `<script src>` e `<img src>` com caminhos relativos.
- Não usar localStorage além da chave `mdp-album` e das chaves já existentes; o arquivo precisa funcionar mesmo se o storage falhar (try/catch).
- Marca: azul-marinho #09274D, turquesa #12B8BB, amarelo #FFC12E, fonte Nunito.
- Acessibilidade: contraste AA, alvos de toque ≥44px, respeitar prefers-reduced-motion, lang="pt-BR".
- Regras do jogo em README.md (v1.3.3). Não alterar mecânica de pontuação sem pedido explícito.
- Cartas: `cartas.js` é a fonte única (`CARDS` + `EXTRA`). Mantenha o esquema e o `CARDS` como JSON válido.
- Imagens: usar webp de `assets/personagens/`; fotos são quadradas 192×192 (exceto `*-pensa`, `*-aponta` etc., que são corpo inteiro: não usar em quadrados com corte).
- Teste rápido: abrir no navegador e jogar uma partida completa (tutorial → 6 cartas → resultado).
