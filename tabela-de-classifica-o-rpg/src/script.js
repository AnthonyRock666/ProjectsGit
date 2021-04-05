var sheldon = {
  nome: 'Sheldon',
  vitorias: 4,
  empates: 5,
  derrotas: 1,
  pontos: 17
}

var leonard = {
  nome: 'Leonard',
  vitorias: 5,
  empates: 4,
  derrotas: 2,
  pontos: 19   
}


sheldon.points = calculaPontos(sheldon)
leonard.points = calculaPontos(leonard)

function calculaPontos(jogador){
  var points = (jogador.vitorias * 3) + jogador.empates
  return points
}

var jogadores = [sheldon, leonard]

exibirPlayersNaTela(jogadores)

function exibirPlayersNaTela(jogadores){
  var html = ''
  for (var i=0; i < jogadores.length; i++){
    html += '<tr><td>' + jogadores[i].nome + '</td>'
    html += '<td>' + jogadores[i].vitorias + '</td>'
    html += '<td>' + jogadores[i].empates + '</td>'
    html += '<td>' + jogadores[i].derrotas + '</td>'
    html += '<td>' + jogadores[i].pontos + '</td>'
    html += '<td><button onClick="adicionarVitoria('+ i + ')">Vitória</button></td>'
    html += '<td><button onClick="adicionarEmpate('+ i + ')">Empate</button></td>'
    html += '<td><button onClick="adicionarDerrota('+ i + ')">Derrota</button></td>'
  }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
 var player = jogadores[i]
 player.vitorias++
 player.pontos = calculaPontos(player)
 exibirPlayersNaTela(jogadores)
}

function adicionarEmpate(i){
  var player = jogadores[i]
  player.empates++
  player.pontos = calculaPontos(player)
 exibirPlayersNaTela(jogadores)
}

function adicionarDerrota(i){
  var player = jogadores[i]
  player.derrotas++
  exibirPlayersNaTela(jogadores)
}