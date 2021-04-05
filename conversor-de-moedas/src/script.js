var valorEmDolarTexto = prompt('Qual valor em dólar você deseja converter?')

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.51
var valorEmRealFixado = valorEmReal.toFixed(2)

alert (valorEmRealFixado)

// Aula 1 concluída