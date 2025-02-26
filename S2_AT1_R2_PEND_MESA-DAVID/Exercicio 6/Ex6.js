let numero = parseFloat(prompt("digite um número:"));
let soma = 0;

function somarAteNegativo(numero) {
  while (numero >= 0) {
    soma = soma + numero;

    numero = parseFloat(prompt("digite um número:"));
  }

  console.log("Você digitou um número negativo!");
  console.log("O resultado da soma é:", soma);
  console.log("------- SOMA FINALIZADA! -------");
}
somarAteNegativo(numero);
