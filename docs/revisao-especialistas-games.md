# Revisão de especialistas em games — Missão Dinheiro: Pistas

10/11/2026. Três revisões independentes, feitas pelo código (somente leitura), com as skills **game-ui-ux** (interface), **game-feel** (resposta e sensação) e **gamification-loops** (motivação e progressão). Nada foi implementado. Restrições respeitadas: pontuação e texto das cartas não mudam; acessibilidade do CLAUDE.md; funciona offline por duplo clique.

Pontos conferidos no código antes de consolidar: o campo `icon` das cartas não é usado em nenhuma tela; a única animação (`.card`, style.css:96) se repete a cada toque porque `render()` reescreve a tela inteira; `window.scrollTo(0,0)` (game.js:226) volta ao topo a cada ação; não há som; o resultado do Robô no modo solo é sorteado (`Math.random`, game.js:28–32).

---

## Prioridades consolidadas

| # | Melhoria | Área | Esforço | Por quê |
|---|---|---|---|---|
| 1 | **Mostrar o ícone de cada carta** (🛍️ 💰 📱…) grande no banner, com cor por tema | UI | Rápido | Hoje toda carta parece igual; criança de 5–7 reconhece por imagem. O dado já existe em `cartas.js`. |
| 2 | **Não voltar ao topo a cada toque**; rolar até a pista nova ou a mensagem | Feel | Rápido | No celular, a pista recém-aberta e o "Quase!" ficam fora da vista. |
| 3 | **Animar só o que mudou** (pista nova com brilho; acerto com "pop" do personagem) em vez de animar a carta inteira a cada toque | Feel | Rápido | Hoje revelar, errar e acertar têm a mesma animação: nada se destaca. |
| 4 | **Botões Acertou / Quase / Errou com ícone** (✓ ≈ ✗), maiores e com cor própria para "Errou" | UI | Rápido | É a ação central; hoje só a cor diferencia, e o rosa de "Errou" é estilo avulso. |
| 5 | **Tela inicial mais simples**: modo de jogo em cartões grandes + "Começar"; regra A/B, ajudas, faixa e tamanho num "Opções do adulto" recolhido | UI | Médio | Hoje parece um formulário de cadastro; a primeira impressão é burocrática. |
| 6 | **Escolha de personagem no modo solo** (Caio, Mel, Letícia, Vinicius, Bia, Tiko) — já anotada | Gamificação | Rápido/Médio | Autonomia e pertencimento; personagem aparece no placar, na tela final e no feedback. |
| 7 | **Álbum visível por tema e por faixa** ("5 de 13 — 5 a 7 anos"), com o personagem nas cartas descobertas e "?" nas que faltam | Gamificação | Médio | Hoje é só "X de 32": a criança de 5–7 nunca passa de 13 e não vê *quais* descobriu. |
| 8 | **Sorteio que prefere cartas ainda não descobertas** e respeita pré-requisitos (Juros/Parcelamento/Cartão só depois de Empréstimo ou Poupança) | Gamificação | Rápido | Menos repetição, e a regra do mapa curricular. Não mexe na pontuação. |
| 9 | **Placar que conta** até o novo valor, com leve destaque no chip | Feel | Médio | O ponto ganho hoje aparece sem nenhuma transição. |
| 10 | **Cena com −1 sem punir**: selo cinza-azulado com "Pense de novo" em vez de "−1" vermelho grande; mostrar primeiro a melhor escolha e o "porquê" antes do número | Feel | Rápido | Erro de escolha é parte do aprendizado; não deve envergonhar. |
| 11 | **Tela final de celebração**: personagem comemorando, pódio com os dois placares, conceitos da partida como ícones | UI + Feel | Médio | Hoje é uma tabela. Empate celebrado igual para os dois. |
| 12 | **Topo mais enxuto na partida**: logo + "Carta X de 6" (como barra de 6 marcas) + Encerrar numa linha só | UI | Rápido | Três faixas antes do conteúdo empurram a pista para baixo. |
| 13 | **Menos texto de regra na tela** (rótulo "Ajudas" curto; pontos da pista como fileira 6-5-4-3-2-1 destacando a atual) | UI | Médio | Criança de 5–7 ainda não lê; caixa-alta espaçada é o mais difícil de ler. |
| 14 | **Modo solo mais justo**: Robô como "colega que também aprende"; tela final destaca o melhor da criança (pista em que acertou, pistas falsas achadas) acima de vencer/perder | Gamificação | Rápido | Perder por sorteio tira a sensação de competência. |
| 15 | **Sons curtos gerados no próprio jogo** (sem arquivos), com botão 🔊/🔇 e começando desligado | Feel | Rápido | Reforço para quem ainda lê pouco. Nunca som de "erro". |
| 16 | **Missão em família** na tela final, uma por tema, sem prazo ("No mercado, conte para alguém algo que você esperou para comprar") | Gamificação | Rápido | Leva a atitude para fora do jogo. |
| 17 | **Conquistas de atitude** ("Detetive: achou 5 pistas falsas"), nunca por volume ou rapidez | Gamificação | Médio | Competência sem incentivar jogar compulsivamente. |

**Primeiro pacote — ✅ implementado em 10/11/2026: itens 1, 2, 3, 4, 10 e 12.**
- 1: ícone da carta no banner, faixa e fundo do ícone na cor do tema (cartas sem tema ficam em amarelo).
- 2 e 3: `motion()` em game.js — só a tela nova anima e volta ao topo; dentro da mesma tela, a pista nova ganha destaque e a tela rola até ela; ao acertar, o personagem dá um "pop". Rolagem instantânea (a suave não rodava em todos os navegadores). Tudo desligado com `prefers-reduced-motion`.
- 4: botões ✓ Acertou / ≈ Quase / ✗ Errou lado a lado, 73px de altura, "Errou" com classe própria `.btn-r`.
- 10: −1 da cena em selo neutro com "pense de novo" (sem vermelho).
- 12: topo da partida numa linha (logo, "Carta X de 6" com marcas de progresso, Encerrar). Também corrigido: "Encerrar" agora tem 44px (antes 40px).
- Pontuação conferida em partida completa: igual à anterior (10, 2, 5, 2, 8, 1 no roteiro de teste).

## Decisões que precisam do dono

- **Novas chaves de salvamento.** Lembrar o som ligado/desligado (#15), o personagem escolhido entre partidas (#6) e contadores de conquistas (#17) exigem guardar dados novos no navegador. O CLAUDE.md hoje só permite as chaves existentes. Sem autorização, essas escolhas valeriam só durante a partida.
- **Tema das 8 cartas originais.** O álbum por tema (#7) precisa do campo `tema` nas 8 originais, que hoje não têm. É metadado (não muda texto), mas altera `cartas.js`.
- **Álbum por família.** O álbum é um só por aparelho; com várias crianças no mesmo celular, ele é "da família". Separar por criança exigiria perfis.

## O que manter
- Paleta da marca em variáveis, contraste AA já ajustado, foco visível em amarelo e `prefers-reduced-motion` global.
- Layout de uma coluna para celular, área segura e botões com 52px de altura.
- Pistas fechadas tracejadas e cenas A/B/C com cores próprias — a base visual mais forte do jogo.
- O loop central (pista → palpite → "Quase!" → pista falsa → cena) e o "Leitor explica": o prazer vem de deduzir.

## O que NÃO fazer neste jogo
Sequência de dias com punição ou "volte amanhã"; baú/carta rara/roleta; moeda virtual ou loja (mesmo grátis); ranking entre crianças ou escolas; prêmio por número de partidas; contagem regressiva ou "só hoje"; tremer a tela, buzina ou flash vermelho no erro. Várias dessas mecânicas são exatamente o que as cartas ensinam a evitar (compra por impulso, promoção relâmpago, golpe com urgência).

## Observação sobre a fonte
A fonte Nunito vem da internet (Google Fonts). Sem conexão, o jogo usa a fonte do sistema e fica com outra aparência. Além disso, os botões de ajuda (`.life`) usam a fonte direto em vez da variável `--font`. Para garantir o mesmo visual offline, seria preciso incluir o arquivo da fonte no projeto.

---

# Segunda rodada — 14/11/2026

Quatro revisões independentes do jogo como está (depois do pacote 1), só leitura: **game-ui-ux**, **game-feel**, **gamification-loops** e **design-skills:accessibility-audit** (WCAG 2.2 AA). Os achados marcados com ✔ foram conferidos no código.

## A. Correções urgentes (bugs, vários vindos do pacote 1) — ✅ implementadas em 14/11/2026

Testado em partida completa: pontuação igual (10, 2, 5, 2, 8, 1); ícone só aparece ao revelar; Opções só da mesma faixa; confirmar a cena não volta ao topo; foco e anúncios (região `#live`) funcionando; link do WhatsApp com 53 px; pistas fechadas agrupadas numa linha ("Mais N pistas fechadas"), o que deixa os botões ✓≈✗ na primeira tela do celular.

| # | Problema | Onde | Esforço |
|---|---|---|---|
| A1 ✔ | **O ícone entrega a resposta.** O ícone da carta (🐷 Cofrinho, 💳 Cartão, 🔐 Senha…) aparece desde a pista 1. Mostrar "?" e o nome do tema durante as pistas; o ícone só ao revelar. | `banner()` | Rápido |
| A2 ✔ | **Confirmar a cena pula para o topo** e esconde o "Leitor explica" e a soma. Tratar `scene`→`sceneRes` como a mesma tela e rolar até a opção escolhida. | `motion()` | Rápido |
| A3 | **Rolagem empurra os botões ✓≈✗ para fora** (`block:'center'`); Opções e Dica aparecem fora da vista; aviso da ajuda aparece acima do toque. Usar `'nearest'`/`'start'`, rolar até opções/dica, aviso logo abaixo das ajudas. | `motion()`, `lifeBar()` | Rápido |
| A4 | **Foco e leitor de tela se perdem a cada toque** (WCAG 2.4.3, 4.1.3): `innerHTML` recriado manda o foco para o `body`; `role="status"` recriados não são anunciados. Região `aria-live` fixa fora de `#app` + devolver o foco ao título/controle certo. | `render()`, `index.html` | Médio |
| A5 | **Contorno de foco amarelo some no branco** (1,63:1). Dentro da carta: contorno escuro + anel amarelo. | `style.css` | Rápido |
| A6 ✔ | **Link do WhatsApp com ~25 px de altura** (parece botão, não tem tamanho de botão); "Ver as 6 pistas" com 32 px. | `viewSaved`, `viewBot`, CSS | Rápido |
| A7 | Campo de palpite sem rótulo; seleção de cena/pista falsa sem `aria-pressed`; grupos de rádio sem `fieldset/legend`; bordas de campos 1,36:1; número da pista fechada 3,99:1; símbolos ★ ? ✓ lidos em voz alta. | `viewClues`, `viewScene`, `viewSetup`, `viewFb`, CSS | Rápido |
| A8 | Modo solo: a cada palpite o teclado do celular fecha (campo perde o foco). | `onType()` | Rápido |
| A9 ✔ | Ajuda **Opções** sorteia respostas erradas entre as 32 cartas (criança de 5–7 pode ver "Cartão de crédito"). Sortear da mesma faixa. | `useLife()` | Rápido |
| A10 | Pop do personagem pode não aparecer no site (imagem de comemoração ainda carregando). Pré-carregar as poses. | `game.js` | Rápido |

## B. Decisões do dono antes de implementar

**Decididas em 14/11/2026:**
1. Faixa padrão: **nenhuma marcada** — o adulto escolhe antes de começar.
2. Ícones: **Compra online 🛒→💻** e **Mesada 🪙→👛** (Preço por unidade e Economizar mantêm os seus).
3. Tema das 8 originais: **aplicar a sugestão** abaixo.
4. Modo solo: **robô vira colega** — a criança joga as 6 cartas, o robô só comenta a escolha dele na cena, sem placar contra o robô; tela final mostra o melhor da criança.
5. Novas chaves autorizadas: **personagem**, **som**, **conquistas entre partidas** e **rascunho do feedback** (registradas no CLAUDE.md).

Opções que estavam em discussão:

1. **Faixa padrão** ✔: hoje vem marcada "Todas" — quem não mexe dá Juros/Parcelamento a uma criança de 5 anos. Sugestão: nenhuma marcada (o adulto escolhe) ou "5 a 7".
2. **Ícones repetidos** ✔: 🛒 Preço por unidade e Compra online; 🪙 Economizar e Mesada. Trocar dois ícones em `cartas.js` (metadado; muda também o kit, que teria de ser gerado de novo).
3. **Tema das 8 cartas originais** (para cor, nome do tema e álbum por tema). Sugestão: Troco, Promoção relâmpago, Preço por unidade, Parcelamento → Consumo e escolhas; Imprevisto, Meta, Empréstimo → Poupar e guardar; Golpe por mensagem → Dinheiro digital e segurança.
4. **Modo solo** ✔: a criança joga só 3 das 6 cartas e é comparada a um resultado sorteado (pode perder "para o sorteio"); as cartas do robô não entram no álbum. Opção: a criança joga todas as cartas e o robô vira um colega que mostra a escolha dele — muda a alternância descrita no README.
5. **Chaves novas de salvamento** (CLAUDE.md hoje proíbe): lembrar personagem escolhido, som ligado/desligado, conquistas entre partidas, rascunho do feedback.

## C. Pacote 2 sugerido (sem chave nova) — ✅ implementado em 14/11/2026, junto com as decisões do grupo B e os itens #15 (som), #16 não (textos novos pendentes) e #17 (conquistas)

Testado: pontuação igual no modo equipes; nenhuma violação de pré-requisito em 300 sorteios; cartas novas primeiro; modo solo com a criança jogando todas as cartas e o robô comentando a cena; rascunho do feedback salvo/restaurado/apagado; celebração ao completar a faixa; som liga/desliga e fica salvo; topo continua numa linha (46 px).

1. Sorteio que prefere cartas ainda não descobertas e respeita pré-requisitos olhando o álbum (Juros/Parcelamento/Cartão depois de Empréstimo ou Poupança).
2. Álbum por faixa: tela com os ícones descobertos e "?" nos que faltam ("5 de 13"), com celebração ao completar a faixa.
3. Escolha de personagem no modo solo (vale para a partida), no placar, na tela final e no resumo do feedback.
4. Tela final que destaca o melhor de cada um (pista em que acertou, pistas falsas achadas), personagem comemorando, confete curto só no fim; empate celebrado igual.
5. Resultado da cena revelado em sequência (escolha e porquê primeiro, número depois), "+2" da pista falsa animado, placar contando — tudo desligado com reduced-motion.
6. Feedback: aviso antes de sair sem enviar, pergunta de atitude ("A criança explicou por que escolheu?") e versão do jogo no resumo.

## D. Continuam pendentes da primeira rodada
#13 menos texto (rótulo das ajudas em caixa-alta, textos de 11 px), #5 tela inicial simples ("Opções do adulto" recolhidas), #15 som (depende da chave nova para lembrar), #16 missão em família (textos novos para aprovar), #17 conquistas entre partidas (chave nova).

## E. O que está bom
Reduced-motion bem aplicado, rolagem instantânea, botões nativos com alvos ≥44 px na maioria, `lang="pt-BR"`, ícones ✓≈✗ sempre com texto, contrastes de texto passando (inclusive os novos: `.btn-r` 6,87; selo neutro 13,29; `.lab` 7,44).
