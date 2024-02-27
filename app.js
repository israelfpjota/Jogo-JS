alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000; 
let numeroSecreto = parseInt (Math.random () * numeroMaximo + 1) ;
console.log (numeroSecreto);
let chute ;
let tentativas = 1;

// enquanto o chute não é igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número de 1 a ${numeroMaximo}`);
    // se chute for igual ao número secreto
if (numeroSecreto == chute) {
    break;
} else {
    if (numeroSecreto > chute) {
        alert ( `O número secreto é maior que ${chute} ` );
    } else {
        alert (`o número secreto é menor que ${chute}`); 
    }
   // tentativas = tentativas + 1;
    tentativas++;
}

}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'tentativa';
alert (`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
//if (tentativas > 1) {
//    alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
