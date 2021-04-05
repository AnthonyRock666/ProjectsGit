var cardUm = {
  nome: 'Mago Negro',             
  imagem:'https://www.socialdub.com/groupspictures/7848/7848808021603031784.jpg?x2',
  atributo: {
  Ataque: 2500,
  Defesa: 2100,
  Nivelidade: 7
  }
}

var cardDois = {
  nome: 'Dragão Branco de Olhos Azuis',
  imagem: 'https://i0.wp.com/www.solosagrado.com.br/blog/site/wp-content/uploads/2015/11/voce-conhece-a-lenda-do-dragao-branco-de-olhos-azuis-795-e1447693166475.jpg?fit=640%2C499&ssl=1',
  atributo: {
  Ataque: 3000,
  Defesa: 2500,
  Nivelidade: 8
  }
}

var cardTrês = {
  nome: 'Dragão Negro de Olhos Vermelhos',
  imagem: 'https://www.socialdub.com/groupspictures/7888/7888808021751257996.jpg?x2',
  atributo: {
  Ataque: 2400,
  Defesa: 2000,
  Nivelidade: 7
  }
}

var cardQuatro = {
  nome: 'Obelisco, O Atormentador',
  imagem: 'https://i.ytimg.com/vi/vHSFCYGPqts/hqdefault.jpg',
  atributo: {
  Ataque: 4000,
  Defesa: 4000,
  Nivelidade: 10
  }
}

var cardCinco = {
  nome: 'Slifer, O Dragão Celeste',
  imagem: 'http://pm1.narvii.com/6819/47706d024c69a61659e4bf06c52bc57f4ed07898v2_00.jpg',
  atributo: {
  Ataque: 8500,
  Defesa: 8500,
  Nivelidade: 10
  }
}

var cardSeis = {
  nome: 'Dragão Alado de Rá',
  imagem: 'https://i.pinimg.com/originals/76/fa/56/76fa5601e35982744335cf838ee5cfb7.jpg',
  atributo: {
  Ataque: 10500,
  Defesa: 10500,
  Nivelidade: 10
  }
}

var cardSete = {
  nome: 'Imperador Arquidemônio',
  imagem: 'https://i.pinimg.com/474x/af/33/65/af3365ba96d3600ef677e9c4dc05ed44.jpg',
  atributo: {
  Ataque: 3000,
  Defesa: 2000,
  Nivelidade: 8
  }
}

var cardOito = {
  nome: 'Guerreiro Fóssil Rei Caveira',
  imagem: 'https://static.wikia.nocookie.net/yugioh/images/f/f4/PaleozoicFossilKnightSkullking-GX04-EN-VG.jpg/revision/latest/top-crop/width/450/height/450?cb=20090926130305',
  atributo: {
  Ataque: 2800,
  Defesa: 1300,
  Nivelidade: 8
  }
}

var cardMaquina
var cardJogador
var cards = [cardUm, cardDois, cardTrês, cardQuatro, cardCinco, cardSeis, cardSete, cardOito]
          // 0          1          2         3           4          5         6         7

var pontosPlayer = 0
var pontosMaquina = 0

updatePlacar()
updateQuantidadeDeCards()

function updateQuantidadeDeCards(){
  divQuantidadeCards = document.getElementById('quantidade-cartas')
  var html = 'QUANTIDADE DE CARDS NO GAME: ' + cards.length
  
  divQuantidadeCards.innerHTML = html
}

function updatePlacar(){
  var divPlacar = document.getElementById('placar')
  var html = 'JOGADOR ' + pontosPlayer + '/' + pontosMaquina + ' MÁQUINA'
  
  divPlacar.innerHTML = html
  
  }

function sortearCarta(){
  numeroCardMaquina = parseInt(Math.random() * cards.length)
  cardMaquina = cards [numeroCardMaquina]
  cards.splice(numeroCardMaquina, 1)
  
  var numeroCardJogador = parseInt(Math.random() * cards.length)
  cardJogador = cards [numeroCardJogador]
  cards.splice(numeroCardJogador, )
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  
  mostraCartaJogador()
}

function mostraCartaJogador(){
  var divCartaJogador = document.getElementById ('carta-jogador')
  var moldura =  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage=`url(${cardJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cardJogador.nome}</p>`
  var opçõesTexto=""
  
  for (var atributo in cardJogador.atributo){
   opçõesTexto += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo + ': ' + cardJogador.atributo[atributo] + '<br>'
  }
  
  var html = "<div id='opcoes' class='carta-status'>"
  divCartaJogador.innerHTML = moldura+nome+html+opçõesTexto+'</div>'
}

function abstraiAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i=0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function jogar() {
 var divResult = document.getElementById("resultado")
 var atributoSelecionado = abstraiAtributoSelecionado()

 if (cardJogador.atributo[atributoSelecionado] > cardMaquina.atributo[atributoSelecionado]) {
   htmlResult = '<p class="resultado-final">Você venceu!!!</p>'
   pontosPlayer++
 } else if (cardJogador.atributo[atributoSelecionado] < cardMaquina.atributo[atributoSelecionado]) {
   htmlResult = '<p class="resultado-final">Você perdeu!!!</p>'
   pontosMaquina++
 } else {
   htmlResult = '<p class="resultado-final">Você empatou!!!</p>'
 }
  
  if (cards.length == 0){
    alert('Game-Over!!!')
    if(pontosPlayer > pontosMaquina){
      htmlResult = '<p class="resultado-final">You wins!!!</p>'
    } else if (pontosMaquina > pontosPlayer){
      htmlResult = '<p class="resultado-final">You lose!!!</p>'
    } else {
      htmlResult = '<p class="resultado-final">Empatoou!!!</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }
  
  divResult.innerHTML = htmlResult
  document.getElementById('btnJogar').disabled = true
  
  updatePlacar()
  updateQuantidadeDeCards()
  mostraCartaMaquina()
}

function mostraCartaMaquina(){
  var divCartaMaquina = document.getElementById ('carta-maquina')
  var moldura =  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage=`url(${cardMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cardMaquina.nome}</p>`
  var opçõesTexto=""
  
  for (var atributo in cardMaquina.atributo){
   opçõesTexto += '<p type="text" name="atributo" value="' + atributo + '">' + atributo + ': ' + cardMaquina.atributo[atributo] + '<br>'
  }
  
  var html = "<div id='opcoes' class='carta-status'>"
  divCartaMaquina.innerHTML = moldura+nome+html+opçõesTexto+'</div>'
}

function proximaRodada(){
  var divCards = document.getElementById('cartas')
  
  divCards.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResult = document.getElementById('resultado')
  
  divResult.innerHTML = ''
}