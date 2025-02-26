function advivinharNumero() {
  let numeroAleatorio = parseInt(Math.random() * 10) + 1;
  let valor = 0;
  console.log(numeroAleatorio);

  while (numeroAleatorio !== valor) {
    valor = parseInt(prompt("DIGITE UM NUMERO DE UM A DEZ:"));
  }

  console.log("Você acertou o número!");
}

advivinharNumero();
