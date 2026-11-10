/* Missão Dinheiro Pocket — dados das cartas.
   CARDS: as cartas (JSON puro depois do "const CARDS ="). Esquema:
   {title, char, icon, p[6], fake(1-based), correct[], near[], scene, opts[3], pts[3], why[3], faixa, tema}
   EXTRA: dicas ("tipo"), empurrãozinho ("nudge") e respostas aceitas ("sets") por título de carta.
   Fica em .js (e não .json) para o jogo abrir por duplo clique, sem servidor. */
const CARDS = [
  {
    "title": "Promoção relâmpago",
    "char": "Caio",
    "icon": "🛍️",
    "p": [
      "O anúncio informa que o desconto vai durar os próximos seis meses.",
      "Uma loja destaca um relógio ao lado de uma oferta.",
      "O anúncio tenta acelerar a decisão de compra.",
      "O preço ou benefício especial tem prazo curto.",
      "O aviso destaca quanto falta para a oferta acabar.",
      "É uma promoção que termina em poucas horas ou ainda hoje."
    ],
    "fake": 1,
    "correct": [
      "promoção relâmpago",
      "oferta relâmpago",
      "promoção por tempo limitado",
      "oferta com duração muito curta"
    ],
    "near": [
      "desconto",
      "oferta",
      "liquidação",
      "promoção"
    ],
    "scene": "Você tem R$ 40. Precisa comprar amanhã cedo um caderno de R$ 30. Sua mochila ainda funciona, mas uma nova está com desconto e custa R$ 35 somente hoje.",
    "opts": [
      "Guardar o dinheiro e procurar um caderno mais barato amanhã.",
      "Comprar a mochila por R$ 35 agora.",
      "Comprar hoje o caderno de R$ 30."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Pode economizar, mas há risco de não resolver a necessidade antes da aula.",
      "A oferta é atraente, mas deixa apenas R$ 5 para o caderno necessário.",
      "Resolve a necessidade já conhecida e preserva R$ 10."
    ],
    "faixa": "8–11"
  },
  {
    "title": "Troco",
    "char": "Mel",
    "icon": "💰",
    "p": [
      "Depois de pagar em dinheiro, algo pode voltar para sua mão.",
      "Pode acontecer quando entrega uma nota maior que o preço.",
      "Vale conferir a quantia recebida.",
      "Para calcular o troco, você soma o preço ao valor pago.",
      "É a diferença entre o dinheiro entregue e o valor cobrado.",
      "Se paga R$ 10 por algo de R$ 7, recebe R$ 3."
    ],
    "fake": 4,
    "correct": [
      "troco",
      "dinheiro de troco",
      "valor do troco",
      "diferença devolvida depois de pagar"
    ],
    "near": [
      "reembolso",
      "devolução de compra",
      "dinheiro que volta"
    ],
    "scene": "Uma compra custa R$ 13. Você paga com R$ 20, mas o caixa devolve apenas R$ 6. A fila está grande e você está com pressa.",
    "opts": [
      "Avisar imediatamente que falta R$ 1.",
      "Guardar os R$ 6 e sair sem conferir.",
      "Conferir o valor com calma e voltar ao caixa depois."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Corrige o valor no momento, sem deixar a pendência para depois.",
      "Perde R$ 1 por não conferir uma conta simples.",
      "É uma solução possível, mas aumenta o risco de dificuldade para corrigir."
    ],
    "faixa": "5–7"
  },
  {
    "title": "Golpe por mensagem",
    "char": "Tiko",
    "icon": "📱",
    "p": [
      "Uma mensagem quer que você aja depressa.",
      "Ela promete resolver algo ou oferecer um benefício inesperado.",
      "O texto contém um link para fazer uma ação.",
      "Pode pedir código de acesso ou pagamento não esperado.",
      "O logotipo de uma loja na mensagem comprova que o link é oficial.",
      "É uma tentativa de enganar alguém por uma mensagem."
    ],
    "fake": 5,
    "correct": [
      "golpe por mensagem",
      "fraude por mensagem",
      "mensagem fraudulenta",
      "tentativa de golpe no celular",
      "phishing"
    ],
    "near": [
      "fraude",
      "golpe",
      "spam",
      "link suspeito"
    ],
    "scene": "Você e um responsável aguardam uma entrega. Chega uma mensagem com o logotipo da loja, dizendo que falta pagar R$ 9 de taxa em dez minutos para liberar o pacote.",
    "opts": [
      "Abrir o link recebido e pagar a taxa imediatamente.",
      "Ignorar a mensagem e esperar a entrega normalmente.",
      "Conferir a entrega com o responsável pelo aplicativo ou site oficial."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "A urgência e o link não verificado expõem a um possível golpe.",
      "Evita o link suspeito, mas pode deixar sem verificar um problema real.",
      "Verifica por um canal independente sem confiar no link recebido."
    ],
    "faixa": "8–11"
  },
  {
    "title": "Parcelamento",
    "char": "Leticia",
    "icon": "🚲",
    "p": [
      "Você leva a compra, mas ainda terá pagamentos a fazer.",
      "O vendedor combina com você valores para datas futuras.",
      "Depois da primeira parte paga, a compra fica totalmente quitada.",
      "A cobrança pode chegar todo mês, por algum tempo.",
      "Uma etiqueta pode mostrar “10 × R$ 45”.",
      "É dividir o pagamento de uma compra em prestações."
    ],
    "fake": 3,
    "correct": [
      "parcelamento",
      "compra parcelada",
      "pagamento em parcelas",
      "pagamento em prestações",
      "compra a prazo em parcelas"
    ],
    "near": [
      "financiamento",
      "crediário",
      "empréstimo",
      "comprar agora e pagar depois"
    ],
    "scene": "Uma bicicleta nova custa R$ 400 à vista ou 10 × R$ 45. Você já guardou R$ 250, consegue guardar R$ 50 por mês e não precisa dela imediatamente. Uma usada custa R$ 320, mas exige R$ 100 em consertos.",
    "opts": [
      "Guardar mais R$ 150 durante três meses e comprar a nova à vista.",
      "Escolher a usada e pagar o conserto.",
      "Parcelar a bicicleta nova agora."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Atende ao objetivo com custo conhecido de R$ 400 e sem parcelas.",
      "O total estimado é R$ 420: menor que parcelar, maior que a nova à vista.",
      "Pagará R$ 450 no total sem urgência, assumindo compromissos futuros."
    ],
    "faixa": "8–11"
  },
  {
    "title": "Preço por unidade",
    "char": "Caio",
    "icon": "🛒",
    "p": [
      "Duas caixas do mesmo produto trazem quantidades diferentes.",
      "A embalagem mais barata nem sempre é a que rende mais.",
      "Na etiqueta aparecem o preço da caixa e a quantidade de itens.",
      "Para comparar, você considera o preço e a quantidade.",
      "Mostra quanto custa um lápis, não a caixa inteira.",
      "Uma caixa de menor preço total sempre tem menor preço por unidade."
    ],
    "fake": 6,
    "correct": [
      "preço por unidade",
      "preço unitário",
      "custo por unidade",
      "valor de cada item",
      "quanto custa cada unidade"
    ],
    "near": [
      "comparar preços",
      "preço do pacote",
      "economia por comprar mais",
      "custo-benefício"
    ],
    "scene": "Você tem R$ 30. Precisa de cinco lápis e quer deixar pelo menos R$ 15 para outro material amanhã. Há caixas de 6 lápis por R$ 9, de 12 por R$ 14 e de 24 por R$ 24.",
    "opts": [
      "Comprar a caixa de 24 por R$ 24.",
      "Comprar a caixa de 6 por R$ 9.",
      "Comprar a caixa de 12 por R$ 14."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Menor preço por lápis, mas não atende à reserva de R$ 15 para amanhã.",
      "Atende à necessidade e preserva R$ 21 para o outro material.",
      "Mantém R$ 16 disponíveis e pode ter utilidade futura, embora compre além da necessidade atual."
    ],
    "faixa": "8–11"
  },
  {
    "title": "Imprevisto",
    "char": "Bia",
    "icon": "☔",
    "p": [
      "Algo muda um plano que parecia organizado.",
      "O acontecimento já estava marcado no calendário havia semanas.",
      "Pode ocorrer em casa, na escola ou num passeio.",
      "Nem sempre faz você gastar dinheiro.",
      "Se houver custo, uma reserva pode ajudar.",
      "É um acontecimento que chega sem você esperar."
    ],
    "fake": 2,
    "correct": [
      "imprevisto",
      "acontecimento inesperado",
      "algo não planejado que muda os planos",
      "evento inesperado"
    ],
    "near": [
      "emergência",
      "surpresa",
      "gasto extra",
      "problema"
    ],
    "scene": "Seu guarda-chuva quebra antes da escola, e está chovendo. Um amigo pode emprestar outro hoje; consertar o seu amanhã custa R$ 8; comprar um novo hoje custa R$ 30. Você tem R$ 35 guardados para um brinquedo.",
    "opts": [
      "Usar o emprestado hoje e consertar o seu amanhã por R$ 8.",
      "Usar R$ 30 do dinheiro do brinquedo para comprar outro hoje.",
      "Sair usando o guarda-chuva quebrado para não mexer no dinheiro."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Resolve o presente e reduz o gasto, desde que a oferta de empréstimo seja confiável.",
      "Resolve hoje, mas custa mais e adia o brinquedo.",
      "Pode não proteger na chuva e não resolve o problema."
    ],
    "faixa": "5–7"
  },
  {
    "title": "Meta",
    "char": "Vinicius",
    "icon": "🎯",
    "p": [
      "Você escolhe uma conquista que ainda não alcançou.",
      "Pode definir quanto falta e em quanto tempo quer chegar.",
      "Pequenas ações podem aproximar você do resultado.",
      "O plano pode ser revisado ao longo do caminho.",
      "Se você mudar o prazo, o objetivo deixa de existir.",
      "É um objetivo definido que você procura alcançar."
    ],
    "fake": 5,
    "correct": [
      "meta",
      "objetivo definido",
      "alvo a alcançar",
      "objetivo com valor e prazo"
    ],
    "near": [
      "sonho",
      "economizar",
      "poupar",
      "planejamento",
      "reserva"
    ],
    "scene": "Você quer comprar um livro de R$ 30 em duas semanas. Já guardou R$ 20 e consegue guardar R$ 5 por semana. Hoje vê figurinhas por R$ 12; há também um pacote de R$ 4.",
    "opts": [
      "Comprar o pacote de R$ 4 e adiar o livro por uma semana.",
      "Não comprar figurinhas e guardar R$ 5 em cada semana.",
      "Comprar agora as figurinhas de R$ 12."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Mantém um objetivo viável, mas muda o prazo conscientemente.",
      "Consegue chegar aos R$ 30 em duas semanas.",
      "Mesmo guardando R$ 10 depois, faltará dinheiro para o livro no prazo."
    ],
    "faixa": "5–7"
  },
  {
    "title": "Empréstimo",
    "char": "Mel",
    "icon": "🤝",
    "p": [
      "Um colega pede algo que você tem por alguns dias.",
      "Vocês combinam o tempo de uso.",
      "Depois do acordo, o objeto passa a pertencer ao colega.",
      "Pode envolver um objeto ou dinheiro.",
      "Há uma responsabilidade de devolução.",
      "Não é presente: é algo cedido temporariamente."
    ],
    "fake": 3,
    "correct": [
      "empréstimo",
      "emprestar",
      "pegar emprestado",
      "objeto emprestado",
      "dinheiro emprestado"
    ],
    "near": [
      "ajuda",
      "favor",
      "doação",
      "troca",
      "financiamento"
    ],
    "scene": "Você tem um único lápis reserva, que precisará usar amanhã. Um colega pede para levar esse lápis para casa por uma semana; ele costuma cumprir os combinados.",
    "opts": [
      "Emprestar por uma semana sem conversar sobre a sua necessidade.",
      "Emprestar até o início da aula amanhã, combinando a devolução.",
      "Explicar que precisa dele amanhã e ajudar o colega a procurar outro."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Pode deixar você sem o único lápis de que precisa amanhã.",
      "É uma possibilidade, mas depende de o colega devolver antes de você precisar.",
      "Respeita sua necessidade e oferece ajuda sem prometer o que não pode cumprir."
    ],
    "faixa": "5–7"
  },
  {
    "title": "Cofrinho",
    "char": "Bia",
    "icon": "🐷",
    "p": [
      "Costuma ter formato de bichinho ou de caixinha.",
      "Tem uma fenda por onde algo entra, mas não sai fácil.",
      "Serve para gastar todo dia na cantina.",
      "Quando está cheio, faz barulho de moedas e não precisa de tomada.",
      "Fica no quarto e guarda moedas e notas.",
      "É um lugar para guardar dinheiro até você precisar dele."
    ],
    "fake": 3,
    "correct": [
      "cofrinho",
      "cofre",
      "porquinho",
      "porquinho de guardar dinheiro",
      "lugar para guardar dinheiro"
    ],
    "near": [
      "dinheiro",
      "moeda",
      "caixinha",
      "banco"
    ],
    "scene": "Você tem R$ 12 no cofrinho. A sua escola vende um adesivo por R$ 4 hoje, e você sonha com um livro de R$ 20.",
    "opts": [
      "Comprar o adesivo e o livro fica para outro dia.",
      "Guardar tudo e esperar juntar R$ 20 para o livro.",
      "Gastar R$ 12 em adesivos hoje."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Aproveita algo pequeno, mas o livro demora mais.",
      "Mantém o foco no que você mais quer.",
      "Esvazia o cofrinho e o sonho some."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Economizar",
    "char": "Mel",
    "icon": "🪙",
    "p": [
      "Pode acontecer na cantina, no mercado ou em casa.",
      "Quem faz isso acaba com mais dinheiro no fim do dia.",
      "É deixar de gastar mais do que precisa.",
      "Apagar a luz ao sair do quarto também é um jeito.",
      "É gastar o máximo para ter tudo que aparece.",
      "É gastar menos para sobrar mais."
    ],
    "fake": 5,
    "correct": [
      "economizar",
      "economia",
      "gastar menos",
      "poupar",
      "guardar o que sobra"
    ],
    "near": [
      "guardar",
      "dinheiro",
      "cortar",
      "barato"
    ],
    "scene": "Sua família vai ao mercado. Você quer um suco de caixinha de R$ 6. Em casa tem suco para fazer de R$ 2 por jarra.",
    "opts": [
      "Levar o suco de caixinha só no fim de semana.",
      "Pedir o suco de caixinha todo dia.",
      "Fazer o suco em casa e levar na garrafa."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Ainda gasta, mas com limite.",
      "Gasto grande repetido pesa no fim do mês.",
      "Dá o mesmo prazer por bem menos."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Poupança",
    "char": "Leticia",
    "icon": "🏦",
    "p": [
      "Muita gente começa a fazer isso ainda criança.",
      "Você coloca dinheiro de lado de pouco em pouco.",
      "Geralmente é uma parte do que você recebe.",
      "Todo dinheiro guardado desse jeito dobra sozinho em um mês.",
      "Quem faz isso sempre chega mais perto de um objetivo.",
      "É separar um pouco todo mês para usar mais tarde."
    ],
    "fake": 4,
    "correct": [
      "poupança",
      "poupar",
      "guardar dinheiro todo mês",
      "guardar um pouco regularmente",
      "hábito de guardar"
    ],
    "near": [
      "guardar",
      "banco",
      "economia",
      "cofrinho"
    ],
    "scene": "Você recebe R$ 20 de mesada por mês e quer uma bola de R$ 60 em três meses. Seu amigo chama para um sorvete de R$ 10 hoje.",
    "opts": [
      "Guardar R$ 20 por mês e pular o sorvete.",
      "Tomar o sorvete e guardar R$ 10 neste mês.",
      "Gastar tudo agora e pensar na bola depois."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Chega nos R$ 60 no prazo planejado.",
      "Aproveita o amigo, mas atrasa a bola.",
      "Sem guardar, a bola não vem."
    ],
    "faixa": "8–11",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Juros",
    "char": "Caio",
    "icon": "📈",
    "p": [
      "Aparece quando o dinheiro fica parado em algum lugar combinado.",
      "Pode aumentar o que você guardou ou o que você deve.",
      "Quem guarda recebe um pouco; quem deve paga um pouco.",
      "Cresce com o tempo e com o valor envolvido.",
      "É um valor a mais que se ganha ou se paga com o tempo.",
      "Todo mundo recebe o mesmo valor, não importa quanto tempo passe."
    ],
    "fake": 6,
    "correct": [
      "juros",
      "juro",
      "valor a mais com o tempo",
      "rendimento",
      "dinheiro que cresce com o tempo"
    ],
    "near": [
      "lucro",
      "taxa",
      "dívida",
      "poupança"
    ],
    "scene": "Você tem R$ 50 e uma ideia: guardar por 6 meses num lugar seguro que paga um pouquinho por mês. Seu primo oferece vender um jogo usado por R$ 50 hoje.",
    "opts": [
      "Comprar o jogo hoje.",
      "Guardar por 6 meses e ver o que cresceu.",
      "Guardar metade e comprar um jogo de R$ 25."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Gasta tudo sem deixar o dinheiro trabalhar.",
      "O dinheiro cresce um pouco enquanto você espera.",
      "Divide o risco, mas rende menos."
    ],
    "faixa": "8–11",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Reserva de emergência",
    "char": "Vinicius",
    "icon": "🛟",
    "p": [
      "É dinheiro que não tem uma compra marcada.",
      "Fica separado para quando você não puder planejar.",
      "Pode ajudar a pagar um conserto ou um remédio.",
      "Serve para comprar presentes de aniversário.",
      "Ninguém quer usar, mas todo mundo fica feliz que existe.",
      "É dinheiro guardado para surpresas ruins."
    ],
    "fake": 4,
    "correct": [
      "reserva de emergência",
      "reserva",
      "dinheiro para emergência",
      "dinheiro guardado para imprevistos",
      "fundo de emergência"
    ],
    "near": [
      "imprevisto",
      "poupança",
      "emergência",
      "cofrinho"
    ],
    "scene": "Sua bicicleta fura o pneu antes de um passeio. O conserto custa R$ 15. Você tem R$ 25 na reserva e R$ 10 numa meta de um fone.",
    "opts": [
      "Usar a reserva e depois repor aos poucos.",
      "Pedir emprestado e esconder da família.",
      "Usar o dinheiro do fone e deixar a reserva intacta."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "A reserva existe para isso. Repor depois mantém a proteção.",
      "Esconder piora o problema e cria uma dívida escondida.",
      "Resolve, mas desmonta o sonho do fone sem necessidade."
    ],
    "faixa": "8–11",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Esperar para comprar",
    "char": "Tiko",
    "icon": "⏳",
    "p": [
      "É algo que acontece depois de você querer muito alguma coisa.",
      "Quem faz isso não leva o brinquedo na hora.",
      "É pegar tudo da prateleira para não perder.",
      "Ajuda a ver se você ainda quer a mesma coisa depois.",
      "Pode durar dias ou semanas.",
      "É decidir comprar mais tarde, quando tiver certeza."
    ],
    "fake": 3,
    "correct": [
      "esperar para comprar",
      "esperar",
      "paciência",
      "adiar a compra",
      "comprar depois"
    ],
    "near": [
      "guardar",
      "pensar",
      "desejo"
    ],
    "scene": "Você vê um carrinho de R$ 18 na loja e só tem R$ 10. Sua avó disse que pode ajudar no seu aniversário daqui a duas semanas.",
    "opts": [
      "Esperar o aniversário e ver se ainda quer o carrinho.",
      "Pedir o carrinho para a avó agora e chorar.",
      "Gastar os R$ 10 em outro brinquedo e esquecer o carrinho."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Dá tempo de ter certeza, e a ajuda chega.",
      "Pedir chorando não ajuda ninguém a decidir bem.",
      "Evita o choro, mas troca o que você quer por outra coisa qualquer."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Necessidade",
    "char": "Mel",
    "icon": "🍞",
    "p": [
      "É algo que as pessoas procuram todos os dias.",
      "Sem isso, o corpo ou a casa ficam sem o que precisam.",
      "Comida, abrigo e roupa de frio entram aqui.",
      "Vem antes de qualquer coisa só pelo gosto.",
      "É um brinquedo novo que todo mundo da turma tem.",
      "É o que você precisa de verdade para viver bem."
    ],
    "fake": 5,
    "correct": [
      "necessidade",
      "o que eu preciso",
      "coisa necessária",
      "algo essencial",
      "essencial"
    ],
    "near": [
      "desejo",
      "comida",
      "comprar",
      "importante"
    ],
    "scene": "Você tem R$ 20. Seus tênis estão rasgados e vão se estragar na chuva. Na loja há um tênis de R$ 20 e um boneco de R$ 20.",
    "opts": [
      "Comprar o boneco e continuar com o tênis rasgado.",
      "Comprar o tênis, que resolve o problema.",
      "Não comprar nada para ficar com R$ 20."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "O brinquedo é bom, mas o pé continua molhado.",
      "Resolve a necessidade com o dinheiro disponível.",
      "Segura o dinheiro, mas o problema continua."
    ],
    "faixa": "5–7",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Desejo",
    "char": "Bia",
    "icon": "🧸",
    "p": [
      "Aparece quando você vê algo muito legal.",
      "É um sentimento de querer muito.",
      "Pode mudar de um dia para o outro.",
      "Sem isso você não consegue comer nem se vestir.",
      "Não é um problema por si só, mas pede cuidado.",
      "É querer uma coisa, mesmo que você não precise dela."
    ],
    "fake": 4,
    "correct": [
      "desejo",
      "vontade",
      "querer",
      "vontade de ter algo",
      "coisa que eu quero"
    ],
    "near": [
      "necessidade",
      "gostar",
      "brinquedo",
      "comprar"
    ],
    "scene": "No mercado, a caixa de bombons de R$ 10 está bem na altura dos seus olhos. Você já tem dois chocolates em casa.",
    "opts": [
      "Pedir os bombons e levar mais um para casa.",
      "Dizer \"eu quero, mas não preciso agora\" e seguir.",
      "Esconder os bombons no carrinho sem falar."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Foi um desejo, e tudo bem, mas pesou no gasto.",
      "Reconhece o desejo sem agir por impulso.",
      "Esconder tira a chance de conversar e planejar."
    ],
    "faixa": "5–7",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Propaganda",
    "char": "Caio",
    "icon": "📺",
    "p": [
      "Aparece no intervalo de vídeos, em placas e em revistas.",
      "Quer chamar a sua atenção para alguma coisa.",
      "Usa cores, músicas e personagens que você gosta.",
      "Mostra o lado bom e quase nunca fala do preço total.",
      "É uma mensagem feita para convencer alguém a comprar.",
      "É sempre uma opinião neutra de um amigo que não ganha nada."
    ],
    "fake": 6,
    "correct": [
      "propaganda",
      "anúncio",
      "publicidade",
      "comercial",
      "mensagem para vender"
    ],
    "near": [
      "vender",
      "marketing",
      "oferta",
      "televisão"
    ],
    "scene": "Aparece um anúncio de um tênis com um jogador famoso. Seu tênis atual está bom, mas o novo custa R$ 200 e todos os seus amigos vão ter.",
    "opts": [
      "Pesquisar se o seu atual ainda serve e comparar.",
      "Pedir o tênis hoje porque todo mundo vai ter.",
      "Esquecer o assunto e nunca mais olhar tênis."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Separa o que o anúncio quer do que você precisa.",
      "O anúncio funcionou, e o gasto não foi pensado.",
      "Evita o gasto, mas ignora uma troca que pode ser necessária um dia."
    ],
    "faixa": "8–11",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Compra por impulso",
    "char": "Vinicius",
    "icon": "⚡",
    "p": [
      "Acontece rápido, sem muita conversa com você mesmo.",
      "Costuma ocorrer perto do caixa, em ofertas ou em jogos.",
      "Depois, a pessoa pode ficar pensando \"por que comprei?\".",
      "É quando você compra com um plano de semanas e uma lista.",
      "Pensar um dia antes ajuda a evitar.",
      "É comprar de repente, sem pensar direito antes."
    ],
    "fake": 4,
    "correct": [
      "compra por impulso",
      "impulso",
      "comprar sem pensar",
      "compra sem planejamento",
      "compra de repente"
    ],
    "near": [
      "compra",
      "desejo",
      "oferta",
      "pressa"
    ],
    "scene": "Num jogo de celular, aparece uma oferta de R$ 15 em moedas que acaba em 5 minutos. Você tem R$ 20.",
    "opts": [
      "Comprar para não perder a oferta.",
      "Fechar o jogo, esperar um dia e decidir depois.",
      "Pedir emprestado para comprar o dobro."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "A pressa fez a decisão por você.",
      "Dar tempo ajuda a ver se vale a pena.",
      "Aumenta o gasto e cria dívida pequena."
    ],
    "faixa": "8–11",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Custo-benefício",
    "char": "Leticia",
    "icon": "⚖️",
    "p": [
      "É uma conta que você faz antes de decidir.",
      "Compara o que você paga com o que você recebe.",
      "Sempre escolhe o produto mais barato da loja.",
      "Considera quanto tempo a coisa vai durar.",
      "Uma coisa mais cara pode ser melhor ou pior que uma mais barata.",
      "É perguntar: o que eu pago vale o que eu ganho?"
    ],
    "fake": 3,
    "correct": [
      "custo-benefício",
      "custo benefício",
      "vale a pena",
      "comparar preço e qualidade",
      "qualidade pelo preço"
    ],
    "near": [
      "preço",
      "barato",
      "qualidade",
      "comparar"
    ],
    "scene": "Você precisa de uma mochila. Uma custa R$ 40 e dura 1 ano. Outra custa R$ 70 e dura 4 anos.",
    "opts": [
      "Comprar a de R$ 70 e usar por mais tempo.",
      "Comprar a de R$ 40 e trocar todo ano.",
      "Comprar a mais barata que achar, de R$ 15."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "No total custa menos por ano de uso.",
      "Funciona, mas sai mais caro ao longo do tempo.",
      "Pode quebrar logo e gerar novo gasto."
    ],
    "faixa": "8–11",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Lista de compras",
    "char": "Tiko",
    "icon": "📝",
    "p": [
      "Pode ser escrita à mão ou no celular.",
      "Costuma ser feita antes de sair de casa.",
      "Tem nomes de coisas que a família vai levar.",
      "Ajuda a lembrar e a não comprar demais.",
      "É onde você escreve tudo que gostaria de ganhar.",
      "É um papel com o que precisa ser comprado."
    ],
    "fake": 5,
    "correct": [
      "lista de compras",
      "lista",
      "lista do mercado",
      "anotação do que comprar"
    ],
    "near": [
      "mercado",
      "papel",
      "anotar",
      "compras"
    ],
    "scene": "Você vai ao mercado com sua mãe. A lista tem leite, pão e frutas. Na prateleira há cartas de figurinhas.",
    "opts": [
      "Seguir a lista e pedir as figurinhas só se sobrar.",
      "Pegar as figurinhas primeiro e a lista depois.",
      "Esquecer a lista e escolher tudo na hora."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "A lista cuida do essencial e o extra vem se der.",
      "O extra vem antes do que é necessário.",
      "Sem lista, é fácil esquecer algo ou gastar demais."
    ],
    "faixa": "5–7",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Pix",
    "char": "Caio",
    "icon": "📲",
    "p": [
      "É usado no celular, sem precisar de nota ou moeda.",
      "Costuma levar poucos segundos para chegar.",
      "A pessoa escolhe quanto vai mandar e para quem.",
      "Só funciona quando o banco está aberto em horário comercial.",
      "Pede uma chave ou um código para encontrar quem vai receber.",
      "É um jeito de pagar ou receber dinheiro na hora pelo celular."
    ],
    "fake": 4,
    "correct": [
      "pix",
      "pagamento pelo celular",
      "pagamento instantâneo",
      "transferência instantânea",
      "pagar pelo celular"
    ],
    "near": [
      "transferência",
      "celular",
      "banco",
      "qr code"
    ],
    "scene": "Você vai pagar R$ 12 num lanche. O dono do quiosque mostra um código para pagar por Pix. O valor que aparece no seu celular é R$ 120.",
    "opts": [
      "Pagar rápido porque está com pressa.",
      "Parar, conferir o valor e falar com o responsável.",
      "Pagar R$ 120 e pedir para devolver depois."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "O erro pode custar caro e nem sempre dá para voltar.",
      "Conferir antes evita um erro difícil de corrigir.",
      "Pode ser resolvido, mas dá trabalho e risco."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Senha",
    "char": "Tiko",
    "icon": "🔐",
    "p": [
      "Só você deveria saber.",
      "Pode ser feita de letras, números e símbolos.",
      "Protege contas, jogos e aplicativos.",
      "Quanto mais difícil de adivinhar, mais segura fica.",
      "É um segredo que só você usa para entrar numa conta.",
      "Funciona melhor quando é igual para todos os aplicativos."
    ],
    "fake": 6,
    "correct": [
      "senha",
      "código secreto",
      "segredo de acesso",
      "senha de acesso",
      "palavra-passe"
    ],
    "near": [
      "segredo",
      "código",
      "conta",
      "login"
    ],
    "scene": "Um amigo pede a senha do seu jogo para \"dar uma força\" no nível. Ele promete devolver os itens.",
    "opts": [
      "Dar a senha porque é um amigo.",
      "Não dar e jogar junto sem mostrar a senha.",
      "Dar a senha só por um minuto e trocar depois."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "A senha é só sua. Passar para outra pessoa tira a proteção.",
      "Você ajuda e mantém a conta protegida.",
      "Reduz o risco, mas a senha já foi vista."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Compra online",
    "char": "Mel",
    "icon": "🛒",
    "p": [
      "Você escolhe, paga e depois espera chegar.",
      "Acontece sem entrar em uma loja de verdade.",
      "Mostra foto e descrição, mas você não pega na mão.",
      "O produto sempre chega no mesmo dia, sem exceção.",
      "É importante ver se o site é conhecido e seguro.",
      "É comprar algo por um site ou aplicativo."
    ],
    "fake": 4,
    "correct": [
      "compra online",
      "compra pela internet",
      "comprar na internet",
      "compra por site",
      "compra pelo aplicativo",
      "compra digital",
      "compra virtual",
      "compra pelo app",
      "e-commerce",
      "ecommerce"
    ],
    "near": [
      "internet",
      "loja",
      "site",
      "entrega",
      "compra"
    ],
    "scene": "Você acha um fone muito mais barato num site que ninguém conhece. A loja pede o pagamento só por Pix para uma pessoa física.",
    "opts": [
      "Pagar, porque o preço está ótimo.",
      "Procurar a loja em outro lugar e perguntar ao responsável.",
      "Pedir um desconto ainda maior e pagar."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Preço muito baixo e pagamento estranho são sinais de alerta.",
      "Verifica antes de arriscar.",
      "Ainda assume o risco de perder o dinheiro."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Cartão de crédito",
    "char": "Leticia",
    "icon": "💳",
    "p": [
      "É um cartão que você passa e paga depois.",
      "Quem usa recebe uma fatura com o que gastou.",
      "Dinheiro de verdade só sai da conta se você usar o cartão de débito.",
      "Se a fatura não for paga, o valor cresce.",
      "Tem um limite de quanto pode usar.",
      "É um cartão que deixa pagar depois, com data marcada."
    ],
    "fake": 3,
    "correct": [
      "cartão de crédito",
      "crédito",
      "cartão de pagar depois",
      "cartão com fatura",
      "cartão que paga depois"
    ],
    "near": [
      "cartão",
      "débito",
      "fatura",
      "limite"
    ],
    "scene": "Sua família usa o cartão de crédito para comprar um sofá de R$ 1.200 em 4 vezes de R$ 300. O dinheiro do mês já está comprometido com contas.",
    "opts": [
      "Comprar e depois ver como paga a fatura.",
      "Conferir se a parcela cabe no que entra todo mês antes de comprar.",
      "Comprar dois sofás para dividir o gasto."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Pode virar dívida se a fatura passar do que entra.",
      "Evita assumir mais do que cabe.",
      "Aumenta o gasto sem resolver."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Saldo",
    "char": "Bia",
    "icon": "🧾",
    "p": [
      "É um número que aparece quando você olha o dinheiro guardado.",
      "Muda quando você guarda ou quando você gasta.",
      "Pode estar na tela do celular ou num papel.",
      "Diz quanto dinheiro sobrou.",
      "É sempre igual, mesmo depois de gastar.",
      "É o quanto de dinheiro você ainda tem."
    ],
    "fake": 5,
    "correct": [
      "saldo",
      "quanto eu tenho",
      "dinheiro que sobrou",
      "valor disponível",
      "quanto tem na conta"
    ],
    "near": [
      "conta",
      "dinheiro",
      "extrato",
      "total"
    ],
    "scene": "O seu saldo no cofre digital da família é R$ 30. Um jogo custa R$ 25 e você ainda quer comprar um lanche amanhã por R$ 8.",
    "opts": [
      "Comprar o jogo e ficar sem lanche amanhã.",
      "Conferir o saldo e escolher só um dos dois.",
      "Comprar os dois e pedir ajuda para completar."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Resolve um desejo, mas deixa o outro sem dinheiro.",
      "Olhar o saldo mostra o que cabe.",
      "Gasta mais do que tem e cria problema."
    ],
    "faixa": "5–7",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Código de verificação",
    "char": "Vinicius",
    "icon": "🔢",
    "p": [
      "Chega por mensagem ou por aplicativo.",
      "Tem poucos números e vale por pouco tempo.",
      "Serve para provar que é você mesmo.",
      "Um atendente de verdade sempre pede esse código por telefone.",
      "Quem recebe nunca deve passar para ninguém.",
      "É um número de uso único que confirma que você é você."
    ],
    "fake": 4,
    "correct": [
      "código de verificação",
      "código",
      "código de segurança",
      "código por mensagem",
      "confirmação de identidade"
    ],
    "near": [
      "senha",
      "número",
      "mensagem",
      "segurança"
    ],
    "scene": "Alguém liga dizendo ser do banco e pede o código que acabou de chegar por mensagem no celular para \"cancelar uma compra\".",
    "opts": [
      "Passar o código para cancelar logo.",
      "Desligar e ligar para o número oficial do banco.",
      "Pedir para a pessoa repetir o nome e passar depois."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Esse código nunca deve ser passado a ninguém.",
      "Confirma por um canal que você mesmo escolheu.",
      "A pessoa pode fingir um nome. O risco continua."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Mesada",
    "char": "Mel",
    "icon": "🪙",
    "p": [
      "Vem de alguém da família, a cada semana ou mês.",
      "É um dinheiro que a criança recebe e pode escolher o que fazer.",
      "Pode ajudar a treinar o guardar e o gastar.",
      "O valor costuma ser combinado em conversa.",
      "É o dinheiro que a criança recebe da família de tempos em tempos.",
      "É um prêmio que sempre aparece quando a criança pede."
    ],
    "fake": 6,
    "correct": [
      "mesada",
      "mesada da família",
      "dinheiro da família",
      "semanada",
      "dinheiro que a criança recebe"
    ],
    "near": [
      "dinheiro",
      "presente",
      "salário",
      "cofrinho"
    ],
    "scene": "Você recebe R$ 10 de mesada por semana. Hoje, na escola, há uma feira de livros de R$ 8 e um colega chama para comprar um doce de R$ 5.",
    "opts": [
      "Comprar o livro e deixar o doce para a próxima semana.",
      "Gastar R$ 10 em doces.",
      "Guardar R$ 10 e não comprar nada."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Escolhe uma coisa por vez com a mesada.",
      "Gasta tudo sem pensar no que vem depois.",
      "Guarda, mas deixa o livro sem chance."
    ],
    "faixa": "5–7",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Trabalho",
    "char": "Caio",
    "icon": "🛠️",
    "p": [
      "Pessoas de todas as idades fazem isso de formas diferentes.",
      "Pode ser com as mãos, com ideias ou com palavras.",
      "Muitos fazem isso todos os dias e voltam para casa cansados.",
      "É tudo que a pessoa faz só por diversão e sem ninguém precisar.",
      "Ajuda os outros e muitas vezes paga as contas da casa.",
      "É o que a pessoa faz para ganhar dinheiro e ajudar os outros."
    ],
    "fake": 4,
    "correct": [
      "trabalho",
      "trabalhar",
      "emprego",
      "profissão",
      "ocupação"
    ],
    "near": [
      "dinheiro",
      "ganhar",
      "empresa"
    ],
    "scene": "O padeiro acorda às 4 da manhã para fazer pão antes de todo mundo acordar. Você pergunta o que ele ganha com isso.",
    "opts": [
      "Ele ganha dinheiro e todo mundo tem pão fresco.",
      "Ele ganha só para se divertir.",
      "Ele não ganha nada, o pão aparece sozinho."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "O trabalho gera dinheiro para ele e valor para os outros.",
      "Quem trabalha tem uma razão para fazer, e muitas vezes é o pagamento.",
      "O pão não aparece sozinho, alguém o faz."
    ],
    "faixa": "5–7",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Salário",
    "char": "Leticia",
    "icon": "💼",
    "p": [
      "É recebido por quem trabalha em uma empresa.",
      "Costuma chegar todo mês, em uma data conhecida.",
      "É o dinheiro que a pessoa ganha só uma vez na vida.",
      "Uma parte é tirada antes de o dinheiro chegar na conta.",
      "O valor foi combinado antes de começar.",
      "É o pagamento do trabalho feito durante o mês."
    ],
    "fake": 3,
    "correct": [
      "salário",
      "pagamento mensal",
      "pagamento do trabalho",
      "dinheiro do trabalho",
      "ordenado"
    ],
    "near": [
      "trabalho",
      "dinheiro",
      "pagamento",
      "renda"
    ],
    "scene": "Sua tia recebe R$ 2.000 de salário. Ela tem R$ 1.500 de contas fixas e quer fazer uma viagem de R$ 800.",
    "opts": [
      "Fazer a viagem de uma vez e atrasar contas.",
      "Guardar R$ 100 por mês até chegar nos R$ 800.",
      "Cancelar as contas fixas para viajar."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Atrasar contas costuma custar mais do que a viagem.",
      "Planeja sem faltar com o essencial.",
      "Resolve a viagem, mas perde serviços necessários."
    ],
    "faixa": "8–11",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Lucro",
    "char": "Vinicius",
    "icon": "🍋",
    "p": [
      "Aparece quando alguém vende algo.",
      "Depende do que se ganhou e do que se gastou.",
      "Se a conta dá mais de um lado, sobra. Se dá menos, falta.",
      "Um vendedor de limonada pensa nisso o tempo todo.",
      "É tudo o que você recebe com as vendas, sem tirar nenhum custo.",
      "É o que sobra da venda depois de pagar os custos."
    ],
    "fake": 5,
    "correct": [
      "lucro",
      "o que sobra da venda",
      "ganho",
      "sobra do negócio",
      "ganho depois dos custos"
    ],
    "near": [
      "venda",
      "dinheiro",
      "receita",
      "negócio"
    ],
    "scene": "Você vende 10 copos de limonada a R$ 3. Gastou R$ 12 com limões, açúcar e copos.",
    "opts": [
      "Contar só os R$ 30 recebidos e ficar feliz.",
      "Descontar o gasto e ver que sobraram R$ 18.",
      "Achar que perdeu, porque gastou R$ 12."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Esquece o custo e pode errar nas próximas contas.",
      "A conta correta é 30 menos 12.",
      "Gastou, mas também ganhou mais do que gastou."
    ],
    "faixa": "8–11",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Renda extra",
    "char": "Bia",
    "icon": "✨",
    "p": [
      "É um dinheiro a mais, além do que a pessoa já recebe.",
      "Pode vir de uma tarefa feita nos fins de semana.",
      "Quem faz isso usa algo que sabe fazer bem.",
      "Tem que ser guardado até a pessoa fazer 18 anos.",
      "Pode ser pouco, mas ajuda no fim do mês.",
      "É um dinheiro a mais por um trabalho a mais."
    ],
    "fake": 4,
    "correct": [
      "renda extra",
      "dinheiro extra",
      "dinheiro a mais",
      "bico",
      "trabalho extra"
    ],
    "near": [
      "dinheiro",
      "salário",
      "trabalho",
      "vender"
    ],
    "scene": "Sua prima sabe desenhar muito bem. Colegas pediram desenhos de personagens. Ela pode cobrar R$ 5 por desenho ou fazer de graça.",
    "opts": [
      "Cobrar R$ 5 e combinar quantos desenhos faz por semana.",
      "Fazer de graça e ficar sem tempo para estudar.",
      "Cobrar R$ 50 por desenho sem conversar."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Valor justo e combinado com limite de tempo.",
      "Ajuda os amigos, mas não vira renda.",
      "Preço sem conversa pode afastar os clientes."
    ],
    "faixa": "8–11",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Empreender",
    "char": "Tiko",
    "icon": "🚀",
    "p": [
      "Começa com uma ideia e um pouco de coragem.",
      "Quem faz isso decide o que vender e para quem.",
      "Precisa de um plano e de aprender com os erros.",
      "Pode dar certo ou não, mas ensina muito.",
      "É criar o seu próprio negócio ou projeto.",
      "É sempre esperar que outra pessoa dê as ordens."
    ],
    "fake": 6,
    "correct": [
      "empreender",
      "empreendedorismo",
      "criar um negócio",
      "abrir um negócio",
      "ter o próprio negócio"
    ],
    "near": [
      "negócio",
      "vender",
      "ideia",
      "trabalhar"
    ],
    "scene": "Você e um amigo têm a ideia de vender pulseiras na feira da escola. Cada pulseira custa R$ 2 para fazer.",
    "opts": [
      "Fazer 5 pulseiras para testar e ver se vendem.",
      "Comprar material para 200 pulseiras sem testar.",
      "Desistir porque pode não dar certo."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Testa a ideia com pouco risco.",
      "Gasta muito sem saber se alguém vai comprar.",
      "Evita o risco, mas não aprende nada."
    ],
    "faixa": "8–11",
    "tema": "Trabalho e ganhar dinheiro"
  }
];

/* Respostas ampliadas para o teste: cada conjunto vale como acerto quando todas as palavras aparecem (prefixo da palavra). */
const EXTRA={
'Promoção relâmpago':{tipo:'É um tipo de oferta de loja.',nudge:'Pense: essa oferta dura muito ou pouco tempo?',sets:[['relampago'],['promocao','hoje'],['oferta','hoje'],['promocao','tempo'],['oferta','tempo'],['promocao','pouco'],['oferta','pouco'],['promocao','curta'],['oferta','curta'],['promocao','acaba'],['oferta','acaba'],['promocao','rapida'],['oferta','rapida']]},
'Troco':{tipo:'É um valor de dinheiro que aparece quando você paga.',nudge:'Pense: você paga com uma nota maior e o caixa devolve algo.',sets:[['troco'],['dinheiro','devolvid'],['diferenca','devolvid']]},
'Golpe por mensagem':{tipo:'É um perigo que chega no celular.',nudge:'Pense: alguém quer enganar você por uma mensagem.',sets:[['golpe'],['fraude'],['phishing'],['enganar','mensagem'],['mensagem','falsa'],['mensagem','enganosa']]},
'Parcelamento':{tipo:'É um jeito de pagar uma compra.',nudge:'Pense: pagar uma compra aos poucos, em vários pedaços.',sets:[['parcel'],['prestac'],['dividir','pagamento'],['dividir','compra'],['pagar','partes'],['pagar','meses'],['pagar','pedacos'],['pagar','aos poucos']]},
'Preço por unidade':{tipo:'É uma conta para comparar produtos.',nudge:'Pense: quanto custa cada um, não a caixa toda.',sets:[['preco','unidade'],['preco','unitario'],['custo','unidade'],['valor','cada'],['preco','cada'],['quanto','cada'],['preco','item'],['unitario']]},
'Imprevisto':{tipo:'É uma situação que acontece sem avisar.',nudge:'Pense: algo que ninguém esperava e mudou os planos.',sets:[['imprevist'],['inesperad'],['nao','planejad'],['nao','esperad'],['sem','avisar']]},
'Meta':{tipo:'É algo que você planeja alcançar.',nudge:'Pense: um objetivo com valor e prazo.',sets:[['meta'],['objetivo'],['alvo']]},
'Empréstimo':{tipo:'É algo que você pega e depois devolve.',nudge:'Pense: alguém deixa uma coisa com você só por um tempo.',sets:[['emprest']]}
};
Object.assign(EXTRA,{"Cofrinho": {"tipo": "É um objeto, não uma ação.", "nudge": "Pense: onde uma criança guarda moedas em casa?", "sets": [["cofr"], ["porquinho"], ["guardar", "dinheiro"]]}, "Economizar": {"tipo": "É uma ação (verbo).", "nudge": "Pense: o que você faz para sobrar mais dinheiro?", "sets": [["economiz"], ["gastar", "menos"], ["poup"]]}, "Poupança": {"tipo": "É um hábito, que se repete.", "nudge": "Pense: o que acontece quando você guarda um pouquinho sempre?", "sets": [["poupanc"], ["poupar"], ["guardar", "mes"]]}, "Juros": {"tipo": "É um valor extra, e depende do tempo.", "nudge": "Pense: o que muda no dinheiro guardado depois de muitos meses?", "sets": [["juro"], ["rendimento"], ["valor", "extra"], ["valor", "mais", "tempo"]]}, "Reserva de emergência": {"tipo": "É dinheiro guardado com um propósito.", "nudge": "Pense: para qual tipo de dia esse dinheiro foi guardado?", "sets": [["reserva"], ["emerg", "guard"], ["dinheiro", "imprevisto"]]}, "Esperar para comprar": {"tipo": "É uma atitude, tem tempo envolvido.", "nudge": "Pense: o que você faz antes de levar uma coisa para casa?", "sets": [["esper"], ["pacienc"], ["adiar"], ["comprar", "depois"]]}, "Necessidade": {"tipo": "É um tipo de coisa que se precisa.", "nudge": "Pense: sem o que você não consegue viver bem?", "sets": [["necessid"], ["essencial"], ["preciso"]]}, "Desejo": {"tipo": "É um sentimento, não um objeto.", "nudge": "Pense: como se chama o que você sente ao ver algo e dizer \"eu quero\"?", "sets": [["desej"], ["vontade"], ["quero"], ["quer"]]}, "Propaganda": {"tipo": "É uma mensagem, não um produto.", "nudge": "Pense: o que quer te convencer a comprar enquanto você vê um vídeo?", "sets": [["propagand"], ["anunc"], ["publicid"], ["comercial"]]}, "Compra por impulso": {"tipo": "É um jeito de comprar.", "nudge": "Pense: como se chama comprar de repente, só pela emoção?", "sets": [["impuls"], ["sem", "pens"], ["sem", "planej"]]}, "Custo-benefício": {"tipo": "É uma forma de comparar.", "nudge": "Pense: o que se compara além do preço?", "sets": [["custo", "benef"], ["vale", "pena"], ["qualidade", "preco"]]}, "Lista de compras": {"tipo": "É um papel ou nota, não uma ação.", "nudge": "Pense: o que a família escreve antes de ir ao mercado?", "sets": [["lista"], ["anotar", "compr"]]}, "Pix": {"tipo": "É um meio de pagamento.", "nudge": "Pense: como se paga na hora pelo celular, com uma chave?", "sets": [["pix"], ["pagar", "celular"], ["pagamento", "instant"]]}, "Senha": {"tipo": "É um segredo, feito de letras e números.", "nudge": "Pense: o que protege a sua conta e só você sabe?", "sets": [["senha"], ["codigo", "secret"], ["segredo", "acesso"]]}, "Compra online": {"tipo": "É um jeito de comprar.", "nudge": "Pense: como se compra sem sair de casa?", "sets": [["compra", "online"], ["comprar", "internet"], ["comprar", "site"], ["online"], ["compra", "digital"], ["compra", "virtual"], ["comprar", "app"]]}, "Cartão de crédito": {"tipo": "É um objeto e também uma forma de pagar.", "nudge": "Pense: como se chama o cartão que você paga depois, na fatura?", "sets": [["cartao", "credito"], ["credito"], ["cartao", "fatura"], ["pagar", "depois"]]}, "Saldo": {"tipo": "É um número sobre o seu dinheiro.", "nudge": "Pense: como se chama o número que mostra quanto sobrou?", "sets": [["saldo"], ["quanto", "tenho"], ["dinheiro", "sobrou"], ["quanto", "conta"]]}, "Código de verificação": {"tipo": "É um número, e vale por pouco tempo.", "nudge": "Pense: o que chega por mensagem para provar que é você?", "sets": [["codigo"], ["verific"], ["numero", "uso", "unico"]]}, "Mesada": {"tipo": "É um dinheiro, vem de alguém da família.", "nudge": "Pense: como se chama o dinheiro combinado que a criança recebe?", "sets": [["mesada"], ["semanada"]]}, "Trabalho": {"tipo": "É uma ação, e muita gente faz todo dia.", "nudge": "Pense: o que o seu pai ou mãe faz para ganhar dinheiro?", "sets": [["trabalh"], ["emprego"], ["profiss"]]}, "Salário": {"tipo": "É um pagamento, com data certa.", "nudge": "Pense: o que chega todo mês para quem trabalha?", "sets": [["salario"], ["ordenado"], ["pagamento", "trabalh"]]}, "Lucro": {"tipo": "É um resultado de uma conta.", "nudge": "Pense: o que sobra depois de tirar o que se gastou?", "sets": [["lucro"], ["sobra", "venda"], ["ganho", "custo"], ["sobra", "custo"]]}, "Renda extra": {"tipo": "É um dinheiro, vem além do que se recebe normalmente.", "nudge": "Pense: como se chama o dinheiro que vem de um trabalho a mais?", "sets": [["renda", "extra"], ["dinheiro", "extra"], ["dinheiro", "mais"], ["bico"]]}, "Empreender": {"tipo": "É uma ação (verbo).", "nudge": "Pense: o que se faz para criar o próprio negócio?", "sets": [["empreend"], ["criar", "negocio"], ["abrir", "negocio"], ["proprio", "negocio"]]}});
