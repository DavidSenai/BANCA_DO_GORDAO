let numero = parseInt(prompt("digite um número: "));
let num = 1;

function ehNumeroPerfeito(numero) {
  if (numero <= 0) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      num += i;
      if (i !== numero / i) {
        num += numero / i;
      }
    }
  }
  return num === numero;
}
console.log(ehNumeroPerfeito(numero));
