 var numSecreto = parseInt (Math.random() * 20)
 var tentativa = 4

 while (tentativa > 0) {
   var chute = parseInt(prompt('Insira um número de 0 a 20:')) 
   
   if (numSecreto == chute) {
     alert ('Você acertou!!!')
     break
   } else if (chute > numSecreto) {
     alert ('Tente novamente... Pois o número secreto é menor...')
     tentativa = tentativa - 1
   } else if (chute < numSecreto) {
     alert ('Tente outra vez... O número secreto é maior...')
     tentativa = tentativa - 1
   }
 }

if (chute != numSecreto) {
  alert ('Aaaa... Você não tem mais tentativas... Mas o número secreto era: ' + numSecreto)
}