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
      "A loja coloca um relógio contando o tempo ao lado da oferta.",
      "A ideia é fazer você comprar depressa, sem pensar muito.",
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
    "faixa": "8–11",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Troco",
    "char": "Mel",
    "icon": "💰",
    "p": [
      "Volta para a sua mão depois de pagar.",
      "Acontece quando você paga com uma nota maior.",
      "Vale contar antes de guardar.",
      "Para saber quanto volta, você soma tudo.",
      "Paguei 10, custou 7: voltam 3.",
      "É o dinheiro que o caixa devolve."
    ],
    "fake": 4,
    "correct": [
      "troco",
      "dinheiro de troco",
      "valor do troco",
      "diferença devolvida depois de pagar"
    ],
    "near": [
      "dinheiro que volta",
      "devolução",
      "moeda"
    ],
    "scene": "Um suco custa R$ 7. Você paga com uma nota de R$ 10, e o caixa devolve só R$ 2.",
    "opts": [
      "Contar em casa e voltar outro dia.",
      "Guardar sem contar e sair correndo.",
      "Contar na hora e avisar que falta R$ 1."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Você percebe o erro, mas depois fica mais difícil de resolver.",
      "Sem contar, você perde R$ 1 e nem percebe.",
      "Avisar na hora é o jeito mais fácil de resolver."
    ],
    "faixa": "5–7",
    "tema": "Consumo e escolhas",
    "kit": true
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
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança"
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
    "faixa": "8–11",
    "tema": "Consumo e escolhas",
    "kit": true
  },
  {
    "title": "Preço por unidade",
    "char": "Caio",
    "icon": "🛒",
    "p": [
      "Duas caixas do mesmo produto trazem quantidades diferentes.",
      "A embalagem mais barata nem sempre é a que rende mais.",
      "Uma caixa de menor preço total sempre tem menor preço por unidade.",
      "Na etiqueta aparecem o preço da caixa e a quantidade de itens.",
      "Para comparar, você considera o preço e a quantidade.",
      "Mostra quanto custa um lápis, não a caixa inteira."
    ],
    "fake": 3,
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
    "faixa": "8–11",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Imprevisto",
    "char": "Bia",
    "icon": "☔",
    "p": [
      "Acontece de repente.",
      "Você já sabia que ia acontecer.",
      "Pode ser em casa, na escola ou num passeio.",
      "Às vezes custa dinheiro.",
      "Ter um dinheirinho guardado ajuda.",
      "É algo que acontece sem você esperar."
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
    "scene": "Está chovendo, e o seu guarda-chuva quebrou. Você tem R$ 35 guardados para um brinquedo.",
    "opts": [
      "Pegar um emprestado hoje e consertar o seu depois, por R$ 8.",
      "Usar R$ 30 do brinquedo para comprar um novo.",
      "Ir com o guarda-chuva quebrado e se molhar."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Resolve hoje e gasta pouco.",
      "Resolve, mas o brinquedo vai demorar mais.",
      "Você se molha, e o problema continua."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Meta",
    "char": "Vinicius",
    "icon": "🎯",
    "p": [
      "É algo que você quer muito conseguir.",
      "Você sabe quanto custa.",
      "Você guarda um pouco de cada vez.",
      "Dá para pintar num desenho quanto já juntou.",
      "Só gente grande pode ter uma.",
      "É o que você quer alcançar juntando dinheiro."
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
    "scene": "Você quer um livro de R$ 30. Já tem R$ 20 e guarda R$ 5 por semana. Hoje viu figurinhas de R$ 10.",
    "opts": [
      "Comprar figurinhas mais baratas e esperar um pouco mais pelo livro.",
      "Não comprar e guardar R$ 5 por semana: em 2 semanas, o livro é seu.",
      "Comprar as figurinhas de R$ 10 agora."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Dá para ter os dois, mas o livro demora mais.",
      "Em duas semanas você chega aos R$ 30.",
      "Você volta para R$ 10, e o livro fica bem mais longe."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar",
    "kit": true
  },
  {
    "title": "Empréstimo",
    "char": "Mel",
    "icon": "🤝",
    "p": [
      "Alguém pede uma coisa sua por um tempo.",
      "Vocês combinam quando ela volta.",
      "Depois, a coisa fica para sempre com quem pegou.",
      "Pode ser um brinquedo, um lápis ou dinheiro.",
      "Quem pega precisa cuidar e devolver.",
      "Não é presente: é usar e devolver."
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
      "presente"
    ],
    "scene": "Seu colega pede o seu único lápis azul para levar para casa. Você vai precisar dele amanhã na aula.",
    "opts": [
      "Emprestar sem falar nada.",
      "Emprestar e pedir para ele trazer amanhã cedo.",
      "Contar que precisa dele amanhã e emprestar outra cor."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Você pode ficar sem o lápis amanhã.",
      "Pode dar certo, se ele lembrar de trazer.",
      "Você ajuda o colega e não fica sem o que precisa."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar",
    "kit": true
  },
  {
    "title": "Cofrinho",
    "char": "Bia",
    "icon": "🐷",
    "p": [
      "Costuma ter formato de bichinho ou de caixinha.",
      "Tem uma fenda por onde algo entra, mas não sai fácil.",
      "Serve para gastar todo dia na cantina.",
      "Quando você chacoalha, dá para ouvir as moedas.",
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
    "tema": "Poupar e guardar",
    "kit": true
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
      "Todo dinheiro guardado desse jeito dobra sozinho em um mês.",
      "Você coloca dinheiro de lado de pouco em pouco.",
      "Geralmente é uma parte do que você recebe.",
      "Quem faz isso sempre chega mais perto de um objetivo.",
      "É separar um pouco todo mês para usar mais tarde."
    ],
    "fake": 2,
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
      "Tomar o sorvete e guardar R$ 10 neste mês.",
      "Guardar R$ 20 por mês e pular o sorvete.",
      "Gastar tudo agora e pensar na bola depois."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Aproveita o amigo, mas atrasa a bola.",
      "Chega nos R$ 60 no prazo planejado.",
      "Sem guardar, a bola não vem."
    ],
    "faixa": "8–11",
    "tema": "Poupar e guardar",
    "kit": true
  },
  {
    "title": "Juros",
    "char": "Caio",
    "icon": "📈",
    "p": [
      "Aparece quando o dinheiro passa um tempo guardado ou emprestado.",
      "Pode aumentar o que você guardou ou o que você deve.",
      "Quem guarda recebe um pouco; quem deve paga um pouco.",
      "Todo mundo recebe o mesmo valor, não importa quanto tempo passe.",
      "Cresce com o tempo e com o valor envolvido.",
      "É um valor a mais que se ganha ou se paga com o tempo."
    ],
    "fake": 4,
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
      "Aproveita um pouco agora, mas rende menos."
    ],
    "faixa": "8–11",
    "tema": "Poupar e guardar",
    "kit": true
  },
  {
    "title": "Reserva de emergência",
    "char": "Vinicius",
    "icon": "🛟",
    "p": [
      "É dinheiro que não tem uma compra marcada.",
      "Fica separado para quando você não puder planejar.",
      "Pode ajudar a pagar um conserto ou um remédio.",
      "Ninguém quer usar, mas todo mundo fica feliz que existe.",
      "Serve para comprar presentes de aniversário.",
      "É dinheiro guardado para surpresas ruins."
    ],
    "fake": 5,
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
    "tema": "Poupar e guardar",
    "kit": true
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
      "Fazer birra na loja para levar o carrinho agora.",
      "Gastar os R$ 10 em outro brinquedo e esquecer o carrinho."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Dá tempo de ter certeza, e a ajuda chega.",
      "Birra não ajuda ninguém a decidir bem.",
      "Evita o choro, mas troca o que você quer por outra coisa qualquer."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar",
    "kit": true
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
    "tema": "Consumo e escolhas",
    "kit": true
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
    "tema": "Consumo e escolhas",
    "kit": true
  },
  {
    "title": "Propaganda",
    "char": "Caio",
    "icon": "📺",
    "p": [
      "Aparece no intervalo de vídeos, em placas e em revistas.",
      "É sempre uma opinião neutra de um amigo que não ganha nada.",
      "Quer chamar a sua atenção para alguma coisa.",
      "Usa cores, músicas e personagens que você gosta.",
      "Mostra o lado bom e quase nunca fala do preço total.",
      "É uma mensagem feita para convencer alguém a comprar."
    ],
    "fake": 2,
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
    "scene": "Na fila do caixa do mercado, você vê um chaveiro de R$ 15 que nem pensava em comprar. Você tem R$ 20 para o lanche da semana.",
    "opts": [
      "Comprar, porque é legal e está ali.",
      "Esperar até amanhã e só comprar se ainda quiser e couber no dinheiro.",
      "Comprar um chaveiro mais barato, de R$ 5."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Gasta quase todo o dinheiro do lanche em algo que você nem queria antes.",
      "Dar um tempo ajuda a ver se é vontade de verdade ou só impulso.",
      "Gasta menos, mas ainda compra algo que não estava nos planos."
    ],
    "faixa": "8–11",
    "tema": "Consumo e escolhas",
    "kit": true
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
      1,
      -1
    ],
    "why": [
      "A lista cuida do essencial e o extra vem se der.",
      "Compra o que precisa, mas o extra vem antes e pode faltar dinheiro.",
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
      "Só funciona quando o banco está aberto em horário comercial.",
      "A pessoa escolhe quanto vai mandar e para quem.",
      "Pede uma chave ou um código para encontrar quem vai receber.",
      "É um jeito de pagar ou receber dinheiro na hora pelo celular."
    ],
    "fake": 3,
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
      "Não pagar pelo código e pagar em dinheiro, sem avisar o dono.",
      "Parar, conferir o valor e falar com o responsável."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "O erro pode custar caro e nem sempre dá para voltar.",
      "Evita o erro, mas o código errado continua lá para o próximo cliente.",
      "Conferir antes evita um erro difícil de corrigir."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança",
    "kit": true
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
      "Funciona melhor quando é igual para todos os aplicativos.",
      "É um segredo que só você usa para entrar numa conta."
    ],
    "fake": 5,
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
      "Dar a senha só por um minuto e trocar depois.",
      "Dar a senha porque é um amigo.",
      "Não dar e jogar junto sem mostrar a senha."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Reduz o risco, mas a senha já foi vista.",
      "A senha é só sua. Passar para outra pessoa tira a proteção.",
      "Você ajuda e mantém a conta protegida."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança",
    "kit": true
  },
  {
    "title": "Compra online",
    "char": "Mel",
    "icon": "💻",
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
      "Desistir do fone por enquanto."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Preço muito baixo e pagamento estranho são sinais de alerta.",
      "Verifica antes de arriscar.",
      "Evita o golpe, mas você continua sem o fone."
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
      "Com cartão de crédito, a compra sai de graça.",
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
      "Parcelar em 8 vezes de R$ 150 para caber no mês.",
      "Conferir se a parcela cabe no que entra todo mês antes de comprar."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Pode virar dívida se a fatura passar do que entra.",
      "A parcela cabe, mas o compromisso dura o dobro do tempo e pode ter juros.",
      "Evita assumir mais do que cabe."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança",
    "kit": true
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
      "Desligar sem passar o código, mas não contar para ninguém."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Esse código nunca deve ser passado a ninguém.",
      "Confirma por um canal que você mesmo escolheu.",
      "Você não cai no golpe, mas sua família não fica sabendo que alguém tentou."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Mesada",
    "char": "Mel",
    "icon": "👛",
    "p": [
      "Vem de alguém da família, a cada semana ou mês.",
      "É um prêmio que sempre aparece quando a criança pede.",
      "É um dinheiro que a criança recebe e pode escolher o que fazer.",
      "Pode ajudar a treinar o guardar e o gastar.",
      "O valor costuma ser combinado em conversa.",
      "É o dinheiro que a criança recebe da família de tempos em tempos."
    ],
    "fake": 2,
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
      "Guardar R$ 10 e não comprar nada.",
      "Gastar R$ 10 em doces.",
      "Comprar o livro e deixar o doce para a próxima semana."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Guarda, mas deixa o livro sem chance.",
      "Gasta tudo sem pensar no que vem depois.",
      "Escolhe uma coisa por vez com a mesada."
    ],
    "faixa": "5–7",
    "tema": "Trabalho e ganhar dinheiro",
    "kit": true
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
    "scene": "Sua tia faz bolos para vender. Ela pede a sua ajuda no sábado de manhã para embalar, e você queria brincar a manhã toda.",
    "opts": [
      "Ajudar de manhã e brincar à tarde.",
      "Dizer que vai ajudar e não aparecer.",
      "Brincar e pedir que ela chame outra pessoa."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "A tia consegue entregar os bolos, e você ainda brinca.",
      "Ela contava com você, e os bolos podem atrasar.",
      "Você foi sincero, mas a tia fica sem a sua ajuda."
    ],
    "faixa": "5–7",
    "tema": "Trabalho e ganhar dinheiro",
    "kit": true
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
      "Parcelar a viagem no cartão em 8 vezes de R$ 100.",
      "Fazer a viagem de uma vez e atrasar contas.",
      "Guardar R$ 100 por mês até chegar nos R$ 800."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Cabe no mês, mas ela viaja já devendo e prende o salário por 8 meses.",
      "Atrasar contas costuma custar mais do que a viagem.",
      "Planeja sem faltar com o essencial."
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
      "Pode ser pouco, mas ajuda no fim do mês.",
      "Tem que ser guardado até a pessoa fazer 18 anos.",
      "É um dinheiro a mais por um trabalho a mais."
    ],
    "fake": 5,
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
      "Fazer de graça e ficar sem tempo para estudar.",
      "Cobrar R$ 5 e combinar quantos desenhos faz por semana.",
      "Cobrar R$ 50 por desenho sem conversar."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Ajuda os amigos, mas não vira renda.",
      "Valor justo e combinado com limite de tempo.",
      "Preço sem conversa pode afastar os clientes."
    ],
    "faixa": "8–11",
    "tema": "Trabalho e ganhar dinheiro",
    "kit": true
  },
  {
    "title": "Empreender",
    "char": "Tiko",
    "icon": "🚀",
    "p": [
      "Começa com uma ideia e um pouco de coragem.",
      "Quem faz isso decide o que vender e para quem.",
      "Precisa de um plano e de aprender com os erros.",
      "É sempre esperar que outra pessoa dê as ordens.",
      "Pode dar certo ou não, mas ensina muito.",
      "É criar o seu próprio negócio ou projeto."
    ],
    "fake": 4,
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
    "tema": "Trabalho e ganhar dinheiro",
    "kit": true
  },
  {
    "title": "Escolha",
    "char": "Caio",
    "icon": "🤔",
    "p": [
      "Acontece quando você quer duas coisas ao mesmo tempo.",
      "O dinheiro que você tem só dá para uma delas.",
      "Para fazer bem, vale pensar: qual eu quero mais?",
      "Quando você fica com uma coisa, a outra fica para depois.",
      "Quem tem dinheiro pode comprar tudo o que quiser de uma vez.",
      "É decidir entre isto ou aquilo."
    ],
    "fake": 5,
    "correct": [
      "escolha",
      "escolher",
      "fazer uma escolha",
      "decidir",
      "decisão"
    ],
    "near": [
      "desejo",
      "comprar",
      "preferência"
    ],
    "scene": "Você tem R$ 6. O picolé custa R$ 5 e o pacote de adesivos custa R$ 4. Você queria os dois.",
    "opts": [
      "Pensar qual você quer mais e comprar só ele.",
      "Pedir para pagar o resto amanhã e levar os dois.",
      "Guardar os R$ 6 e decidir outro dia."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "O dinheiro dá para um só: escolher o que você mais quer é a melhor saída.",
      "Você fica devendo e o dinheiro de amanhã já começa gasto.",
      "Não erra, mas fica sem nenhum dos dois hoje."
    ],
    "faixa": "5–7",
    "tema": "Consumo e escolhas",
    "kit": true
  },
  {
    "title": "Moeda",
    "char": "Mel",
    "icon": "🪙",
    "p": [
      "É pequena, redonda e faz barulho no bolso.",
      "É feita de papel e dobra no meio.",
      "Tem um número de um lado e um desenho do outro.",
      "Cabe na fenda do cofrinho.",
      "No Brasil, a de 1 real é prateada no meio e dourada na borda.",
      "É dinheiro de metal."
    ],
    "fake": 2,
    "correct": [
      "moeda",
      "moedas",
      "moedinha",
      "dinheiro de metal"
    ],
    "near": [
      "dinheiro",
      "nota",
      "cédula",
      "troco"
    ],
    "scene": "Você quer um chiclete de R$ 2. No bolso tem 3 moedas de R$ 1 e 2 moedas de 50 centavos.",
    "opts": [
      "Separar duas moedas de R$ 1, conferir com um adulto e pagar.",
      "Entregar todas as moedas e deixar o caixa escolher.",
      "Separar as moedas sozinho, sem conferir com ninguém."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "É o jeito mais simples de juntar R$ 2, e você confere antes de pagar.",
      "Sem contar, você pode entregar mais do que precisa.",
      "Pode dar certo, mas sem conferir é fácil errar a conta."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Quatro potes",
    "char": "Vinicius",
    "icon": "🫙",
    "p": [
      "É um jeito de organizar o dinheiro que você ganha.",
      "Usa quatro potes, um ao lado do outro.",
      "Todo o dinheiro vai sempre para o mesmo pote.",
      "Um é para o que você usa agora; outro, para quando algo der errado.",
      "Os nomes são Agora, Reserva, Sonho e Compartilhar.",
      "É dividir o dinheiro em quatro potes."
    ],
    "fake": 3,
    "correct": [
      "quatro potes",
      "4 potes",
      "dividir o dinheiro em quatro potes",
      "quatro cofrinhos"
    ],
    "near": [
      "cofrinho",
      "pote",
      "poupança",
      "guardar dinheiro",
      "três potes"
    ],
    "scene": "Você ganhou R$ 10. Na estante tem quatro potes: Agora, Reserva, Sonho e Compartilhar.",
    "opts": [
      "Dividir entre os potes do jeito que a família combinou (por exemplo, R$ 4, R$ 2, R$ 3 e R$ 1).",
      "Colocar tudo no pote Agora e comprar doces hoje.",
      "Colocar tudo no pote Sonho."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Dá para usar agora, ter uma reserva, juntar para o sonho e, se você quiser, ajudar alguém. Cada família combina a sua divisão.",
      "Acaba tudo hoje, e não sobra nada para quando algo der errado nem para o sonho.",
      "Juntar para o sonho é bom, mas não sobra nada para agora nem para quando algo der errado."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar",
    "kit": true
  },
  {
    "title": "Dinheiro de presente",
    "char": "Bia",
    "icon": "🎁",
    "p": [
      "Chega em dias especiais, como aniversário ou Natal.",
      "Às vezes vem dentro de um cartão ou de um envelope.",
      "Quem dá costuma ser alguém da família.",
      "Não é mesada nem pagamento por um trabalho.",
      "Você precisa devolver depois de um mês.",
      "É dinheiro que alguém dá para você de presente."
    ],
    "fake": 5,
    "correct": [
      "dinheiro de presente",
      "presente em dinheiro",
      "ganhar dinheiro de presente",
      "dinheiro que ganhei de presente"
    ],
    "near": [
      "presente",
      "mesada",
      "dinheiro",
      "sorte"
    ],
    "scene": "No seu aniversário, a vó deu R$ 20. Você está juntando para uma bola de R$ 30 e já tem R$ 15 no cofrinho.",
    "opts": [
      "Gastar os R$ 20 em balas e figurinhas na mesma hora.",
      "Guardar uma parte para a bola e usar um pouco em algo especial.",
      "Guardar tudo: com R$ 35 já dá para comprar a bola."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "O presente acaba rápido e a bola fica para muito depois.",
      "Aproveita um pouco agora, mas a bola demora mais.",
      "R$ 15 + R$ 20 = R$ 35: a meta da bola está alcançada."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Compra dentro do jogo",
    "char": "Tiko",
    "icon": "🎮",
    "p": [
      "Acontece no celular ou no tablet.",
      "Aparece um botão colorido dizendo \"pegue agora\".",
      "Troca dinheiro de verdade por moedinhas, roupas ou vidas.",
      "É de graça, porque está dentro de um jogo.",
      "Antes de apertar, a criança precisa chamar um adulto.",
      "É comprar alguma coisa dentro de um jogo."
    ],
    "fake": 4,
    "correct": [
      "compra dentro do jogo",
      "compra no jogo",
      "comprar no jogo",
      "compra no aplicativo",
      "compra no app"
    ],
    "near": [
      "jogo",
      "comprar",
      "moeda do jogo",
      "propaganda"
    ],
    "scene": "Você está jogando no tablet da sua mãe. Aparece: \"Pacote de joias! Só R$ 9,90. Toque aqui!\"",
    "opts": [
      "Tocar rápido antes que a oferta acabe.",
      "Fechar a janela e continuar jogando.",
      "Chamar a sua mãe antes de tocar em qualquer coisa."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Pode gastar dinheiro de verdade da família sem ninguém saber.",
      "Evita a compra, mas vale contar para um adulto o que apareceu.",
      "Quem decide gastar o dinheiro da família é o adulto."
    ],
    "faixa": "5–7",
    "tema": "Dinheiro digital e segurança",
    "kit": true
  },
  {
    "title": "Doar",
    "char": "Leticia",
    "icon": "💝",
    "p": [
      "Começa olhando o que você tem e não usa mais.",
      "Só vale se for coisa quebrada ou estragada.",
      "Pode ser brinquedo, roupa, livro ou comida.",
      "Outra pessoa vai usar e ficar feliz.",
      "Você não recebe nada em troca.",
      "É dar algo para quem precisa."
    ],
    "fake": 2,
    "correct": [
      "doar",
      "doação",
      "fazer uma doação",
      "dar para quem precisa"
    ],
    "near": [
      "presente",
      "emprestar",
      "ajudar",
      "trocar"
    ],
    "scene": "Você tem 10 brinquedos. Três você não usa mais e estão bem cuidados. A escola está recolhendo brinquedos para um abrigo.",
    "opts": [
      "Separar os três brinquedos com um adulto e levar para a escola.",
      "Separar os brinquedos quebrados para doar.",
      "Guardar todos, vai que um dia você quer brincar."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Brinquedos bons vão alegrar outra criança.",
      "Brinquedo quebrado não ajuda quem vai receber.",
      "Não faz mal, mas os brinquedos ficam parados enquanto alguém poderia usar."
    ],
    "faixa": "5–7",
    "tema": "Ajudar e compartilhar",
    "kit": true
  },
  {
    "title": "Compartilhar",
    "char": "Mel",
    "icon": "🤝",
    "p": [
      "Dá para fazer com lanche, brinquedo ou lápis de cor.",
      "Você fica sem o que é seu para sempre.",
      "Duas ou mais pessoas aproveitam a mesma coisa.",
      "Às vezes cada um usa um pouco, um de cada vez.",
      "Deixa os amigos felizes e ninguém fica de fora.",
      "É dividir algo com outra pessoa."
    ],
    "fake": 2,
    "correct": [
      "compartilhar",
      "dividir",
      "partilhar",
      "dividir com o amigo"
    ],
    "near": [
      "doar",
      "emprestar",
      "dar",
      "trocar"
    ],
    "scene": "No recreio, seu amigo esqueceu o lanche. Você tem um pacote com 6 biscoitos.",
    "opts": [
      "Dividir: 3 para você e 3 para ele.",
      "Comer tudo rápido para ele não pedir.",
      "Dar 1 biscoito para ele."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Os dois comem e o recreio fica melhor para todo mundo.",
      "Seu amigo fica com fome e triste.",
      "Ajuda um pouco, mas dava para dividir mais."
    ],
    "faixa": "5–7",
    "tema": "Ajudar e compartilhar"
  },
  {
    "title": "Honestidade",
    "char": "Caio",
    "icon": "🤲",
    "p": [
      "Tem a ver com falar a verdade.",
      "Aparece quando você acha algo que não é seu.",
      "Pode ser quando o troco vem a mais.",
      "É fazer o certo mesmo quando ninguém está olhando.",
      "Se ninguém viu, não tem problema ficar.",
      "Quem tem essa qualidade devolve o que não é seu."
    ],
    "fake": 5,
    "correct": [
      "honestidade",
      "ser honesto",
      "honesto",
      "verdade",
      "sinceridade"
    ],
    "near": [
      "devolver",
      "troco",
      "respeito",
      "educação"
    ],
    "scene": "Você compra um suco de R$ 4 e paga com R$ 10. O caixa devolve R$ 8.",
    "opts": [
      "Avisar o caixa e devolver os R$ 2 a mais.",
      "Ficar com os R$ 8 e sair rápido.",
      "Contar para a sua mãe depois, em casa."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "O troco certo era R$ 6. O dinheiro a mais é da loja.",
      "O caixa vai ficar com R$ 2 faltando no fim do dia.",
      "Contar é bom, mas é muito mais fácil resolver na hora."
    ],
    "faixa": "5–7",
    "tema": "Ajudar e compartilhar",
    "kit": true
  },
  {
    "title": "Custo de oportunidade",
    "char": "Leticia",
    "icon": "⚖️",
    "p": [
      "Aparece sempre que você precisa escolher.",
      "Tem a ver com o que fica para trás.",
      "Só existe quando a gente paga com dinheiro.",
      "Também vale para o tempo: uma tarde no videogame é uma tarde sem futebol.",
      "Gastar R$ 30 no lanche pode ser deixar de juntar para o skate.",
      "É aquilo de que você abre mão quando faz uma escolha."
    ],
    "fake": 3,
    "correct": [
      "custo de oportunidade",
      "o que eu deixo de ter",
      "o que deixo de fazer",
      "abrir mão",
      "renúncia"
    ],
    "near": [
      "escolha",
      "custo",
      "preço",
      "troca"
    ],
    "scene": "Você tem R$ 40 e está juntando para um skate de R$ 120. Os amigos chamam para o cinema com pipoca, que sai R$ 35.",
    "opts": [
      "Ir ao cinema com pipoca e pensar no skate depois.",
      "Lembrar que o cinema leva quase tudo o que juntou e propor um programa mais barato.",
      "Ir ao cinema, mas sem pipoca, gastando R$ 20."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "O skate volta quase para o começo, e você nem pesou o que perdeu.",
      "Comparar o que ganha e o que perde ajuda a escolher sem arrependimento.",
      "Aproveita o programa e perde menos do que já juntou."
    ],
    "faixa": "8–11",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Orçamento",
    "char": "Vinicius",
    "icon": "📋",
    "p": [
      "É feito antes de o dinheiro ser gasto.",
      "Só adulto com salário precisa fazer.",
      "Pode ser escrito num caderno, numa folha ou no celular.",
      "Mostra quanto entra e quanto sai.",
      "Ajuda a não faltar dinheiro no fim do mês.",
      "É um plano de como usar o dinheiro."
    ],
    "fake": 2,
    "correct": [
      "orçamento",
      "planejamento",
      "plano de gastos",
      "planejar o dinheiro",
      "controle de gastos"
    ],
    "near": [
      "lista de compras",
      "economizar",
      "meta",
      "conta"
    ],
    "scene": "Você recebe R$ 40 de mesada por mês. Quer guardar R$ 10, gasta R$ 20 com lanche na escola e um jogo novo custa R$ 15.",
    "opts": [
      "Anotar: R$ 10 + R$ 20 = R$ 30. Sobram R$ 10, e o jogo fica para o mês que vem.",
      "Comprar o jogo logo no começo do mês e ver o que acontece.",
      "Deixar de guardar os R$ 10 neste mês para comprar o jogo."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "O plano mostra que o jogo não cabe agora e evita ficar sem lanche.",
      "Pode faltar dinheiro para o lanche no fim do mês.",
      "A conta fecha (20 + 15 = 35), mas a meta de guardar fica para trás."
    ],
    "faixa": "8–11",
    "tema": "Consumo e escolhas",
    "kit": true
  },
  {
    "title": "Link falso",
    "char": "Tiko",
    "icon": "🔗",
    "p": [
      "Chega por mensagem, e-mail ou rede social.",
      "Promete prêmio, desconto ou algo de graça.",
      "O endereço parece o de uma loja, mas tem letras trocadas.",
      "Se o link tem um cadeado, é sempre seguro.",
      "Ao clicar, pode pedir senha, dados ou um pagamento.",
      "É um endereço de internet feito para enganar."
    ],
    "fake": 4,
    "correct": [
      "link falso",
      "link de golpe",
      "link suspeito",
      "link fraudulento",
      "site falso"
    ],
    "near": [
      "golpe",
      "vírus",
      "propaganda",
      "mensagem"
    ],
    "scene": "Chega uma mensagem: \"Você ganhou 1.000 moedas no seu jogo favorito! Clique em premio-jog0s.com e entre com sua senha.\"",
    "opts": [
      "Clicar e colocar a senha rápido para pegar o prêmio.",
      "Não clicar, mostrar para um adulto e apagar a mensagem.",
      "Não clicar e apagar a mensagem sem falar com ninguém."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Quem criou o link fica com a sua senha e pode roubar a sua conta.",
      "Evita o golpe, e o adulto pode avisar o resto da família.",
      "Evita o golpe, mas outras pessoas da casa podem receber a mesma mensagem."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança",
    "kit": true
  },
  {
    "title": "Voluntariado",
    "char": "Bia",
    "icon": "🙋",
    "p": [
      "Pode acontecer numa escola, numa praça ou num abrigo.",
      "Juntar pessoas para limpar a praia é um exemplo.",
      "A pessoa doa o seu tempo e o seu trabalho.",
      "Ajuda a comunidade e quem precisa.",
      "Quem faz recebe um salário no fim do mês.",
      "É trabalhar sem receber dinheiro para ajudar os outros."
    ],
    "fake": 5,
    "correct": [
      "voluntariado",
      "trabalho voluntário",
      "ser voluntário",
      "voluntário",
      "ação voluntária"
    ],
    "near": [
      "doação",
      "doar",
      "ajudar",
      "trabalho"
    ],
    "scene": "A escola chamou voluntários para pintar a quadra no sábado de manhã. Você também queria vender brigadeiros no sábado e ganhar R$ 30.",
    "opts": [
      "Ajudar na pintura de manhã e vender brigadeiros à tarde.",
      "Ficar o dia todo vendendo brigadeiros e não ir à pintura.",
      "Dizer que vai à pintura e não aparecer."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Ajuda a escola e ainda ganha o seu dinheiro: dá para fazer as duas coisas.",
      "Ganha dinheiro, mas perde a chance de ajudar a escola.",
      "Quem contava com você fica sem ajuda."
    ],
    "faixa": "8–11",
    "tema": "Ajudar e compartilhar",
    "kit": true
  },
  {
    "title": "Rotativo do cartão",
    "char": "Leticia",
    "icon": "🔄",
    "p": [
      "Começa no dia em que chega uma conta com data marcada.",
      "Aparece quando você paga só uma parte do valor.",
      "O que ficou faltando passa para o mês seguinte, maior.",
      "É uma das formas mais caras de ficar devendo.",
      "Pagar só o valor mínimo todo mês faz a dívida acabar rápido.",
      "É o crédito que entra quando a fatura do cartão não é paga inteira."
    ],
    "fake": 5,
    "correct": [
      "rotativo",
      "rotativo do cartão",
      "crédito rotativo",
      "juros do rotativo",
      "pagar o mínimo da fatura"
    ],
    "near": [
      "cartão de crédito",
      "fatura",
      "dívida",
      "juros",
      "limite"
    ],
    "scene": "A fatura do cartão chegou: R$ 800. Este mês só dá para pagar R$ 300 sem faltar dinheiro para o mercado.",
    "opts": [
      "Pagar R$ 300 e parar de usar o cartão até zerar a fatura.",
      "Pagar só o mínimo e continuar usando o cartão normalmente.",
      "Pagar R$ 300 e trocar o resto por um parcelamento da fatura, comparando o custo total antes."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Ajuda, mas o que ficou para trás continua no rotativo, que cresce rápido.",
      "O resto vira a dívida mais cara que existe, e ainda entram gastos novos.",
      "Troca a dívida mais cara por parcelas conhecidas que cabem no mês."
    ],
    "faixa": "13+",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Nome sujo",
    "char": "Tiko",
    "icon": "📋",
    "p": [
      "É uma situação que quase todo mundo quer evitar.",
      "Acontece depois que uma conta fica muito tempo sem pagamento.",
      "O CPF vai parar numa lista de quem está devendo.",
      "Some sozinho no dia seguinte, mesmo sem pagar nada.",
      "Atrapalha na hora de pedir um cartão, um empréstimo ou alugar uma casa.",
      "É o jeito popular de dizer que a pessoa está negativada."
    ],
    "fake": 4,
    "correct": [
      "nome sujo",
      "nome negativado",
      "negativado",
      "negativação",
      "cadastro de devedores"
    ],
    "near": [
      "dívida",
      "devedor",
      "conta atrasada",
      "score",
      "calote"
    ],
    "scene": "Uma conta de celular de R$ 120 ficou esquecida, e seu nome foi negativado. Chega uma proposta de acordo: pagar à vista com desconto ou em 3 parcelas.",
    "opts": [
      "Ignorar e esperar: um dia a dívida some.",
      "Fazer o acordo que cabe no mês e guardar o comprovante.",
      "Não fazer acordo e esperar juntar o valor inteiro."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "O nome fica sujo por muito tempo, e as portas continuam fechadas enquanto isso.",
      "Resolve a dívida de um jeito possível, e o comprovante prova que você pagou.",
      "Também resolve, mas o nome fica sujo por mais tempo enquanto você junta."
    ],
    "faixa": "13+",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Score",
    "char": "Bia",
    "icon": "📊",
    "p": [
      "É um número que fala sobre você, mas que você não escolhe.",
      "Quanto mais você ganha por mês, mais alto ele fica, mesmo atrasando contas.",
      "Lojas e bancos olham para ele antes de dar crédito.",
      "Pagar as contas em dia faz ele subir.",
      "Dá para consultar de graça em sites de proteção ao crédito.",
      "É a pontuação de crédito de uma pessoa."
    ],
    "fake": 2,
    "correct": [
      "score",
      "score de crédito",
      "pontuação de crédito",
      "nota de crédito"
    ],
    "near": [
      "crédito",
      "nome sujo",
      "limite",
      "cpf",
      "cadastro positivo"
    ],
    "scene": "Você quer alugar seu primeiro apartamento daqui a três meses, e a imobiliária vai consultar seu score.",
    "opts": [
      "Pagar todas as contas em dia e conferir se o CPF não tem nada pendente.",
      "Esperar e ver o que acontece, sem olhar o CPF.",
      "Pedir vários cartões de crédito ao mesmo tempo para parecer bom cliente."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Mostra que você é bom pagador e dá tempo de corrigir alguma pendência.",
      "Não piora, mas perde a chance de achar e resolver um problema antes.",
      "Muitos pedidos de crédito de uma vez costumam baixar a pontuação."
    ],
    "faixa": "13+",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Juros compostos",
    "char": "Caio",
    "icon": "🧮",
    "p": [
      "Funciona como uma bola de neve rolando morro abaixo.",
      "Quanto mais tempo passa, mais rápido ele cresce.",
      "Ajuda muito quem guarda dinheiro por muitos anos.",
      "Atrapalha muito quem deixa uma dívida crescer.",
      "Cresce sempre o mesmo valor por mês, do primeiro ao último.",
      "São juros calculados em cima de juros."
    ],
    "fake": 5,
    "correct": [
      "juros compostos",
      "juro composto",
      "juros sobre juros",
      "juro sobre juro"
    ],
    "near": [
      "juros",
      "juros simples",
      "rendimento",
      "bola de neve",
      "investimento"
    ],
    "scene": "Você tem 18 anos e conseguiu um estágio. Sobram R$ 100 por mês.",
    "opts": [
      "Esperar ganhar mais e começar a guardar lá pelos 30 anos.",
      "Gastar tudo agora e contar com o cartão quando precisar.",
      "Começar a guardar já, mesmo pouco, num investimento seguro."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Guardar depois ainda ajuda, mas perde anos de juros sobre juros, que fazem a maior diferença.",
      "Sem reserva, qualquer imprevisto vira dívida, e aí os juros compostos jogam contra.",
      "Quanto antes começa, mais tempo os juros têm para render em cima de juros."
    ],
    "faixa": "13+",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Aposta",
    "char": "Vinicius",
    "icon": "🎰",
    "p": [
      "Começa com a promessa de ganhar fácil e rápido.",
      "Aparece muito em propaganda, no celular e com gente famosa.",
      "No começo pode até dar um ganho pequeno.",
      "Quem joga bastante aprende a sempre sair ganhando.",
      "As regras são feitas para a casa ganhar mais do que paga.",
      "É arriscar dinheiro num resultado que depende de sorte."
    ],
    "fake": 4,
    "correct": [
      "aposta",
      "apostas",
      "apostar",
      "bet",
      "bets",
      "jogo de azar",
      "casa de apostas"
    ],
    "near": [
      "sorte",
      "jogo",
      "loteria",
      "cassino",
      "pirâmide"
    ],
    "scene": "Um amigo mostra no celular que ganhou R$ 200 num app de apostas e diz: \"Coloca R$ 50, é dinheiro fácil.\"",
    "opts": [
      "Pesquisar antes como esses apps ganham dinheiro.",
      "Colocar o dinheiro da conta de luz, porque vai dobrar.",
      "Dizer que não e lembrar que ele só mostra quando ganha, nunca quando perde."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Pesquisar ajuda, mas a resposta já é conhecida: no total, a casa sempre ganha mais.",
      "Dinheiro de conta não é para arriscar: se perder, a conta fica sem pagar.",
      "Você não arrisca nada e ainda ajuda o amigo a ver o que ele esconde de si mesmo."
    ],
    "faixa": "13+",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Pirâmide financeira",
    "char": "Mel",
    "icon": "🔺",
    "p": [
      "Promete um ganho alto todo mês, sem esforço.",
      "Pede que você convide amigos e família para entrar também.",
      "É fiscalizada e garantida pelo governo.",
      "Quem entrou primeiro recebe com o dinheiro de quem entrou depois.",
      "Quando param de entrar pessoas novas, ela desmorona.",
      "É um esquema em que o dinheiro dos novos paga os antigos."
    ],
    "fake": 3,
    "correct": [
      "pirâmide",
      "pirâmide financeira",
      "esquema de pirâmide",
      "esquema ponzi",
      "ponzi"
    ],
    "near": [
      "golpe",
      "investimento",
      "aposta",
      "marketing multinível"
    ],
    "scene": "Uma colega diz que entrou num \"clube de investimento\" que paga 10% por mês. Para entrar, é preciso pagar R$ 500 e chamar mais três pessoas.",
    "opts": [
      "Entrar e chamar três amigos para recuperar logo o dinheiro.",
      "Não entrar e mostrar para ela que ganho alto, garantido e com indicação é sinal de pirâmide.",
      "Não entrar, mas também não falar nada."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Você perde o dinheiro e ainda leva os amigos para o prejuízo.",
      "Protege você e ainda pode salvar o dinheiro da colega.",
      "Você se protege, mas a colega continua arriscando o dinheiro dela."
    ],
    "faixa": "13+",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Conta laranja",
    "char": "Tiko",
    "icon": "🍊",
    "p": [
      "Começa com um pedido que parece um favor simples.",
      "Um desconhecido oferece dinheiro para usar algo que está no seu nome.",
      "Se der problema, quem responde é só a pessoa que pediu.",
      "Por ela passa dinheiro que não é seu.",
      "Muitas vezes é usada para esconder dinheiro de golpes.",
      "É uma conta bancária emprestada para outra pessoa movimentar."
    ],
    "fake": 3,
    "correct": [
      "conta laranja",
      "laranja",
      "emprestar a conta",
      "emprestar conta",
      "conta emprestada"
    ],
    "near": [
      "golpe",
      "conta bancária",
      "pix",
      "lavagem de dinheiro",
      "crime"
    ],
    "scene": "Alguém numa rede social oferece R$ 300 para você receber um Pix na sua conta e repassar para outra pessoa.",
    "opts": [
      "Recusar, bloquear o perfil e contar para um adulto ou para o banco.",
      "Recusar e só apagar a mensagem.",
      "Aceitar: é só receber e repassar, ninguém sai prejudicado."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Você se protege e ainda ajuda a parar quem está fazendo isso com outras pessoas.",
      "Você se protege, mas o perfil continua procurando outra pessoa.",
      "O dinheiro costuma ser de golpe, e quem empresta a conta também responde por isso."
    ],
    "faixa": "13+",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Perfil falso",
    "char": "Bia",
    "icon": "🎭",
    "p": [
      "Chega de um número ou de uma conta que você não conhece.",
      "Só cai nisso quem é muito distraído.",
      "Usa a foto e o nome de alguém de confiança.",
      "Conta uma história com pressa: precisa de ajuda agora.",
      "Pede um Pix e promete devolver amanhã.",
      "É alguém se passando por outra pessoa para pedir dinheiro."
    ],
    "fake": 2,
    "correct": [
      "perfil falso",
      "conta falsa",
      "falso parente",
      "golpe do falso parente",
      "número falso"
    ],
    "near": [
      "golpe",
      "golpe por mensagem",
      "fraude",
      "pix",
      "hacker"
    ],
    "scene": "Chega uma mensagem com a foto da sua tia: \"Troquei de número. Me manda R$ 400 por Pix agora? Amanhã te devolvo.\"",
    "opts": [
      "Ligar para a tia no número antigo antes de qualquer coisa.",
      "Mandar só R$ 100 para ajudar um pouco.",
      "Fazer uma pergunta que só a tia saberia responder."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Falar com a pessoa pelo contato que você já tinha é o jeito mais seguro de confirmar.",
      "Se for golpe, os R$ 100 vão embora do mesmo jeito.",
      "Ajuda a desconfiar, mas quem aplica o golpe às vezes pesquisa antes."
    ],
    "faixa": "13+",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Golpe do falso emprego",
    "char": "Mel",
    "icon": "💼",
    "p": [
      "Aparece como uma oportunidade boa demais.",
      "Promete pagar bem por tarefas fáceis, como curtir vídeos.",
      "Vem sempre com contrato assinado e carteira de trabalho.",
      "Os primeiros pagamentos podem ser pequenos e chegar de verdade.",
      "Depois pede um valor para \"liberar\" ganhos maiores.",
      "É uma vaga falsa, feita para tirar dinheiro de quem procura trabalho."
    ],
    "fake": 3,
    "correct": [
      "golpe do falso emprego",
      "falso emprego",
      "emprego falso",
      "vaga falsa",
      "golpe da vaga",
      "golpe do emprego",
      "golpe da tarefa",
      "trabalho falso"
    ],
    "near": [
      "golpe",
      "pirâmide",
      "renda extra",
      "trabalho online",
      "perfil falso"
    ],
    "scene": "Você procura o primeiro emprego. Chega a proposta: R$ 150 por dia para curtir vídeos. Depois de dois dias, pedem R$ 200 para \"subir de nível\".",
    "opts": [
      "Parar, não pagar nada e denunciar o perfil.",
      "Pedir para eles descontarem os R$ 200 dos próximos pagamentos.",
      "Pagar os R$ 200, porque os primeiros pagamentos chegaram certinho."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Empresa séria não cobra para você trabalhar, e a denúncia protege outras pessoas.",
      "Você não paga agora, mas continua conversando com quem quer o seu dinheiro.",
      "Os primeiros pagamentos servem de isca: os R$ 200 não voltam."
    ],
    "faixa": "13+",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Jovem aprendiz",
    "char": "Vinicius",
    "icon": "🎒",
    "p": [
      "É uma porta de entrada para o mundo do trabalho.",
      "É para quem tem a partir de 14 anos.",
      "A pessoa precisa largar a escola para participar.",
      "Junta trabalho na empresa com um curso de formação.",
      "Tem carteira assinada, salário e férias.",
      "É um programa de primeiro emprego para jovens que ainda estudam."
    ],
    "fake": 3,
    "correct": [
      "jovem aprendiz",
      "aprendiz",
      "menor aprendiz",
      "aprendizagem"
    ],
    "near": [
      "estágio",
      "estagiário",
      "primeiro emprego",
      "trabalho",
      "emprego"
    ],
    "scene": "Você tem 16 anos e foi chamado para ser jovem aprendiz. O salário é pequeno, e você ainda está no ensino médio.",
    "opts": [
      "Aceitar e gastar todo o salário, já que é o primeiro.",
      "Aceitar, organizar os horários de estudo e guardar uma parte de cada salário.",
      "Recusar: salário pequeno não vale a pena."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Ganha experiência, mas perde a chance de começar uma reserva desde o primeiro salário.",
      "Ganha experiência, mantém os estudos e já começa a guardar.",
      "Perde experiência, contatos e o primeiro registro na carteira, que valem mais que o salário."
    ],
    "faixa": "13+",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Salário líquido",
    "char": "Caio",
    "icon": "💵",
    "p": [
      "Só dá para saber o valor depois de algumas contas.",
      "Aparece no fim do contracheque.",
      "Dele já saíram descontos, como a contribuição para o INSS.",
      "É sempre maior que o valor combinado na contratação.",
      "É menor que o salário bruto.",
      "É o que cai de verdade na conta depois dos descontos."
    ],
    "fake": 4,
    "correct": [
      "salário líquido",
      "líquido",
      "valor líquido",
      "salário com desconto",
      "salário depois dos descontos"
    ],
    "near": [
      "salário",
      "salário bruto",
      "contracheque",
      "holerite",
      "desconto",
      "inss"
    ],
    "scene": "Seu primeiro emprego paga R$ 1.800 por mês. Você já quer parcelar um celular em parcelas de R$ 150, contando com os R$ 1.800.",
    "opts": [
      "Parcelar já, porque R$ 150 cabe fácil em R$ 1.800.",
      "Fazer a conta com um desconto estimado e escolher uma parcela menor.",
      "Esperar o primeiro contracheque para ver quanto cai de verdade e só então decidir."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "O que cai na conta é menos que R$ 1.800, e a parcela pode apertar o mês.",
      "É melhor que contar com o valor cheio, mas ainda é um chute.",
      "Você decide com o valor real, que é o que paga as contas."
    ],
    "faixa": "13+",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Contas da casa",
    "char": "Leticia",
    "icon": "🏠",
    "p": [
      "Quem mora de aluguel não paga nenhuma delas.",
      "Chegam todo mês, mesmo quando você não quer.",
      "Algumas mudam de valor conforme o uso; outras são fixas.",
      "Precisam ser pagas antes de qualquer gasto com lazer.",
      "Luz, água, internet e aluguel fazem parte delas.",
      "São os gastos de todo mês para manter um lar funcionando."
    ],
    "fake": 1,
    "correct": [
      "contas da casa",
      "contas de casa",
      "despesas da casa",
      "gastos da casa",
      "contas do mês",
      "contas fixas"
    ],
    "near": [
      "gasto fixo",
      "orçamento",
      "aluguel",
      "conta de luz",
      "boleto"
    ],
    "scene": "Você e um amigo vão dividir um apartamento. O aluguel é R$ 1.200, e cada um ganha R$ 2.000.",
    "opts": [
      "Contar só o aluguel: R$ 600 para cada, sobram R$ 1.400.",
      "Dividir o aluguel e combinar o resto quando as contas chegarem.",
      "Listar todas as contas (aluguel, luz, água, internet, mercado) e ver quanto sobra para cada um."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Esquece luz, água, internet e mercado, e o dinheiro acaba antes do mês.",
      "Dá para começar, mas as surpresas podem virar briga entre vocês.",
      "Vocês sabem desde o início quanto custa morar ali e quanto sobra."
    ],
    "faixa": "13+",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Assinatura",
    "char": "Mel",
    "icon": "📺",
    "p": [
      "Muitas vezes começa com um período de graça.",
      "Você não paga uma vez só: a cobrança se repete.",
      "Termina sozinha quando você para de usar.",
      "Filmes, músicas e jogos costumam funcionar assim.",
      "Várias pequenas, somadas, podem pesar no mês.",
      "É um serviço pago todo mês até você cancelar."
    ],
    "fake": 3,
    "correct": [
      "assinatura",
      "assinaturas",
      "serviço por assinatura",
      "mensalidade",
      "cobrança recorrente",
      "plano mensal"
    ],
    "near": [
      "streaming",
      "teste grátis",
      "gasto fixo",
      "débito automático",
      "cartão de crédito"
    ],
    "scene": "Você olha a fatura e encontra 5 assinaturas: dois serviços de filmes, um de música, um de jogo e um app de exercícios que você não abre há meses.",
    "opts": [
      "Manter todas: cada uma é baratinha.",
      "Cancelar as que não usa e ficar com as que realmente aproveita.",
      "Cancelar todas de uma vez e assinar de novo quando sentir falta."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Somadas, as baratinhas viram um gasto grande, e você paga até pelo que não usa.",
      "Você continua com o que gosta e para de pagar pelo que esqueceu.",
      "Corta o gasto, mas pode virar um vai e vem de assinar e cancelar sem planejar."
    ],
    "faixa": "13+",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Financiamento",
    "char": "Caio",
    "icon": "🏍️",
    "p": [
      "Serve para comprar algo caro sem ter todo o dinheiro agora.",
      "Um banco ou uma financeira paga a compra para você.",
      "Você devolve em muitas parcelas, por meses ou anos.",
      "No final, o total pago é igual ao preço à vista.",
      "É muito usado para comprar carro, moto ou casa.",
      "É um empréstimo para comprar um bem, pago em parcelas com juros."
    ],
    "fake": 4,
    "correct": [
      "financiamento",
      "financiar",
      "financiado",
      "financiada"
    ],
    "near": [
      "empréstimo",
      "parcelamento",
      "consórcio",
      "juros",
      "dívida",
      "prestação"
    ],
    "scene": "Você precisa de uma moto de R$ 12.000 para trabalhar. À vista não dá. A loja oferece 48 parcelas de R$ 400.",
    "opts": [
      "Juntar dinheiro por um tempo e comprar uma moto usada mais barata.",
      "Fechar logo: R$ 400 por mês cabe no salário.",
      "Somar as parcelas (R$ 19.200), comparar com outras ofertas e ver se dá para dar uma entrada maior."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Pode sair bem mais barato, mas você fica mais tempo sem a moto de que precisa para trabalhar.",
      "Você paga R$ 7.200 a mais sem saber se havia uma oferta melhor.",
      "Você enxerga o custo total e escolhe a oferta mais barata."
    ],
    "faixa": "13+",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Padrão de vida",
    "char": "Tiko",
    "icon": "🛋️",
    "p": [
      "Tem a ver com o jeito como a pessoa vive no dia a dia.",
      "Inclui onde mora, o que come e como se diverte.",
      "Costuma subir quando a renda sobe.",
      "Depois que sobe, é fácil fazer ele descer de novo.",
      "Se cresce junto com cada aumento, nunca sobra dinheiro.",
      "É o nível de gastos e de conforto de uma pessoa ou de uma família."
    ],
    "fake": 4,
    "correct": [
      "padrão de vida",
      "nível de vida",
      "estilo de vida"
    ],
    "near": [
      "custo de vida",
      "qualidade de vida",
      "consumo",
      "gastos",
      "luxo",
      "ostentação"
    ],
    "scene": "Você ganhou um aumento de R$ 500 por mês. Os amigos sugerem trocar de celular e sair mais vezes.",
    "opts": [
      "Usar uma parte para melhorar algo que importa e guardar a outra parte.",
      "Guardar o aumento inteiro e não mudar nada.",
      "Gastar todo o aumento: você trabalhou para isso."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Você aproveita o aumento sem perder a chance de montar uma reserva.",
      "É ótimo para a reserva, mas também vale curtir um pouco o que você conquistou.",
      "O padrão de vida sobe junto, e no fim do mês sobra o mesmo de antes."
    ],
    "faixa": "13+",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Renegociar",
    "char": "Leticia",
    "icon": "🤝",
    "p": [
      "Começa com uma conversa.",
      "Quem deve procura quem vai receber.",
      "Só é possível depois que o nome fica sujo.",
      "O objetivo é trocar as condições por outras que caibam no bolso.",
      "Pode baixar os juros, mudar o prazo ou juntar várias dívidas numa só.",
      "É fazer um novo acordo para pagar uma dívida."
    ],
    "fake": 3,
    "correct": [
      "renegociar",
      "renegociação",
      "acordo",
      "fazer um acordo",
      "negociar a dívida"
    ],
    "near": [
      "negociar",
      "dívida",
      "empréstimo",
      "parcelar",
      "desconto"
    ],
    "scene": "Você tem duas dívidas: o rotativo do cartão e um empréstimo. Todo mês falta dinheiro para pagar as duas.",
    "opts": [
      "Pegar um novo empréstimo qualquer para pagar as duas, sem comparar.",
      "Pagar o que dá de cada uma e esperar o mês melhorar.",
      "Procurar os credores, comparar propostas e trocar a dívida mais cara por uma mais barata, com parcela que cabe no mês."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Você pode trocar uma dívida cara por outra ainda mais cara.",
      "Ajuda a não parar de pagar, mas os juros continuam correndo.",
      "Você paga menos juros e volta a ter controle do mês."
    ],
    "faixa": "13+",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Seguro",
    "char": "Vinicius",
    "icon": "☂️",
    "p": [
      "Você paga um pouco, torcendo para nunca precisar usar.",
      "O dinheiro pago volta inteiro no fim do ano se nada acontecer.",
      "Existe para celular, carro, casa, viagem e saúde.",
      "Se acontecer um problema coberto, você recebe ajuda para o prejuízo.",
      "Antes de contratar, vale ler o que ele cobre e o que não cobre.",
      "É uma proteção paga contra um prejuízo grande."
    ],
    "fake": 2,
    "correct": [
      "seguro",
      "seguros",
      "apólice",
      "seguradora"
    ],
    "near": [
      "reserva de emergência",
      "imprevisto",
      "garantia",
      "proteção",
      "plano de saúde"
    ],
    "scene": "Você comprou um celular de R$ 2.000 em 10 parcelas. A loja oferece um seguro contra roubo e quebra por R$ 25 por mês.",
    "opts": [
      "Contratar sem ler, porque seguro é sempre bom.",
      "Ler o que ele cobre (roubo, quebra, franquia), comparar preços e decidir se vale para você.",
      "Não contratar e andar com o celular de qualquer jeito."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Pode ajudar, mas você pode pagar por algo que não cobre o que você precisa.",
      "Você decide sabendo o que está comprando e quanto custa.",
      "Se o celular sumir, você fica sem ele e ainda com as parcelas para pagar."
    ],
    "faixa": "13+",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Diversificar",
    "char": "Bia",
    "icon": "🧺",
    "p": [
      "Tem a ver com onde você coloca o dinheiro que guarda.",
      "Garante que você nunca vai perder dinheiro.",
      "Lembra o ditado: não coloque todos os ovos na mesma cesta.",
      "Se um investimento vai mal, os outros podem segurar.",
      "Mistura opções com riscos e prazos diferentes.",
      "É dividir o dinheiro entre vários investimentos."
    ],
    "fake": 2,
    "correct": [
      "diversificar",
      "diversificação",
      "dividir os investimentos",
      "não colocar todos os ovos na mesma cesta"
    ],
    "near": [
      "investimento",
      "investir",
      "renda fixa",
      "risco",
      "poupança"
    ],
    "scene": "Você juntou R$ 3.000. Um amigo diz para colocar tudo numa única ação da moda que \"vai explodir\".",
    "opts": [
      "Deixar uma parte como reserva segura e dividir o resto entre opções diferentes.",
      "Colocar tudo na ação da moda.",
      "Deixar tudo na poupança, sem arriscar nada."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Se uma opção for mal, as outras seguram, e a reserva fica protegida.",
      "Se a ação cair, você perde boa parte do que juntou de uma vez.",
      "É seguro, mas rende pouco; dividir entre opções costuma render mais com risco controlado."
    ],
    "faixa": "13+",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Boleto falso",
    "char": "Tiko",
    "icon": "🧾",
    "p": [
      "Parece uma conta comum, com código de barras.",
      "Chega por e-mail, por mensagem ou em papel com cara de oficial.",
      "O nome de quem vai receber não é o da empresa certa.",
      "O dinheiro vai para a conta de quem aplica o golpe.",
      "Se o código de barras funciona no app do banco, o boleto é verdadeiro.",
      "É uma cobrança falsificada para desviar o pagamento."
    ],
    "fake": 5,
    "correct": [
      "boleto falso",
      "boleto falsificado",
      "golpe do boleto",
      "boleto adulterado",
      "boleto fraudado"
    ],
    "near": [
      "boleto",
      "golpe",
      "conta",
      "link falso",
      "pix"
    ],
    "scene": "Chega por e-mail o boleto da escola de inglês, com o logo certinho. No app do banco, o nome de quem recebe é de uma pessoa desconhecida.",
    "opts": [
      "Pagar, porque o logo e o valor estão certos.",
      "Não pagar e esperar a escola cobrar de novo.",
      "Não pagar e pegar o boleto direto no site ou na secretaria da escola."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "O nome de quem recebe é o que vale: o dinheiro iria para o golpista.",
      "Você não cai no golpe, mas a conta verdadeira pode atrasar.",
      "Você evita o golpe e paga a conta certa, no prazo."
    ],
    "faixa": "13+",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "QR Code falso",
    "char": "Vinicius",
    "icon": "🔳",
    "p": [
      "Todo QR Code em lugar público foi conferido pela loja.",
      "É um quadradinho cheio de pontinhos pretos.",
      "Você aponta a câmera do celular para ele.",
      "Pode estar num adesivo colado por cima de outro.",
      "Leva para um Pix ou para um site de quem aplica o golpe.",
      "É um código de pagamento trocado para desviar o dinheiro."
    ],
    "fake": 1,
    "correct": [
      "qr code falso",
      "qrcode falso",
      "qr falso",
      "código qr falso",
      "golpe do qr code",
      "qr code trocado",
      "qr code adulterado"
    ],
    "near": [
      "qr code",
      "pix",
      "golpe",
      "link falso",
      "boleto falso"
    ],
    "scene": "Na lanchonete, o QR Code da mesa leva para um Pix no nome de uma pessoa, e não da lanchonete.",
    "opts": [
      "Não pagar pelo QR Code e avisar o caixa, pagando direto com ele.",
      "Pagar em dinheiro e não falar nada.",
      "Pagar, porque o QR Code estava na mesa da própria loja."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Você paga certo e ainda ajuda a loja a tirar o adesivo falso.",
      "Você não cai no golpe, mas o próximo cliente pode cair.",
      "O nome de quem recebe não confere: o dinheiro vai para o golpista."
    ],
    "faixa": "13+",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "MEI",
    "char": "Leticia",
    "icon": "🧁",
    "p": [
      "É para quem trabalha por conta própria.",
      "Tem uma pequena taxa fixa todo mês.",
      "Qualquer empresa, de qualquer tamanho, pode ser.",
      "Dá um CNPJ e permite emitir nota fiscal.",
      "Garante direitos como a aposentadoria.",
      "É o jeito mais simples de formalizar um pequeno negócio."
    ],
    "fake": 3,
    "correct": [
      "mei",
      "microempreendedor",
      "formalizar o negócio"
    ],
    "near": [
      "cnpj",
      "empresa",
      "empreender",
      "nota fiscal",
      "autônomo"
    ],
    "scene": "Você vende bolos por encomenda, e as vendas cresceram. Uma empresa quer comprar todo mês, mas pede nota fiscal.",
    "opts": [
      "Recusar a empresa e continuar só com as vendas pequenas.",
      "Abrir o MEI, pagar a taxa mensal em dia e emitir a nota.",
      "Pedir para um amigo emitir a nota no nome dele."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Não arrisca nada, mas perde um cliente que compraria todo mês.",
      "Você ganha o cliente, fica em dia com a lei e conta tempo para a aposentadoria.",
      "A nota no nome de outra pessoa é irregular e pode dar problema para os dois."
    ],
    "faixa": "13+",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Currículo",
    "char": "Mel",
    "icon": "📄",
    "p": [
      "É um papel, ou um arquivo, que fala sobre você.",
      "Quem procura emprego costuma enviar.",
      "Mostra o que você estudou e o que já fez.",
      "Cursos, trabalho voluntário e idiomas podem entrar nele.",
      "Quanto mais páginas, maior a chance de ser chamado.",
      "É o resumo da sua formação e da sua experiência para pedir uma vaga."
    ],
    "fake": 5,
    "correct": [
      "currículo",
      "curriculum",
      "cv"
    ],
    "near": [
      "entrevista",
      "emprego",
      "carteira de trabalho",
      "vaga",
      "portfólio"
    ],
    "scene": "Você tem 17 anos e quer a primeira vaga. Nunca trabalhou com carteira assinada.",
    "opts": [
      "Não mandar currículo: sem experiência, não adianta.",
      "Fazer um currículo de uma página com estudos, cursos, trabalho voluntário e o que sabe fazer.",
      "Copiar um modelo pronto da internet e trocar só o nome."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Muitas vagas de primeiro emprego não pedem experiência: sem currículo, ninguém te chama.",
      "Mostra quem você é, mesmo sem emprego anterior, e cabe numa leitura rápida.",
      "Ajuda a começar, mas um currículo igual a todos não mostra o que você tem de especial."
    ],
    "faixa": "13+",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Rachar a conta",
    "char": "Caio",
    "icon": "🍕",
    "p": [
      "Acontece quando um grupo sai junto.",
      "Pode ser na pizzaria, no cinema ou num presente.",
      "Quem pediu menos sempre paga mais.",
      "Combinar antes evita briga depois.",
      "Cada um paga a sua parte, ou todos pagam igual.",
      "É dividir o valor de uma conta entre as pessoas."
    ],
    "fake": 3,
    "correct": [
      "rachar a conta",
      "rachar",
      "dividir a conta",
      "dividir o valor",
      "cada um paga a sua parte"
    ],
    "near": [
      "vaquinha",
      "compartilhar",
      "conta",
      "pix",
      "gorjeta"
    ],
    "scene": "Cinco amigos vão comer pizza. A conta vai dar uns R$ 150. Você só vai tomar água e comer uma fatia.",
    "opts": [
      "Combinar antes de pedir como vão dividir e pagar a sua parte certinho.",
      "Pagar R$ 30, como todo mundo, mesmo achando injusto, e não falar nada.",
      "Sair sem pagar, porque comeu pouco."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Todo mundo sabe quanto vai pagar, e ninguém sai chateado.",
      "Evita discussão, mas você paga pelo que não consumiu.",
      "Os amigos pagam a sua parte, e a amizade sai arranhada."
    ],
    "faixa": "13+",
    "tema": "Ajudar e compartilhar"
  },
  {
    "title": "Emprestar para amigo",
    "char": "Bia",
    "icon": "🤲",
    "p": [
      "Começa quando alguém próximo passa por um aperto.",
      "Envolve dinheiro e amizade ao mesmo tempo.",
      "Combinar o valor e a data de devolução ajuda muito.",
      "Só vale com um dinheiro de que você não vai precisar logo.",
      "Entre amigos, não precisa combinar nada: sempre dá certo.",
      "É dar dinheiro a um amigo para ele devolver depois."
    ],
    "fake": 5,
    "correct": [
      "emprestar para amigo",
      "emprestar para um amigo",
      "emprestar dinheiro",
      "emprestar",
      "empréstimo para amigo"
    ],
    "near": [
      "empréstimo",
      "ajudar",
      "dívida",
      "doar",
      "vaquinha"
    ],
    "scene": "Um amigo pede R$ 300 emprestados para pagar uma conta atrasada. Você tem R$ 500 guardados na sua reserva.",
    "opts": [
      "Emprestar R$ 300 sem combinar nada, porque amigo não se cobra.",
      "Emprestar um valor que não faça falta, combinando por escrito quando ele devolve.",
      "Dizer que não pode emprestar, mas ajudar a pensar em como ele organiza as contas."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Sem combinado, a devolução pode atrasar e a amizade sofre.",
      "Você ajuda sem esvaziar a sua reserva, e os dois sabem o combinado.",
      "Protege a sua reserva e ainda ajuda, mas ele continua com a conta atrasada."
    ],
    "faixa": "13+",
    "tema": "Ajudar e compartilhar"
  },
  {
    "title": "Prioridade",
    "char": "Bia",
    "icon": "🥇",
    "p": [
      "Aparece quando você quer várias coisas.",
      "É comprar tudo de uma vez, sem escolher.",
      "Você pensa: o que vem primeiro?",
      "O mais importante fica na frente da fila.",
      "O resto pode esperar um pouco.",
      "É o que vem antes de tudo."
    ],
    "fake": 2,
    "correct": [
      "prioridade",
      "prioridades",
      "o que vem primeiro",
      "mais importante primeiro"
    ],
    "near": [
      "escolha",
      "necessidade",
      "importante",
      "urgente"
    ],
    "scene": "Você tem R$ 10. Precisa de um caderno de R$ 8 para a escola amanhã. Também quer um chaveiro de R$ 5.",
    "opts": [
      "Esperar e não comprar nada hoje.",
      "Comprar o chaveiro e pedir o caderno para alguém.",
      "Comprar o caderno primeiro e guardar o troco."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Você não gasta, mas fica sem o caderno amanhã.",
      "O importante ficou para trás, e alguém vai ter que pagar por ele.",
      "O caderno vem primeiro, e ainda sobram R$ 2."
    ],
    "faixa": "5–7",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Consertar",
    "char": "Tiko",
    "icon": "🔧",
    "p": [
      "Começa quando alguma coisa quebra.",
      "Pode precisar de cola, linha, fita ou ferramenta.",
      "Só quem trabalha numa loja pode fazer.",
      "Às vezes um adulto ajuda.",
      "A coisa volta a funcionar, e você não compra outra.",
      "É arrumar o que quebrou."
    ],
    "fake": 3,
    "correct": [
      "consertar",
      "conserto",
      "arrumar",
      "reparar",
      "consertar o que quebrou"
    ],
    "near": [
      "colar",
      "jogar fora",
      "comprar outro",
      "reaproveitar"
    ],
    "scene": "A roda do seu carrinho soltou. Dá para colar com a ajuda de um adulto. Um carrinho novo custa R$ 20.",
    "opts": [
      "Guardar o carrinho quebrado para ver depois.",
      "Pedir ajuda para colar a roda.",
      "Jogar fora e pedir um carrinho novo."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Você não gasta, mas fica sem brincar com ele por enquanto.",
      "O carrinho volta a funcionar, e os R$ 20 continuam guardados.",
      "Joga fora algo que dava para arrumar e ainda gasta R$ 20."
    ],
    "faixa": "5–7",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Vender",
    "char": "Leticia",
    "icon": "🍋",
    "p": [
      "Precisa de alguém que queira comprar.",
      "Pode ser numa barraquinha, numa feira ou na internet.",
      "Você combina um preço.",
      "Você entrega a coisa e não recebe nada.",
      "No fim, o dinheiro fica com quem vendeu.",
      "É trocar uma coisa sua por dinheiro."
    ],
    "fake": 4,
    "correct": [
      "vender",
      "venda",
      "vendedor",
      "vendendo"
    ],
    "near": [
      "comprar",
      "trocar",
      "lucro",
      "cliente",
      "loja"
    ],
    "scene": "Na festa da escola, você vai vender limonada. Fazer cada copo custa R$ 1.",
    "opts": [
      "Vender por R$ 1, o mesmo que custou.",
      "Vender por R$ 10 o copo.",
      "Vender cada copo por R$ 2."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Você vende bastante, mas não sobra nada.",
      "Fica tão caro que quase ninguém compra.",
      "Paga o que gastou e ainda sobra R$ 1 por copo."
    ],
    "faixa": "5–7",
    "tema": "Trabalho e ganhar dinheiro",
    "kit": true
  },
  {
    "title": "Pedir ajuda",
    "char": "Caio",
    "icon": "🙋",
    "p": [
      "Acontece quando algo na tela parece estranho.",
      "Uma janela pede o seu nome ou onde você mora.",
      "Você para e não aperta nada.",
      "Chama um adulto de confiança.",
      "Se o jogo pedir, pode digitar a senha do celular da família.",
      "É chamar um adulto quando você não sabe o que fazer."
    ],
    "fake": 5,
    "correct": [
      "pedir ajuda",
      "chamar um adulto",
      "chamar adulto",
      "pedir ajuda a um adulto",
      "chamar a mãe",
      "chamar o pai"
    ],
    "near": [
      "ajuda",
      "senha",
      "adulto",
      "perigo"
    ],
    "scene": "Você está vendo vídeos no tablet. Aparece: \"Parabéns! Escreva seu nome e endereço para ganhar um prêmio!\"",
    "opts": [
      "Chamar um adulto e mostrar a tela.",
      "Escrever o nome e o endereço para ganhar o prêmio.",
      "Fechar a janela e continuar vendo vídeos."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "O adulto ajuda a ver se é perigo e o que fazer.",
      "Desconhecidos ficam sabendo onde você mora.",
      "Você se protege, mas ninguém fica sabendo do que apareceu."
    ],
    "faixa": "5–7",
    "tema": "Dinheiro digital e segurança",
    "kit": true
  },
  {
    "title": "Vaquinha",
    "char": "Mel",
    "icon": "🐄",
    "p": [
      "Envolve várias pessoas ao mesmo tempo.",
      "Uma pessoa sozinha paga tudo.",
      "Cada um coloca um pouquinho.",
      "Juntos, dá para comprar algo maior.",
      "Pode ser para um presente ou para ajudar alguém.",
      "É juntar o dinheiro de muita gente para um objetivo."
    ],
    "fake": 2,
    "correct": [
      "vaquinha",
      "fazer uma vaquinha",
      "juntar dinheiro em grupo",
      "juntar dinheiro com os amigos"
    ],
    "near": [
      "doar",
      "presente",
      "compartilhar",
      "dividir"
    ],
    "scene": "A turma quer dar um presente de R$ 30 para a professora. São 15 crianças.",
    "opts": [
      "Uma criança paga tudo sozinha.",
      "Cada um coloca o quanto quiser, sem combinar.",
      "Cada um coloca R$ 2, e todos assinam o cartão."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Fica pesado demais para uma pessoa só.",
      "Pode dar certo, mas pode faltar ou sobrar dinheiro.",
      "Ninguém gasta muito, e o presente é de todos."
    ],
    "faixa": "5–7",
    "tema": "Ajudar e compartilhar"
  },
  {
    "title": "Publi",
    "char": "Vinicius",
    "icon": "📣",
    "p": [
      "Aparece nos vídeos de quem você segue.",
      "A pessoa mostra um produto e fala muito bem dele.",
      "É sempre uma opinião sincera, sem ninguém pagar nada.",
      "Muitas vezes a marca pagou ou mandou o produto de graça.",
      "O certo é avisar que é propaganda, por exemplo com #publi.",
      "É propaganda feita por um influenciador."
    ],
    "fake": 3,
    "correct": [
      "publi",
      "publicidade",
      "publipost",
      "post pago",
      "propaganda de influenciador",
      "conteúdo patrocinado",
      "patrocinado"
    ],
    "near": [
      "propaganda",
      "anúncio",
      "influenciador",
      "marketing"
    ],
    "scene": "Sua youtuber favorita mostra um tênis de R$ 300 e diz que é o melhor do mundo. Embaixo do vídeo está escrito #publi.",
    "opts": [
      "Pedir o tênis hoje, porque ela nunca mentiria.",
      "Lembrar que ela foi paga e procurar a opinião de quem comprou.",
      "Achar que todo vídeo dela é mentira e parar de assistir."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Ela pode até gostar, mas foi paga para falar bem.",
      "Você separa a propaganda da opinião de quem usou de verdade.",
      "Desconfiar ajuda, mas nem todo vídeo é publi."
    ],
    "faixa": "8–11",
    "tema": "Consumo e escolhas",
    "kit": true
  },
  {
    "title": "Pressão dos amigos",
    "char": "Bia",
    "icon": "🧢",
    "p": [
      "Acontece no grupo da escola ou do bairro.",
      "Todo mundo parece ter a mesma coisa.",
      "Você sente que vai ficar de fora se não tiver.",
      "Às vezes alguém zoa quem não tem.",
      "Só acontece com adultos.",
      "É querer algo só porque os amigos têm."
    ],
    "fake": 5,
    "correct": [
      "pressão dos amigos",
      "pressão do grupo",
      "pressão social",
      "querer o que os amigos têm",
      "influência dos amigos"
    ],
    "near": [
      "inveja",
      "moda",
      "desejo",
      "comparar"
    ],
    "scene": "Na sua turma, todos compraram o mesmo boné de R$ 80. Você tem R$ 50 guardados para uma bicicleta.",
    "opts": [
      "Comprar um boné parecido, mais barato.",
      "Pedir dinheiro emprestado para comprar o boné igual.",
      "Continuar juntando para a bicicleta e usar o boné que você já tem."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Gasta menos, mas ainda gasta por causa dos outros.",
      "Você fica devendo por algo que nem estava nos planos.",
      "Você segue o seu plano, e amigo de verdade não liga para o boné."
    ],
    "faixa": "8–11",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Caixa surpresa",
    "char": "Tiko",
    "icon": "📦",
    "p": [
      "Aparece em jogos e em lojas de brinquedos.",
      "Você paga sem saber o que vem dentro.",
      "Pode vir algo raro, mas quase sempre vem algo comum.",
      "Dá vontade de comprar de novo para tentar a sorte.",
      "Quem compra bastante sempre ganha o item mais raro.",
      "É pagar por um prêmio sorteado."
    ],
    "fake": 5,
    "correct": [
      "caixa surpresa",
      "caixa misteriosa",
      "loot box",
      "lootbox",
      "baú do jogo",
      "pacote surpresa",
      "item sorteado"
    ],
    "near": [
      "aposta",
      "sorte",
      "compra dentro do jogo",
      "figurinha",
      "sorteio"
    ],
    "scene": "No seu jogo, um baú custa R$ 10 e pode ter uma roupa rara. Seu amigo já abriu cinco e não ganhou.",
    "opts": [
      "Não comprar e conversar com um adulto sobre como os baús funcionam.",
      "Abrir só um baú e parar, ganhando ou não.",
      "Abrir baús até ganhar a roupa rara."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Você entende que o sorteio é feito para fazer gastar mais.",
      "Gasta menos, mas paga por um sorteio sem saber o que vem.",
      "Cada baú custa R$ 10, e não há garantia de ganhar."
    ],
    "faixa": "8–11",
    "tema": "Dinheiro digital e segurança",
    "kit": true
  },
  {
    "title": "Dívida",
    "char": "Caio",
    "icon": "📉",
    "p": [
      "Começa quando alguém pega algo e promete pagar depois.",
      "Some sozinha se a pessoa esquecer dela.",
      "Fica uma conta esperando para ser paga.",
      "Quanto mais demora, mais pode crescer.",
      "Pode vir de um empréstimo, de um cartão ou de uma compra parcelada.",
      "É o dinheiro que você deve para alguém."
    ],
    "fake": 2,
    "correct": [
      "dívida",
      "estar devendo",
      "dever dinheiro",
      "dinheiro que se deve"
    ],
    "near": [
      "empréstimo",
      "juros",
      "conta",
      "parcela",
      "nome sujo"
    ],
    "scene": "Você pegou R$ 20 emprestados do seu irmão para comprar um jogo. Combinou de pagar em 4 semanas, com a mesada.",
    "opts": [
      "Esperar ele cobrar e ver se ele esquece.",
      "Pagar quando sobrar dinheiro, sem data.",
      "Separar R$ 5 por semana e pagar no dia combinado."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "A dívida continua, e o seu irmão passa a confiar menos em você.",
      "Você pretende pagar, mas sem plano a dívida pode demorar muito.",
      "Você cumpre o combinado e fica livre da dívida."
    ],
    "faixa": "8–11",
    "tema": "Poupar e guardar",
    "kit": true
  },
  {
    "title": "Direito de arrependimento",
    "char": "Mel",
    "icon": "↩️",
    "p": [
      "Vale para compras feitas fora da loja, como pela internet.",
      "Só vale se o produto vier com defeito.",
      "Você recebe o produto e muda de ideia.",
      "Tem um prazo curto, contado a partir do recebimento.",
      "A loja precisa devolver o dinheiro.",
      "É o direito de desistir de uma compra online em até 7 dias."
    ],
    "fake": 2,
    "correct": [
      "direito de arrependimento",
      "arrependimento",
      "desistir da compra",
      "devolver em 7 dias",
      "devolução em 7 dias"
    ],
    "near": [
      "garantia",
      "troca",
      "devolução",
      "reembolso",
      "defeito"
    ],
    "scene": "Você comprou um fone pela internet. Chegou ontem e funciona, mas você não gostou do som.",
    "opts": [
      "Vender o fone usado para um amigo.",
      "Pedir a devolução pelo site da loja dentro de 7 dias e guardar o comprovante.",
      "Esquecer o assunto: sem defeito, não dá para devolver."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Recupera parte do dinheiro, mas perde o resto.",
      "Em compras feitas fora da loja, a lei garante a devolução do dinheiro.",
      "Você tem direito de desistir mesmo sem defeito e perde essa chance."
    ],
    "faixa": "13+",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Imposto de Renda",
    "char": "Leticia",
    "icon": "🏛️",
    "p": [
      "Tem a ver com o dinheiro que a pessoa ganha no ano.",
      "Uma parte vai para o governo.",
      "Só empresas pagam; pessoas nunca pagam.",
      "Todo ano, muita gente precisa fazer uma declaração.",
      "Às vezes a pessoa pagou a mais e recebe de volta a restituição.",
      "É o imposto sobre o que a pessoa ganha."
    ],
    "fake": 3,
    "correct": [
      "imposto de renda",
      "declaração do imposto de renda",
      "imposto sobre a renda",
      "declaração de imposto"
    ],
    "near": [
      "imposto",
      "inss",
      "salário líquido",
      "nota fiscal",
      "restituição"
    ],
    "scene": "Você começou a trabalhar e chegou a época da declaração. Uma amiga diz que é melhor não declarar nada.",
    "opts": [
      "Pedir para alguém fazer tudo por você, sem olhar o que foi enviado.",
      "Não declarar, porque ninguém vai perceber.",
      "Separar os comprovantes de renda e ver no site oficial se você precisa declarar."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Pode dar certo, mas a declaração é sua e você responde por ela.",
      "Quem precisa declarar e não declara pode pagar multa e ter problemas.",
      "Você descobre se precisa declarar e faz do jeito certo."
    ],
    "faixa": "13+",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Aposentadoria",
    "char": "Vinicius",
    "icon": "🌅",
    "p": [
      "É uma fase da vida que chega depois de muitos anos de trabalho.",
      "A pessoa para de trabalhar, mas as contas continuam.",
      "Pode vir da contribuição para o INSS e do que a pessoa guardou.",
      "Só precisa pensar nela depois dos 50 anos.",
      "Quem começa cedo tem mais tempo de juros a favor.",
      "É o dinheiro que a pessoa recebe quando para de trabalhar."
    ],
    "fake": 4,
    "correct": [
      "aposentadoria",
      "aposentar",
      "se aposentar",
      "previdência",
      "aposentado"
    ],
    "near": [
      "inss",
      "investimento",
      "reserva",
      "juros compostos",
      "poupança"
    ],
    "scene": "Você tem 22 anos e trabalha como MEI. Pagar a contribuição mensal conta tempo para a aposentadoria, mas dá vontade de usar o dinheiro em outra coisa.",
    "opts": [
      "Pagar só nos meses em que sobrar dinheiro.",
      "Pagar a contribuição em dia e, quando der, guardar um pouco a mais.",
      "Não pagar agora: aposentadoria é coisa para pensar depois."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Ajuda, mas os meses sem pagar não contam e fazem falta lá na frente.",
      "Você conta tempo para a aposentadoria e deixa os juros trabalharem por anos.",
      "Os anos que você deixa passar são os que mais rendem depois."
    ],
    "faixa": "13+",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Maquininha",
    "char": "Caio",
    "icon": "📟",
    "p": [
      "Fica no balcão da padaria ou da loja.",
      "Tem teclas e uma telinha.",
      "Ela faz dinheiro aparecer do nada.",
      "Você encosta ou coloca o cartão nela.",
      "Às vezes pede uma senha.",
      "É a máquina de pagar com cartão."
    ],
    "fake": 3,
    "correct": [
      "maquininha",
      "maquininha de cartão",
      "máquina de cartão",
      "máquina de pagar"
    ],
    "near": [
      "cartão",
      "caixa",
      "senha",
      "pix",
      "caixa eletrônico"
    ],
    "scene": "Na padaria, o pão custa R$ 6. Sua mãe passa o cartão, e a maquininha mostra R$ 60.",
    "opts": [
      "Contar para a mãe depois, em casa.",
      "Avisar a mãe para olhar o valor antes de pagar.",
      "Ficar quieto, porque a máquina nunca erra."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "É bom contar, mas depois fica mais difícil de resolver.",
      "Ela confere e corrige antes de pagar.",
      "A máquina também pode estar com o valor errado."
    ],
    "faixa": "5–7",
    "tema": "Dinheiro digital e segurança",
    "kit": true
  },
  {
    "title": "Cliente",
    "char": "Mel",
    "icon": "🛍️",
    "p": [
      "Aparece em lojas, feiras e barraquinhas.",
      "É quem vende as coisas na loja.",
      "Escolhe o que quer levar.",
      "Paga para quem vende.",
      "Toda loja precisa de muitos deles.",
      "É a pessoa que compra."
    ],
    "fake": 2,
    "correct": [
      "cliente",
      "clientes",
      "comprador",
      "freguês",
      "consumidor",
      "quem compra"
    ],
    "near": [
      "vendedor",
      "loja",
      "dinheiro",
      "comprar"
    ],
    "scene": "Você vende pulseiras na feira da escola. Uma cliente pergunta se tem de outra cor.",
    "opts": [
      "Dizer que não tem e virar de costas.",
      "Mostrar as cores que tem e ser gentil.",
      "Prometer outra cor para amanhã, sem saber se vai dar."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Ela vai embora e não volta mais.",
      "Cliente bem tratado volta e conta para os amigos.",
      "Ela fica contente, mas você prometeu algo que talvez não consiga cumprir."
    ],
    "faixa": "5–7",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Desperdício",
    "char": "Tiko",
    "icon": "🗑️",
    "p": [
      "Pode acontecer com comida, água ou luz.",
      "É usar mais do que precisa.",
      "Ajuda a sobrar mais dinheiro no fim do mês.",
      "Muitas vezes acaba no lixo.",
      "Torneira aberta à toa é um exemplo.",
      "É gastar à toa e jogar coisas fora."
    ],
    "fake": 3,
    "correct": [
      "desperdício",
      "desperdiçar",
      "gastar à toa",
      "jogar comida fora"
    ],
    "near": [
      "lixo",
      "gastar",
      "jogar fora",
      "economizar"
    ],
    "scene": "No almoço, você coloca muita comida no prato e não consegue comer tudo.",
    "opts": [
      "Comer tudo, mesmo sem fome.",
      "Jogar o resto fora e não pensar nisso.",
      "Da próxima vez, servir um pouco e repetir se tiver fome."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Não joga fora, mas comer sem fome faz mal.",
      "Comida e dinheiro vão para o lixo.",
      "Ninguém joga comida fora, e você come o quanto precisa."
    ],
    "faixa": "5–7",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Banco",
    "char": "Vinicius",
    "icon": "🏦",
    "p": [
      "Tem prédio na rua e também app no celular.",
      "Guarda o dinheiro de muitas pessoas.",
      "Lá o dinheiro fica mais seguro do que no bolso.",
      "Ele dá dinheiro de presente para quem pedir.",
      "Dá para ter uma conta e um cartão nele.",
      "É o lugar que guarda e cuida do dinheiro das pessoas."
    ],
    "fake": 4,
    "correct": [
      "banco",
      "agência",
      "agência bancária"
    ],
    "near": [
      "cofrinho",
      "conta",
      "caixa eletrônico",
      "poupança",
      "dinheiro"
    ],
    "scene": "Você juntou R$ 100 no cofrinho, e ele já está cheio. A família tem conta no banco.",
    "opts": [
      "Pedir para um adulto guardar o dinheiro numa conta no banco.",
      "Guardar num segundo cofrinho.",
      "Esconder o dinheiro dentro do travesseiro."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "No banco, o dinheiro fica protegido e anotado.",
      "Funciona, mas o dinheiro continua em casa, sem proteção.",
      "Dá para perder ou esquecer onde está."
    ],
    "faixa": "5–7",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Investimento",
    "char": "Leticia",
    "icon": "🌱",
    "p": [
      "Começa com um dinheiro que você não vai usar agora.",
      "Você coloca esse dinheiro num lugar para ele crescer.",
      "Existem vários tipos, uns mais seguros e outros mais arriscados.",
      "Quanto mais tempo, mais ele pode render.",
      "Todo investimento dobra o dinheiro em poucos dias.",
      "É aplicar o dinheiro para que ele cresça com o tempo."
    ],
    "fake": 5,
    "correct": [
      "investimento",
      "investimentos",
      "investir",
      "aplicar dinheiro",
      "aplicação"
    ],
    "near": [
      "poupança",
      "juros",
      "guardar",
      "renda fixa",
      "ações"
    ],
    "scene": "Você ganhou R$ 200 de presente e não precisa de nada agora. Seu tio diz que dá para investir com segurança.",
    "opts": [
      "Deixar o dinheiro no cofrinho.",
      "Investir com ajuda do tio num lugar seguro e acompanhar o crescimento.",
      "Colocar tudo num app que promete dobrar o dinheiro em uma semana."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Fica seguro, mas não cresce nada.",
      "O dinheiro fica protegido e cresce um pouco com o tempo.",
      "Promessa de dobrar rápido é sinal de golpe."
    ],
    "faixa": "8–11",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Campanha solidária",
    "char": "Bia",
    "icon": "🧥",
    "p": [
      "Pode acontecer na escola, na igreja ou no bairro.",
      "Muitas pessoas juntam coisas para quem precisa.",
      "Só vale se doar dinheiro.",
      "Precisa de organização: divulgar, recolher e entregar.",
      "Agasalhos, alimentos e brinquedos são exemplos.",
      "É uma ação em grupo para ajudar quem precisa."
    ],
    "fake": 3,
    "correct": [
      "campanha solidária",
      "campanha",
      "arrecadação",
      "campanha do agasalho",
      "ação solidária"
    ],
    "near": [
      "doar",
      "doação",
      "voluntariado",
      "vaquinha"
    ],
    "scene": "Sua turma vai organizar uma campanha do agasalho. Você ficou responsável pelos cartazes.",
    "opts": [
      "Não fazer, achando que alguém faz no seu lugar.",
      "Fazer um cartaz bonito, mas sem dizer onde deixar as doações.",
      "Fazer cartazes dizendo o que doar, onde deixar e até quando."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Sem cartaz, pouca gente fica sabendo.",
      "Chama a atenção, mas as pessoas não sabem onde levar.",
      "As pessoas sabem como ajudar, e a campanha arrecada mais."
    ],
    "faixa": "8–11",
    "tema": "Ajudar e compartilhar"
  },
  {
    "title": "Imposto",
    "char": "Leticia",
    "icon": "🏫",
    "p": [
      "Aparece no preço de quase tudo que se compra.",
      "Pessoas e empresas pagam.",
      "O dinheiro vai para o governo.",
      "Fica guardado pelo governo e nunca é usado.",
      "Ajuda a pagar escola pública, posto de saúde e rua asfaltada.",
      "É o dinheiro que todos pagam para cuidar do que é de todos."
    ],
    "fake": 4,
    "correct": [
      "imposto",
      "impostos",
      "tributo",
      "tributos",
      "taxa do governo"
    ],
    "near": [
      "nota fiscal",
      "taxa",
      "governo",
      "conta"
    ],
    "scene": "Na nota fiscal do mercado aparece: \"Valor aproximado dos tributos: R$ 8\". Seu primo diz que imposto não serve para nada.",
    "opts": [
      "Dizer que não sabe e pesquisar com um adulto para onde vai o imposto.",
      "Concordar que é dinheiro jogado fora.",
      "Mostrar que esse dinheiro ajuda a pagar escola, posto de saúde e ruas."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Pesquisar é bom, e vocês vão descobrir para onde vai.",
      "Sem imposto, não teria escola pública nem posto de saúde.",
      "Você explica para que serve o que todo mundo paga."
    ],
    "faixa": "8–11",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Cashback",
    "char": "Tiko",
    "icon": "💸",
    "p": [
      "Aparece em apps, cartões e lojas online.",
      "Uma parte do dinheiro gasto volta para você.",
      "Quanto mais você gasta, mais rico você fica.",
      "Só vale se você comprar.",
      "Às vezes demora para cair ou vira crédito só naquela loja.",
      "É receber de volta uma parte do que gastou."
    ],
    "fake": 3,
    "correct": [
      "cashback",
      "cash back",
      "dinheiro de volta",
      "parte do dinheiro de volta"
    ],
    "near": [
      "desconto",
      "reembolso",
      "promoção",
      "pontos",
      "milhas"
    ],
    "scene": "Um app oferece 10% de cashback em tênis. Você não precisava de tênis novo, mas no de R$ 300 voltariam R$ 30.",
    "opts": [
      "Não comprar: cashback só vale a pena no que você já ia comprar.",
      "Comprar um tênis mais barato só para aproveitar o cashback.",
      "Comprar, porque vai ganhar R$ 30."
    ],
    "pts": [
      2,
      1,
      -1
    ],
    "why": [
      "Cashback é bom quando a compra já estava nos planos.",
      "Gasta menos, mas ainda compra algo de que não precisava.",
      "Você gasta R$ 300 para receber R$ 30: no fim, sai com R$ 270 a menos."
    ],
    "faixa": "13+",
    "tema": "Consumo e escolhas"
  },
  {
    "title": "Sócio",
    "char": "Mel",
    "icon": "👥",
    "p": [
      "Tem a ver com abrir ou cuidar de um negócio.",
      "São duas ou mais pessoas no mesmo projeto.",
      "Cada um pode entrar com dinheiro, trabalho ou ideias.",
      "Na hora do prejuízo, só um paga; o lucro é de todos.",
      "Combinar tudo por escrito evita briga.",
      "É quem divide um negócio com você."
    ],
    "fake": 4,
    "correct": [
      "sócio",
      "sócios",
      "sócia",
      "sociedade",
      "parceiro de negócio"
    ],
    "near": [
      "amigo",
      "empresa",
      "empreender",
      "parceiro",
      "mei"
    ],
    "scene": "Você e uma amiga querem vender brigadeiros juntas. Você entra com a cozinha, e ela com o dinheiro dos ingredientes.",
    "opts": [
      "Começar sem combinar nada, porque são amigas.",
      "Combinar por escrito quem faz o quê e como dividir o lucro e os gastos.",
      "Combinar só de boca como dividir o lucro."
    ],
    "pts": [
      -1,
      2,
      1
    ],
    "why": [
      "Na primeira dúvida sobre dinheiro, pode surgir briga.",
      "Fica claro para as duas, e a amizade fica protegida.",
      "Ajuda, mas o que é combinado de boca é fácil de esquecer."
    ],
    "faixa": "13+",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Vaquinha online",
    "char": "Vinicius",
    "icon": "🌐",
    "p": [
      "Aparece em redes sociais e em sites de doação.",
      "Toda campanha na internet é verdadeira.",
      "Alguém conta uma história e pede ajuda.",
      "Muita gente doa um pouco pela internet.",
      "Vale conferir quem organiza e para onde vai o dinheiro.",
      "É juntar doações de muitas pessoas pela internet."
    ],
    "fake": 2,
    "correct": [
      "vaquinha online",
      "vaquinha virtual",
      "vaquinha na internet",
      "crowdfunding",
      "doação online"
    ],
    "near": [
      "vaquinha",
      "doação",
      "doar",
      "golpe",
      "pix"
    ],
    "scene": "Um perfil que você não conhece pede Pix para o tratamento de um cachorro. Tem foto, mas não diz quem organiza.",
    "opts": [
      "Doar na hora, porque a foto é muito triste.",
      "Não doar e seguir em frente.",
      "Procurar quem organiza e doar por uma plataforma ou ONG em que você confia."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "A pressa é o que golpistas querem, e a foto pode ser de outro lugar.",
      "Você se protege, mas perde a chance de ajudar alguém de verdade.",
      "Você ajuda e sabe para onde vai o dinheiro."
    ],
    "faixa": "13+",
    "tema": "Ajudar e compartilhar"
  },
  {
    "title": "Ajudar em casa",
    "char": "Bia",
    "icon": "🧹",
    "p": [
      "Acontece todos os dias, em toda família.",
      "Pode ser arrumar a cama, guardar os brinquedos ou pôr a mesa.",
      "Só vale se alguém pagar por isso.",
      "Cada um faz uma parte, do seu tamanho.",
      "A casa fica boa para todo mundo.",
      "É fazer a sua parte nas tarefas da casa."
    ],
    "fake": 3,
    "correct": [
      "ajudar em casa",
      "ajudar na casa",
      "tarefas da casa",
      "ajudar nas tarefas",
      "arrumar a casa"
    ],
    "near": [
      "mesada",
      "trabalho",
      "arrumar",
      "limpar",
      "ajudar"
    ],
    "scene": "Depois do jantar, sua mãe pede ajuda para tirar a mesa. Você queria ver desenho.",
    "opts": [
      "Levar só o seu prato e ir ver desenho.",
      "Tirar a mesa primeiro e ver desenho depois.",
      "Dizer que só ajuda se ganhar dinheiro."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Já ajuda um pouco, mas o resto fica para os outros.",
      "Todo mundo ajuda, e ainda sobra tempo para o desenho.",
      "Em casa, todos ajudam porque moram juntos, não para ganhar dinheiro."
    ],
    "faixa": "5–7",
    "tema": "Ajudar e compartilhar",
    "kit": true
  },
  {
    "title": "Profissão",
    "char": "Caio",
    "icon": "🩺",
    "p": [
      "Toda pessoa grande pode ter uma.",
      "Todo mundo tem a mesma, igualzinha.",
      "Pode ser padeira, médico, motorista ou professora.",
      "Muitas vezes a pessoa estuda para aprender.",
      "Quando você crescer, vai poder escolher a sua.",
      "É o tipo de trabalho que a pessoa faz."
    ],
    "fake": 2,
    "correct": [
      "profissão",
      "profissões",
      "o que eu quero ser",
      "ocupação"
    ],
    "near": [
      "trabalho",
      "emprego",
      "dinheiro",
      "escola"
    ],
    "scene": "Na escola, a professora pergunta o que você quer ser quando crescer. Você gosta muito de animais.",
    "opts": [
      "Dizer que vai escolher só a profissão que ganha mais, sem pensar no que gosta.",
      "Dizer que não sabe e não pensar mais nisso.",
      "Contar que gosta de animais e perguntar que profissões cuidam deles."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Ganhar bem importa, mas fazer algo de que você gosta também.",
      "Tudo bem não saber, mas pensar no que você gosta ajuda a descobrir.",
      "Você descobre profissões como veterinária e cuidadora de animais."
    ],
    "faixa": "5–7",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Caixa eletrônico",
    "char": "Mel",
    "icon": "🏧",
    "p": [
      "Fica no banco, no mercado ou no shopping.",
      "Tem uma tela, teclas e uma abertura para o cartão.",
      "Pede uma senha secreta.",
      "Dá para tirar dinheiro da conta.",
      "Qualquer pessoa pode tirar dinheiro da conta de outra.",
      "É a máquina do banco que entrega dinheiro."
    ],
    "fake": 5,
    "correct": [
      "caixa eletrônico",
      "caixa do banco",
      "máquina do banco",
      "caixa 24 horas"
    ],
    "near": [
      "banco",
      "maquininha",
      "cartão",
      "senha",
      "dinheiro"
    ],
    "scene": "Você está com seu pai no caixa eletrônico. Um moço atrás de vocês fica olhando a tela bem de perto.",
    "opts": [
      "Avisar o pai baixinho para tampar a senha com a mão.",
      "Ler a senha em voz alta para ajudar o pai.",
      "Ficar quieto e não falar nada."
    ],
    "pts": [
      2,
      -1,
      1
    ],
    "why": [
      "Ninguém vê a senha, e o dinheiro fica protegido.",
      "Todo mundo fica sabendo a senha secreta.",
      "Você não atrapalha, mas o moço pode ver a senha."
    ],
    "faixa": "5–7",
    "tema": "Dinheiro digital e segurança"
  },
  {
    "title": "Preço de venda",
    "char": "Vinicius",
    "icon": "🏷️",
    "p": [
      "Quem vende precisa decidir.",
      "Começa somando quanto custou fazer o produto.",
      "Depois, coloca um pouco a mais para ter lucro.",
      "Quanto mais caro, mais clientes compram.",
      "Vale olhar quanto os outros cobram pelo mesmo produto.",
      "É o valor que você cobra de quem compra."
    ],
    "fake": 4,
    "correct": [
      "preço de venda",
      "quanto cobrar",
      "valor de venda",
      "preço para vender"
    ],
    "near": [
      "preço",
      "lucro",
      "custo",
      "desconto",
      "preço por unidade"
    ],
    "scene": "Você vai vender brigadeiros na escola. Cada um custa R$ 1 para fazer, e na cantina um doce parecido custa R$ 3.",
    "opts": [
      "Cobrar R$ 3, igual à cantina.",
      "Cobrar R$ 6, porque o seu é o melhor.",
      "Cobrar R$ 2,50: paga o custo, sobra lucro e fica mais barato que a cantina."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Tem lucro, mas não chama mais atenção do que a cantina.",
      "Fica caro demais, e os clientes vão para a cantina.",
      "Cobre o custo, tem lucro e atrai clientes."
    ],
    "faixa": "8–11",
    "tema": "Trabalho e ganhar dinheiro",
    "kit": true
  },
  {
    "title": "Gorjeta",
    "char": "Leticia",
    "icon": "🍽️",
    "p": [
      "Acontece depois de um serviço bem feito.",
      "Pode ser num restaurante, num salão ou numa entrega.",
      "É obrigatória em qualquer compra.",
      "É um valor a mais, além do preço.",
      "Vai para quem trabalhou e atendeu você.",
      "É um dinheiro extra dado como agradecimento por um serviço."
    ],
    "fake": 3,
    "correct": [
      "gorjeta",
      "gorjetas",
      "taxa de serviço",
      "caixinha"
    ],
    "near": [
      "troco",
      "salário",
      "presente",
      "desconto"
    ],
    "scene": "A pizza chegou rápida e quentinha. O entregador foi muito educado, e sobraram R$ 5 de troco.",
    "opts": [
      "Reclamar que ele demorou, para ganhar desconto.",
      "Só agradecer e fechar a porta.",
      "Combinar com a família se dá para deixar uma gorjeta e agradecer."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Mentir para ganhar desconto prejudica quem trabalhou bem.",
      "Agradecer já é gentil, mesmo sem gorjeta.",
      "Agradecer e, quando dá, dar gorjeta valoriza um bom trabalho."
    ],
    "faixa": "8–11",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Feira de trocas",
    "char": "Tiko",
    "icon": "🧸",
    "p": [
      "Acontece na escola, na praça ou no condomínio.",
      "Cada um leva coisas que não usa mais.",
      "Para participar, é preciso pagar com dinheiro.",
      "Brinquedos, livros e roupas ganham um novo dono.",
      "Ninguém compra nada, e todo mundo leva algo novo.",
      "É um encontro para trocar coisas, sem usar dinheiro."
    ],
    "fake": 3,
    "correct": [
      "feira de trocas",
      "feira de troca",
      "troca",
      "trocar",
      "troca de brinquedos",
      "escambo"
    ],
    "near": [
      "doar",
      "brechó",
      "vender",
      "feira",
      "compartilhar"
    ],
    "scene": "Sua escola vai fazer uma feira de trocas. Você tem 5 livros que já leu e um que adora.",
    "opts": [
      "Levar só um livro, para não ficar sem nenhum.",
      "Levar livros rasgados que ninguém quer.",
      "Levar os 5 livros já lidos, em bom estado, e ficar com o preferido."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Você participa, mas poderia trocar mais coisas que não usa.",
      "Ninguém quer trocar por algo estragado.",
      "Os livros ganham novos leitores, e você volta com livros novos."
    ],
    "faixa": "8–11",
    "tema": "Ajudar e compartilhar",
    "kit": true
  },
  {
    "title": "Conta bancária",
    "char": "Tiko",
    "icon": "🗂️",
    "p": [
      "Fica num banco ou num app de banco.",
      "Só adultos podem ter uma.",
      "Tem um número e o nome do dono.",
      "Guarda o dinheiro e mostra o saldo.",
      "Pode ter cartão, Pix e extrato.",
      "É o lugar no banco onde fica o dinheiro de uma pessoa."
    ],
    "fake": 2,
    "correct": [
      "conta bancária",
      "conta no banco",
      "conta de banco",
      "conta corrente",
      "conta digital"
    ],
    "near": [
      "conta",
      "banco",
      "poupança",
      "saldo",
      "cartão"
    ],
    "scene": "Você recebe mesada todo mês e quer juntar para um videogame. Seus pais oferecem abrir uma conta para você, que eles acompanham.",
    "opts": [
      "Continuar guardando tudo na gaveta.",
      "Pedir a senha da conta dos pais para usar quando quiser.",
      "Abrir a conta, guardar parte da mesada e olhar o saldo com os pais."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Funciona, mas o dinheiro pode sumir e não fica anotado.",
      "A senha é só de quem é dono da conta.",
      "O dinheiro fica protegido, e você aprende a acompanhar o saldo."
    ],
    "faixa": "8–11",
    "tema": "Poupar e guardar"
  },
  {
    "title": "Entrevista de emprego",
    "char": "Leticia",
    "icon": "🗣️",
    "p": [
      "Acontece depois que você manda o currículo.",
      "Pode ser presencial ou por vídeo.",
      "Alguém faz perguntas sobre você.",
      "Quem chega atrasado ganha mais pontos.",
      "Vale pesquisar sobre a empresa antes.",
      "É a conversa para ver se você combina com a vaga."
    ],
    "fake": 4,
    "correct": [
      "entrevista de emprego",
      "entrevista",
      "entrevista de trabalho",
      "processo seletivo"
    ],
    "near": [
      "currículo",
      "vaga",
      "emprego",
      "jovem aprendiz"
    ],
    "scene": "Você foi chamado para uma entrevista de jovem aprendiz amanhã às 9h, por vídeo.",
    "opts": [
      "Entrar na hora certa, sem se preparar.",
      "Pesquisar sobre a empresa, testar a internet e entrar alguns minutos antes.",
      "Entrar na hora, deitado na cama, e ver o que acontece."
    ],
    "pts": [
      1,
      2,
      -1
    ],
    "why": [
      "Mostra pontualidade, mas fica difícil responder sobre a empresa.",
      "Você mostra interesse e evita problemas na hora.",
      "Passa a impressão de que não liga para a vaga."
    ],
    "faixa": "13+",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Carteira de trabalho",
    "char": "Caio",
    "icon": "📘",
    "p": [
      "Hoje ela também existe no celular, num app do governo.",
      "Só serve para quem é dono de empresa.",
      "Registra os empregos com contrato.",
      "Garante direitos como férias, 13º salário e FGTS.",
      "Conta o tempo para a aposentadoria.",
      "É o documento que registra o trabalho com carteira assinada."
    ],
    "fake": 2,
    "correct": [
      "carteira de trabalho",
      "carteira assinada",
      "ctps",
      "registro em carteira"
    ],
    "near": [
      "carteira",
      "contrato",
      "salário",
      "emprego",
      "mei"
    ],
    "scene": "Você conseguiu um emprego numa loja. O dono oferece pagar um pouco a mais se você trabalhar sem registro.",
    "opts": [
      "Aceitar sem registro, porque o dinheiro hoje é maior.",
      "Aceitar por um tempo e pedir o registro depois.",
      "Pedir o registro na carteira, mesmo ganhando um pouco menos agora."
    ],
    "pts": [
      -1,
      1,
      2
    ],
    "why": [
      "Sem registro, você perde direitos e fica desprotegido se for demitido.",
      "Pode dar certo, mas o tempo sem registro não conta para nada.",
      "Com registro, você tem férias, 13º, FGTS e tempo para a aposentadoria."
    ],
    "faixa": "13+",
    "tema": "Trabalho e ganhar dinheiro"
  },
  {
    "title": "Fiador",
    "char": "Vinicius",
    "icon": "✍️",
    "p": [
      "Aparece no aluguel de uma casa ou num empréstimo.",
      "Alguém pede para você assinar junto.",
      "Você não pega o dinheiro nem mora na casa.",
      "Se a outra pessoa não pagar, ninguém cobra de você.",
      "Antes de aceitar, vale saber se você conseguiria pagar a dívida.",
      "É quem garante pagar a dívida de outra pessoa se ela não pagar."
    ],
    "fake": 4,
    "correct": [
      "fiador",
      "fiadora",
      "fiança",
      "ser fiador",
      "avalista"
    ],
    "near": [
      "empréstimo",
      "dívida",
      "aluguel",
      "emprestar para amigo",
      "nome sujo"
    ],
    "scene": "Um amigo vai alugar um apartamento e pede para você ser fiador. Ele já atrasou contas antes, e você não teria como pagar o aluguel dele.",
    "opts": [
      "Dizer que vai pensar e não responder mais.",
      "Assinar na hora, porque amigo não deixa amigo na mão.",
      "Explicar que não pode ser fiador e ajudar a procurar outra garantia, como seguro-fiança ou caução."
    ],
    "pts": [
      1,
      -1,
      2
    ],
    "why": [
      "Você não assina, mas deixa o amigo sem resposta.",
      "Se ele não pagar, a dívida vira sua e pode sujar o seu nome.",
      "Você protege o seu nome e ainda ajuda o amigo a achar uma saída."
    ],
    "faixa": "13+",
    "tema": "Ajudar e compartilhar"
  }
];

/* Respostas ampliadas para o teste: cada conjunto vale como acerto quando todas as palavras aparecem (prefixo da palavra). */
const EXTRA={
'Promoção relâmpago':{tipo:'É um tipo de oferta de loja.',nudge:'Pense: essa oferta dura muito ou pouco tempo?',sets:[['relampago'],['promocao','hoje'],['oferta','hoje'],['promocao','tempo'],['oferta','tempo'],['promocao','pouco'],['oferta','pouco'],['promocao','curta'],['oferta','curta'],['promocao','acaba'],['oferta','acaba'],['promocao','rapida'],['oferta','rapida']]},
'Troco':{tipo:'É um valor de dinheiro que aparece quando você paga.',nudge:'Pense: você paga com uma nota maior e o caixa devolve algo.',sets:[['dinheiro','devolvid'],['diferenca','devolvid']]},
'Golpe por mensagem':{tipo:'É um perigo que chega no celular.',nudge:'Pense: alguém quer enganar você por uma mensagem.',sets:[['golpe','mensag'],['golpe','celular'],['golpe','sms'],['golpe','whats'],['fraud','mensag'],['phishing'],['enganar','mensagem'],['mensagem','falsa'],['mensagem','enganosa']]},
'Parcelamento':{tipo:'É um jeito de pagar uma compra.',nudge:'Pense: pagar uma compra aos poucos, em vários pedaços.',sets:[['parcel'],['prestac'],['dividir','pagamento'],['dividir','compra'],['pagar','partes'],['pagar','meses'],['pagar','pedacos'],['pagar','aos poucos']]},
'Preço por unidade':{tipo:'É uma conta para comparar produtos.',nudge:'Pense: quanto custa cada um, não a caixa toda.',sets:[['preco','unidade'],['preco','unitario'],['custo','unidade'],['valor','cada'],['preco','cada'],['quanto','cada'],['preco','item'],['unitario']]},
'Imprevisto':{tipo:'É uma situação que acontece sem avisar.',nudge:'Pense: algo que ninguém esperava e mudou os planos.',sets:[['imprevist'],['inesperad'],['nao','planejad'],['nao','esperad'],['sem','avisar']]},
'Meta':{tipo:'É algo que você planeja alcançar.',nudge:'Pense: um objetivo com valor e prazo.',sets:[['meta'],['objetivo'],['alvo']]},
'Empréstimo':{tipo:'É algo que você pega e depois devolve.',nudge:'Pense: alguém deixa uma coisa com você só por um tempo.',sets:[['emprest']]}
};
Object.assign(EXTRA,{"Cofrinho": {"tipo": "É um objeto, não uma ação.", "nudge": "Pense: onde uma criança guarda moedas em casa?", "sets": [["cofr"], ["porquinho"], ["guardar", "dinheiro"]]}, "Economizar": {"tipo": "É uma ação (verbo).", "nudge": "Pense: o que você faz para sobrar mais dinheiro?", "sets": [["economiz"], ["gastar", "menos"], ["poup"]]}, "Poupança": {"tipo": "É um hábito, que se repete.", "nudge": "Pense: o que acontece quando você guarda um pouquinho sempre?", "sets": [["poupanc"], ["poupar"], ["guardar", "mes"]]}, "Juros": {"tipo": "É um valor extra, e depende do tempo.", "nudge": "Pense: o que muda no dinheiro guardado depois de muitos meses?", "sets": [["juro"], ["rendimento"], ["valor", "extra"], ["valor", "mais", "tempo"]]}, "Reserva de emergência": {"tipo": "É dinheiro guardado com um propósito.", "nudge": "Pense: para qual tipo de dia esse dinheiro foi guardado?", "sets": [["reserva"], ["emerg", "guard"], ["dinheiro", "imprevisto"]]}, "Esperar para comprar": {"tipo": "É uma atitude, tem tempo envolvido.", "nudge": "Pense: o que você faz antes de levar uma coisa para casa?", "sets": [["esper"], ["pacienc"], ["adiar"], ["comprar", "depois"]]}, "Necessidade": {"tipo": "É um tipo de coisa que se precisa.", "nudge": "Pense: sem o que você não consegue viver bem?", "sets": [["necessid"], ["essencial"], ["preciso"]]}, "Desejo": {"tipo": "É um sentimento, não um objeto.", "nudge": "Pense: como se chama o que você sente ao ver algo e dizer \"eu quero\"?", "sets": [["desej"], ["vontade"], ["quero"], ["quer"]]}, "Propaganda": {"tipo": "É uma mensagem, não um produto.", "nudge": "Pense: o que quer te convencer a comprar enquanto você vê um vídeo?", "sets": [["propagand"], ["anunc"], ["publicid"], ["comercial"]]}, "Compra por impulso": {"tipo": "É um jeito de comprar.", "nudge": "Pense: como se chama comprar de repente, só pela emoção?", "sets": [["impuls"], ["sem", "pens"], ["sem", "planej"]]}, "Custo-benefício": {"tipo": "É uma forma de comparar.", "nudge": "Pense: o que se compara além do preço?", "sets": [["custo", "benef"], ["vale", "pena"], ["qualidade", "preco"]]}, "Lista de compras": {"tipo": "É um papel ou nota, não uma ação.", "nudge": "Pense: o que a família escreve antes de ir ao mercado?", "sets": [["lista"], ["anotar", "compr"]]}, "Pix": {"tipo": "É um meio de pagamento.", "nudge": "Pense: como se paga na hora pelo celular, com uma chave?", "sets": [["pix"], ["pagar", "celular"], ["pagamento", "instant"]]}, "Senha": {"tipo": "É um segredo, feito de letras e números.", "nudge": "Pense: o que protege a sua conta e só você sabe?", "sets": [["senha"], ["codigo", "secret"], ["segredo", "acesso"]]}, "Compra online": {"tipo": "É um jeito de comprar.", "nudge": "Pense: como se compra sem sair de casa?", "sets": [["compra", "online"], ["comprar", "internet"], ["comprar", "site"], ["loja", "online"], ["compra", "digital"], ["compra", "virtual"], ["comprar", "app"]]}, "Cartão de crédito": {"tipo": "É um objeto e também uma forma de pagar.", "nudge": "Pense: como se chama o cartão que você paga depois, na fatura?", "sets": [["cartao", "credito"], ["credito"], ["cartao", "fatura"], ["pagar", "depois"]]}, "Saldo": {"tipo": "É um número sobre o seu dinheiro.", "nudge": "Pense: como se chama o número que mostra quanto sobrou?", "sets": [["saldo"], ["quanto", "tenho"], ["dinheiro", "sobrou"], ["quanto", "conta"]]}, "Código de verificação": {"tipo": "É um número, e vale por pouco tempo.", "nudge": "Pense: o que chega por mensagem para provar que é você?", "sets": [["codigo"], ["verific"], ["numero", "uso", "unico"]]}, "Mesada": {"tipo": "É um dinheiro, vem de alguém da família.", "nudge": "Pense: como se chama o dinheiro combinado que a criança recebe?", "sets": [["mesada"], ["semanada"]]}, "Trabalho": {"tipo": "É uma ação, e muita gente faz todo dia.", "nudge": "Pense: o que o seu pai ou mãe faz para ganhar dinheiro?", "sets": [["trabalh"], ["emprego"], ["profiss"]]}, "Salário": {"tipo": "É um pagamento, com data certa.", "nudge": "Pense: o que chega todo mês para quem trabalha?", "sets": [["salario"], ["ordenado"], ["pagamento", "trabalh"]]}, "Lucro": {"tipo": "É um resultado de uma conta.", "nudge": "Pense: o que sobra depois de tirar o que se gastou?", "sets": [["lucro"], ["sobra", "venda"], ["ganho", "custo"], ["sobra", "custo"]]}, "Renda extra": {"tipo": "É um dinheiro, vem além do que se recebe normalmente.", "nudge": "Pense: como se chama o dinheiro que vem de um trabalho a mais?", "sets": [["renda", "extra"], ["dinheiro", "extra"], ["dinheiro", "mais"], ["bico"]]}, "Empreender": {"tipo": "É uma ação (verbo).", "nudge": "Pense: o que se faz para criar o próprio negócio?", "sets": [["empreend"], ["criar", "negocio"], ["abrir", "negocio"], ["proprio", "negocio"]]}});
/* Lote 1 de cartas novas do jogo digital (15/11/2026) */
Object.assign(EXTRA,{"Escolha":{"tipo":"É algo que você faz antes de comprar.","nudge":"Pense: o dinheiro dá para uma coisa só. O que você faz?","sets":[["escolh"],["decid"],["decis"],["isto","aquilo"]]},"Moeda":{"tipo":"É um tipo de dinheiro que você pode pegar na mão.","nudge":"Pense: dinheiro redondo, de metal.","sets":[["moed"]]},"Quatro potes":{"tipo":"É um jeito de organizar o dinheiro.","nudge":"Pense: quantos potes e para que serve cada um?","sets":[["quatro","pote"],["4","pote"],["pote","agora"],["pote","reserva"],["pote","sonho"],["pote","compartilh"],["quatro","cofr"]]},"Dinheiro de presente":{"tipo":"É dinheiro que chega de um jeito especial.","nudge":"Pense: em que dia alguém da família dá dinheiro para você?","sets":[["presente","dinheiro"],["dinheiro","aniversari"],["ganh","presente"]]},"Compra dentro do jogo":{"tipo":"É algo que aparece no meio de um jogo.","nudge":"Pense: o jogo quer que você gaste dinheiro de verdade.","sets":[["compr","jogo"],["compr","app"],["compr","aplicativ"],["gast","jogo"],["pag","jogo"]]},"Doar":{"tipo":"É uma ação de ajudar.","nudge":"Pense: dar algo para quem precisa, sem pedir nada em troca.","sets":[["doa"],["dar","precis"]]},"Compartilhar":{"tipo":"É uma ação que se faz junto com outras pessoas.","nudge":"Pense: o que você faz quando o amigo não tem lanche?","sets":[["compartilh"],["dividir"],["dividindo"],["partilh"]]},"Honestidade":{"tipo":"É uma qualidade de uma pessoa.","nudge":"Pense: devolver o que não é seu, mesmo se ninguém viu.","sets":[["honest"],["verdad"],["sincer"]]},"Custo de oportunidade":{"tipo":"É uma ideia sobre escolhas.","nudge":"Pense: quando você escolhe uma coisa, o que perde?","sets":[["oportunidad"],["deix","de ter"],["deix","de fazer"],["abr","mao"],["renunc"]]},"Orçamento":{"tipo":"É um plano.","nudge":"Pense: anotar quanto entra e quanto sai antes de gastar.","sets":[["orcament"],["planej"],["plano","gast"],["plano","dinheiro"],["control","gast"]]},"Link falso":{"tipo":"É um perigo da internet.","nudge":"Pense: um endereço de internet que parece verdadeiro, mas engana.","sets":[["link","fals"],["link","golpe"],["link","suspeit"],["link","fraud"],["site","fals"],["link","engan"]]},"Voluntariado":{"tipo":"É um jeito de ajudar.","nudge":"Pense: trabalhar de graça para ajudar a comunidade.","sets":[["voluntar"]]}});
/* Lote 2 de cartas novas do jogo digital: faixa 13 anos ou mais (15/11/2026) */
Object.assign(EXTRA,{"Rotativo do cartão":{"tipo":"É um tipo de dívida.","nudge":"Pense: o que acontece com a parte da fatura que você não pagou?","sets":[["rotativ"],["pag","minimo"]]},"Nome sujo":{"tipo":"É uma situação de quem deve.","nudge":"Pense: como se diz quando o CPF entra na lista de devedores?","sets":[["nome","sujo"],["negativ"]]},"Score":{"tipo":"É um número.","nudge":"Pense: a nota que os bancos dão para quem paga em dia.","sets":[["score"],["pontua","credito"],["nota","credito"]]},"Juros compostos":{"tipo":"É um jeito de o dinheiro crescer.","nudge":"Pense: juros que também rendem juros, como uma bola de neve.","sets":[["juro","compost"],["juro","sobre","juro"]]},"Aposta":{"tipo":"É um jogo com dinheiro.","nudge":"Pense: colocar dinheiro num resultado de sorte, esperando ganhar mais.","sets":[["aposta"],["jogo","azar"]]},"Pirâmide financeira":{"tipo":"É um golpe com cara de investimento.","nudge":"Pense: o dinheiro de quem entra depois paga quem entrou antes.","sets":[["piramid"],["ponzi"]]},"Conta laranja":{"tipo":"É algo que alguém pede emprestado.","nudge":"Pense: deixar outra pessoa usar a sua conta do banco. Que nome tem isso?","sets":[["laranj"],["emprest","conta"]]},"Perfil falso":{"tipo":"É um golpe no celular.","nudge":"Pense: alguém usa a foto de um parente para pedir dinheiro.","sets":[["perfil","fals"],["fals","parent"],["fing","outra"],["passa","outra","pessoa"]]},"Golpe do falso emprego":{"tipo":"É um golpe.","nudge":"Pense: uma vaga de trabalho que, na verdade, quer o seu dinheiro.","sets":[["fals","empreg"],["fals","vaga"],["fals","trabalh"],["golpe","tarefa"],["golpe","empreg"],["golpe","vaga"]]},"Jovem aprendiz":{"tipo":"É um tipo de trabalho.","nudge":"Pense: o programa de primeiro emprego para quem ainda estuda.","sets":[["aprendiz"]]},"Salário líquido":{"tipo":"É um valor de dinheiro.","nudge":"Pense: o salário que sobra depois dos descontos tem um nome.","sets":[["sobra","descont"],["depois","descont"]]},"Contas da casa":{"tipo":"É um grupo de gastos.","nudge":"Pense: luz, água, internet e aluguel. Todas juntas são o quê?","sets":[["conta","casa"],["despes","casa"],["gast","casa"],["conta","mes"]]}});
/* Lote 3 de cartas novas do jogo digital: faixa 13 anos ou mais (15/11/2026) */
Object.assign(EXTRA,{"Assinatura":{"tipo":"É um jeito de pagar por um serviço.","nudge":"Pense: um serviço que cobra todo mês até você cancelar.","sets":[["assinat"],["mensalid"],["cobranc","recorr"],["cobranc","todo","mes"]]},"Financiamento":{"tipo":"É um jeito de comprar algo caro.","nudge":"Pense: o banco paga a moto, e você devolve em parcelas com juros.","sets":[["financiam"]]},"Padrão de vida":{"tipo":"É um jeito de viver.","nudge":"Pense: o nível de conforto e de gastos que sobe quando a renda sobe.","sets":[["padrao","vida"],["nivel","vida"],["estilo","vida"]]},"Renegociar":{"tipo":"É uma ação de quem deve.","nudge":"Pense: conversar com quem você deve para fazer um acordo novo.","sets":[["renegoci"],["acord"],["negoci","divid"]]},"Seguro":{"tipo":"É uma proteção.","nudge":"Pense: pagar pouco todo mês para não ter um prejuízo grande.","sets":[["apolic"]]},"Diversificar":{"tipo":"É um jeito de investir.","nudge":"Pense: não colocar todos os ovos na mesma cesta.","sets":[["diversific"],["divid","invest"],["ovos","cesta"]]},"Boleto falso":{"tipo":"É um golpe.","nudge":"Pense: uma conta com código de barras que manda o dinheiro para o lugar errado.","sets":[["boleto","fals"],["boleto","golpe"],["boleto","fraud"],["boleto","adulter"]]},"QR Code falso":{"tipo":"É um golpe.","nudge":"Pense: um quadradinho de pagamento trocado por outro.","sets":[["qr","fals"],["qrcode","fals"],["qr","golpe"],["qr","troc"],["qr","adulter"]]},"MEI":{"tipo":"É um tipo de cadastro de trabalho.","nudge":"Pense: a sigla do jeito mais simples de formalizar um pequeno negócio.","sets":[["microempreend"],["formaliz"]]},"Currículo":{"tipo":"É um documento.","nudge":"Pense: o papel que você manda quando procura emprego.","sets":[["curricul"]]},"Rachar a conta":{"tipo":"É algo que se faz em grupo.","nudge":"Pense: a pizza acabou, e cada um paga um pedaço da conta.","sets":[["rach"],["divid","conta"]]},"Emprestar para amigo":{"tipo":"É uma forma de ajudar.","nudge":"Pense: dar dinheiro a um amigo, combinando que ele devolve.","sets":[["emprest","amig"],["emprest","dinheiro"]]}});
/* Lote 4 de cartas novas do jogo digital: 5 de 5–7, 4 de 8–12, 3 de 13+ (15/11/2026) */
Object.assign(EXTRA,{"Prioridade":{"tipo":"É um jeito de organizar escolhas.","nudge":"Pense: entre várias coisas, qual vem primeiro?","sets":[["priorid"],["primeiro","importante"],["vem","primeiro"]]},"Consertar":{"tipo":"É uma ação.","nudge":"Pense: o que se faz com um brinquedo quebrado em vez de jogar fora?","sets":[["consert"],["arrum"],["repar"]]},"Vender":{"tipo":"É uma ação de quem trabalha.","nudge":"Pense: trocar uma coisa sua por dinheiro.","sets":[["vend"]]},"Pedir ajuda":{"tipo":"É uma ação de segurança.","nudge":"Pense: quem você chama quando a tela pede coisas estranhas?","sets":[["ped","ajud"],["cham","adult"],["cham","mae"],["cham","pai"]]},"Vaquinha":{"tipo":"É algo que se faz em grupo.","nudge":"Pense: cada um coloca um pouco para comprar algo juntos.","sets":[["vaquinh"],["junt","dinheiro","grupo"],["junt","dinheiro","amig"],["junt","dinheiro","turma"]]},"Publi":{"tipo":"É um tipo de propaganda.","nudge":"Pense: o influenciador foi pago para mostrar o produto.","sets":[["publi"],["patrocin"],["post","pago"],["propaganda","influenc"]]},"Pressão dos amigos":{"tipo":"É um sentimento que vem do grupo.","nudge":"Pense: querer algo só porque todos os amigos têm.","sets":[["pressa","amig"],["pressa","grup"],["pressa","social"],["influenc","amig"]]},"Caixa surpresa":{"tipo":"É uma compra com sorteio.","nudge":"Pense: pagar sem saber o que vem dentro.","sets":[["caixa","surpres"],["caixa","mister"],["loot"],["bau"],["pacot","surpres"],["premio","sortead"]]},"Dívida":{"tipo":"É algo que alguém deve.","nudge":"Pense: o dinheiro que você prometeu pagar depois.","sets":[["deve","dinheiro"],["devend"]]},"Direito de arrependimento":{"tipo":"É um direito de quem compra.","nudge":"Pense: desistir de uma compra feita pela internet.","sets":[["arrepend"],["desist","compr"],["devol","7"],["devol","sete"]]},"Imposto de Renda":{"tipo":"É um imposto.","nudge":"Pense: a declaração que muita gente faz todo ano sobre o que ganhou.","sets":[["impost","renda"],["declarac","impost"],["leao"]]},"Aposentadoria":{"tipo":"É uma fase da vida.","nudge":"Pense: o dinheiro de quem já parou de trabalhar.","sets":[["aposent"],["previdenc"]]}});
/* Lote 5 de cartas novas do jogo digital: 4 de 5–7, 3 de 8–12, 3 de 13+ (15/11/2026) */
Object.assign(EXTRA,{"Maquininha":{"tipo":"É uma máquina.","nudge":"Pense: onde a gente passa o cartão para pagar na padaria?","sets":[["maquina","cartao"],["maquina","pag"]]},"Cliente":{"tipo":"É uma pessoa.","nudge":"Pense: quem compra na loja ou na barraquinha?","sets":[["client"],["fregues"],["comprador"],["quem","compr"]]},"Desperdício":{"tipo":"É um jeito de gastar.","nudge":"Pense: usar mais do que precisa e jogar fora.","sets":[["desperdic"],["gast","toa"]]},"Banco":{"tipo":"É um lugar.","nudge":"Pense: onde as pessoas guardam dinheiro numa conta?","sets":[["banc"],["agenci"]]},"Investimento":{"tipo":"É um jeito de usar o dinheiro guardado.","nudge":"Pense: colocar o dinheiro num lugar para ele crescer com o tempo.","sets":[["invest"],["aplic","dinheiro"]]},"Campanha solidária":{"tipo":"É uma ação em grupo.","nudge":"Pense: a escola junta agasalhos para quem precisa.","sets":[["campanh"],["arrecad"],["solidari"]]},"Imposto":{"tipo":"É um pagamento que todos fazem.","nudge":"Pense: o dinheiro que vai para o governo cuidar da escola e do posto.","sets":[["impost"],["tribut"]]},"Cashback":{"tipo":"É um tipo de vantagem na compra.","nudge":"Pense: parte do dinheiro que você gastou volta para você.","sets":[["cashback"],["cash","back"],["dinheiro","volta"]]},"Sócio":{"tipo":"É uma pessoa num negócio.","nudge":"Pense: quem divide o negócio com você.","sets":[["socio"],["socia"],["sociedad"]]},"Vaquinha online":{"tipo":"É um jeito de ajudar.","nudge":"Pense: juntar doações pela internet.","sets":[["vaquinh","online"],["vaquinh","internet"],["vaquinh","virtual"],["crowdfund"],["doac","online"],["doac","internet"]]}});
/* Lote 6 de cartas novas do jogo digital: 3 de 5–7, 4 de 8–12, 3 de 13+ — 100 cartas (16/11/2026) */
Object.assign(EXTRA,{"Ajudar em casa":{"tipo":"É algo que se faz em família.","nudge":"Pense: pôr a mesa e arrumar a cama, sem ganhar nada por isso.","sets":[["ajud","casa"],["tarefa","casa"],["arrum","casa"]]},"Profissão":{"tipo":"É algo que a pessoa escolhe para a vida.","nudge":"Pense: padeira, médico e motorista são exemplos de quê?","sets":[["profiss"]]},"Caixa eletrônico":{"tipo":"É uma máquina.","nudge":"Pense: a máquina do banco que entrega dinheiro com senha.","sets":[["caixa","eletron"],["caixa","banco"],["maquina","banco"]]},"Preço de venda":{"tipo":"É um valor de dinheiro.","nudge":"Pense: quanto você vai cobrar de quem compra.","sets":[["preco","venda"],["quanto","cobr"],["valor","venda"],["preco","vend"]]},"Gorjeta":{"tipo":"É um dinheiro a mais.","nudge":"Pense: o que se dá para agradecer um bom atendimento.","sets":[["gorjet"],["taxa","servico"]]},"Feira de trocas":{"tipo":"É um encontro.","nudge":"Pense: cada um leva o que não usa e volta com outra coisa, sem dinheiro.","sets":[["trocar"],["trocas"],["escamb"]]},"Conta bancária":{"tipo":"É algo que se abre num banco.","nudge":"Pense: onde fica o seu dinheiro no banco, com número e saldo.","sets":[["conta","banc"],["conta","corrent"],["conta","digital"]]},"Entrevista de emprego":{"tipo":"É uma conversa.","nudge":"Pense: a conversa antes de conseguir a vaga.","sets":[["entrevist"],["process","seletiv"]]},"Carteira de trabalho":{"tipo":"É um documento.","nudge":"Pense: o documento que registra o emprego com direitos.","sets":[["carteira","trabalh"],["carteira","assinad"],["ctps"],["registr","carteira"]]},"Fiador":{"tipo":"É uma pessoa que dá garantia.","nudge":"Pense: quem assina junto no aluguel e paga se o outro não pagar.","sets":[["fiador"],["fianc"],["avalist"]]}});
