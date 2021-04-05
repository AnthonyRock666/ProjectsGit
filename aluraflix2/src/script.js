function adicionarFilme() {
 var campoFilmePredileto = document.querySelector ('#filme')
 var filmePredileto = campoFilmePredileto.value
 if (filmePredileto.endsWith('.jpg')){
   listarFilmesNaTela (filmePredileto)
 } else {
   alert ('A imagem não existe!')
 }
  campoFilmePredileto.value = ''
}

function listarFilmesNaTela (filme) {
  var listaFilmes = document.querySelector ('#listaFilmes')
  var elementoFilme = '<img src= ' + filme + '>'
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}