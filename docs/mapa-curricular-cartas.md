# Mapa curricular das 32 cartas — Missão Dinheiro: Pistas

Análise de 10/11/2026 com a skill *curriculum-knowledge-architecture-designer* (Bernstein, Muller, Maton; competências EntreComp/LifeComp). É uma **proposta para revisão**: das sugestões, só as faixas das 8 cartas originais foram aplicadas no jogo (seção 4); o resto continua como proposta. As proporções e faixas são julgamento pedagógico, não medida exata, e a correção financeira das cartas não foi o foco aqui.

**Tipo de entrada:** escopo e sequência (banco de 32 cartas)
**Público:** 5–7 e 8–11 anos
**Objetivos (inferidos do jogo):** reconhecer e nomear conceitos financeiros do dia a dia a partir de pistas; distinguir informação verdadeira de falsa (pista falsa); escolher bem numa situação concreta (cena A/B/C); conversar em família sobre dinheiro.

---

## 1. Diagnóstico

**Arquitetura:** mista. **Proporção aproximada:** 40% hierárquico · 25% horizontal · 35% disposicional.

| Tipo | O que é no jogo | Cartas |
|---|---|---|
| **Hierárquico** (um conceito depende de outro) | Conceitos que só fazem sentido depois de outros, muitos com conta | Troco, Saldo, Mesada, Trabalho, Salário, Renda extra, Lucro, Empreender, Cofrinho, Poupança, Meta, Reserva de emergência, Empréstimo, Juros, Parcelamento, Cartão de crédito, Preço por unidade, Custo-benefício (18) |
| **Horizontal** (pode entrar em qualquer ordem) | "Lentes" independentes, sobretudo segurança digital e consumo | Senha, Código de verificação, Golpe por mensagem, Pix, Compra online, Propaganda, Promoção relâmpago, Imprevisto (8) |
| **Disposicional** (atitude e hábito) | É comportamento: só se aprende fazendo, várias vezes | Necessidade, Desejo, Esperar para comprar, Compra por impulso, Economizar, Lista de compras (6) |

Além disso, **toda cena A/B/C é disposicional**: mesmo numa carta hierárquica como Juros, a cena treina uma escolha (esperar × gastar agora), não a definição.

## 2. Mapa do conhecimento

### Cadeias hierárquicas (→ = vem antes; **forte** = não dá para pular, *fraco* = ajuda, mas não impede)

```
GANHAR:   Trabalho ─forte→ Mesada / Salário ─forte→ Renda extra ─forte→ Lucro ─fraco→ Empreender
GUARDAR:  Cofrinho ─forte→ Economizar ─forte→ Poupança ─forte→ Meta ─forte→ Reserva de emergência
                                          (Imprevisto ─forte→ Reserva de emergência)
CONTAR:   Saldo ─forte→ Troco          (ambos pedem soma/subtração até R$ 20)
CRÉDITO:  Empréstimo ─forte→ Juros ─forte→ Parcelamento ─forte→ Cartão de crédito
                  Poupança ─fraco→ Juros   (juros também "rendem")
COMPARAR: Preço por unidade ─forte→ Custo-benefício   (exigem divisão / comparar razões)
```

Ponto mais delicado: **Juros, Parcelamento e Cartão de crédito** são a ponta de uma cadeia de 3–4 conceitos e envolvem multiplicação e tempo. São as cartas com maior risco de "a criança acertou a palavra sem entender".

### Hubs horizontais

- **Segurança no dinheiro digital** — Senha, Código de verificação, Golpe por mensagem, Pix, Compra online. Podem ser jogadas em qualquer ordem; a sofisticação cresce de "não conte a senha" → "desconfie de urgência e de quem pede código" → "confira por um canal oficial". (Senha *fraco→* Código de verificação.)
- **Quem quer que eu compre?** — Propaganda, Promoção relâmpago. Lentes sobre persuasão; dependem de Desejo/Necessidade como base (*fraco*).
- **Planos que mudam** — Imprevisto. Faz ponte entre consumo e guardar dinheiro.

### Progressão disposicional (o que a criança FAZ em cada nível)

**Escolher bem antes de comprar** (Necessidade, Desejo, Esperar para comprar, Compra por impulso, Lista de compras, Economizar)

| Nível | Observável |
|---|---|
| Começando | Escolhe pela vontade do momento; precisa de um adulto para pensar em outra opção. |
| Desenvolvendo | Diz "quero, mas não preciso" quando perguntada; segue a lista com lembrete. |
| Consegue | Compara as opções sozinha numa cena e explica o motivo ("esse resolve o problema"). |
| Vai além | Propõe esperar ou adiar por iniciativa própria e lembra disso em outra situação, fora do jogo. |

**Desconfiar e conferir** (cenas de Pix, Golpe, Código, Compra online, Troco)

| Nível | Observável |
|---|---|
| Começando | Aceita a informação como veio ("o caixa sabe", "a mensagem tem o logo"). |
| Desenvolvendo | Percebe que algo está estranho quando o adulto aponta. |
| Consegue | Para e chama um responsável antes de pagar ou passar dado. |
| Vai além | Explica o sinal de alerta (urgência, pedido de código, valor diferente) para outra pessoa. |

## 3. Onde os tipos se cruzam (específico deste jogo)

1. **A pista falsa é um exercício horizontal/disposicional dentro de cartas hierárquicas.** Achar a pista falsa de Juros ("todo mundo recebe o mesmo valor") exige já entender juros. Em cartas de ponta de cadeia, a pista falsa mede compreensão; nas disposicionais, mede atenção.
2. **A cena pontua com +2/+1/−1 algo que é disposicional.** Isso transforma comportamento em "certo/errado". Funciona como gancho de conversa (o "Leitor explica"), mas o ponto não diz se a criança mudou de hábito — só o feedback dos adultos diz.
3. **Cartas digitais dependem de conta.** Pix (R$ 12 × R$ 120) e Saldo (R$ 30 × 25 + 8) são horizontais no conceito, mas a cena exige aritmética; a faixa deve seguir a conta, não o tema.

## 4. Sequência e faixa etária

### Achado principal: as 8 cartas originais não tinham faixa — ✅ aplicado em 10/11/2026

No código, carta sem `faixa` entra **em qualquer filtro**, então uma partida "5 a 7 anos" podia sortear Parcelamento ou Preço por unidade. As faixas abaixo foram aprovadas e aplicadas em `cartas.js` (testado: 20 partidas simuladas em 5–7 sem nenhuma carta de fora da faixa):

| Carta original | Faixa proposta | Por quê |
|---|---|---|
| Troco | **5–7** | Subtração até R$ 20; base da cadeia "Contar". |
| Empréstimo | **5–7** | Cena sem conta (um lápis); conceito de devolver. |
| Imprevisto | **5–7** | Ideia concreta; contas pequenas (R$ 8). |
| Meta | **5–7** | 20 + 5 + 5 = 30 é acessível aos 7; é a ponte para Poupança. |
| Promoção relâmpago | **8–11** | Cena com três valores e prazo; exige Desejo/Necessidade antes. |
| Golpe por mensagem | **8–11** | Junto com o hub de segurança digital (todo em 8–11). |
| Parcelamento | **8–11** | 10 × R$ 45 e comparação com à vista; ponta da cadeia de crédito. |
| Preço por unidade | **8–11** | Divisão e comparação de razões. |

Com isso a faixa 5–7 passa a ter **13 cartas** (hoje: 9 + as 8 sem faixa) e a 8–11, **19** (hoje: 15 + as 8 sem faixa). Numa partida normal de 6 cartas, 13 ainda dá variedade suficiente.

### Revisões possíveis entre as 24 novas
- **Saldo (5–7):** a cena soma 25 + 8 e compara com 30 — no limite para 5–6 anos; manter, mas é a mais difícil da faixa.
- **Juros (8–11):** só deveria aparecer depois que Empréstimo e Poupança já tiverem sido jogadas (ver abaixo).

### Ordem sugerida (para um futuro modo "trilha" ou para famílias/escolas)
- **5–7:** Trabalho → Mesada → Cofrinho → Economizar → Saldo → Troco → Necessidade → Desejo → Lista de compras → Esperar para comprar → Empréstimo → Imprevisto → Meta. *(Necessidade/Desejo podem vir a qualquer momento; os demais seguem a cadeia.)*
- **8–11:** Poupança → Reserva de emergência → Salário → Renda extra → Lucro → Empreender · Propaganda → Promoção relâmpago → Compra por impulso → Custo-benefício → Preço por unidade · Senha → Código de verificação → Golpe por mensagem → Pix → Compra online · Juros → Parcelamento → Cartão de crédito *(sempre por último)*.

Os blocos separados por "·" podem ser feitos em qualquer ordem entre si; dentro de cada bloco, a ordem importa.

Hoje o jogo sorteia as cartas. O sorteio é adequado para o hub horizontal e para as disposicionais; para as cadeias hierárquicas, uma regra simples já ajudaria: **não sortear Juros, Parcelamento ou Cartão de crédito se nenhuma carta da base (Empréstimo, Poupança) saiu antes na partida**.

## 5. Avaliação

- **O jogo consegue medir sozinho:** se a criança nomeou o conceito (acerto e em que pista) e se achou a pista falsa — sobretudo nas cartas hierárquicas e horizontais. Esses dados já vão no resumo do feedback.
- **Só o adulto consegue avaliar:** as atitudes (escolher, esperar, desconfiar). O questionário atual pergunta sobre diversão e clareza das regras, mas não sobre comportamento. Sugestão: uma pergunta como "Na cena, a criança explicou por que escolheu?" (Não / Com ajuda / Sozinha), que mapeia direto nos níveis acima.
- **Misto:** a cena. O jogo registra a letra escolhida, mas o motivo da escolha é o que mostra o nível.

## 6. Implicações para o jogo digital

- **Cartas hierárquicas:** checar pré-requisito antes de sortear (regra acima); dar a dica "Quase!" focada no conceito anterior da cadeia (ex.: em Juros, lembrar de Empréstimo).
- **Cartas horizontais:** manter o sorteio livre; variar personagens e contextos é o que dá sofisticação.
- **Cartas disposicionais:** não aumentar o peso dos pontos; valorizar o "Leitor explica" e, no futuro, um registro de quantas vezes a criança escolheu "esperar" ao longo de várias partidas (álbum de atitudes, não de pontos).

## Limites desta análise
- Baseada no texto das cartas e no comportamento do código, não em teste com crianças.
- A divisão em três tipos é uma ferramenta de desenho, não uma medida; outra pessoa poderia chegar a 45/20/35.
- As faixas propostas consideram principalmente a aritmética das cenas; vocabulário e maturidade emocional precisam ser confirmados no piloto.
