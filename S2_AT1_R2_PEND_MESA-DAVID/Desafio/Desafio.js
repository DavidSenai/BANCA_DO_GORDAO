let n1 = 0;
let n2 = 1;
let soma = 0;
let numero = parseFloat(prompt("digite o numero: "));

function Fabonnaci(numero) {
  for (i = 0; i <= numero; i++) {
    soma = n1 + n2;
    n1 = n2;
    n2 = soma;

    if (soma <= numero) {
      console.log(soma);
    }
  }
}
Fabonnaci(numero);
