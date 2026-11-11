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
