let n = parseInt(prompt("DIGITE UM NUMERO: "));
let soma = 0;

function somaAteN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    soma = soma + i;
  }

  console.log("O valor da soma é: ", soma);
  console.log(`O resultado da soma foi ${soma}`);
}

somaAteN(n);
