# Contexto para o Claude Code

Projeto: "Missão Dinheiro Pocket", jogo digital de educação financeira infantil (Meu Dinheiro Club). Idioma da interface e do conteúdo: português do Brasil, linguagem simples para 5–11 anos.

- O jogo é `index.html` único (CSS, JS e imagens base64 inline). Mantenha funcionando por duplo clique, sem build.
- Não usar localStorage além da chave `mdp-album` e das chaves já existentes; o arquivo precisa funcionar mesmo se o storage falhar (try/catch).
- Marca: azul-marinho #09274D, turquesa #12B8BB, amarelo #FFC12E, fonte Nunito.
- Acessibilidade: contraste AA, alvos de toque ≥44px, respeitar prefers-reduced-motion, lang="pt-BR".
- Regras do jogo em README.md (v1.3.3). Não alterar mecânica de pontuação sem pedido explícito.
- Cartas: ver `docs/cartas.json` e a constante `CARDS` no HTML. Mantenha o esquema.
- Imagens: usar webp de `assets/personagens/`; fotos são quadradas 192×192 (exceto `*-pensa`, `*-aponta` etc., que são corpo inteiro: não usar em quadrados com corte).
- Teste rápido: abrir no navegador e jogar uma partida completa (tutorial → 6 cartas → resultado).
