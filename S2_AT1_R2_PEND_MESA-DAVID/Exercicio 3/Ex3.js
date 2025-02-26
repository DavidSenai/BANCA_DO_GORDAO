let numero = parseInt(prompt("DIGITE UM NUMERO:"));

function ehPrimo(numero) {
  if (numero <= 1) return false;

  for (var divisor = 2; divisor < numero; divisor++)
    if (numero % divisor == 0) return false;
  return true;
}

console.log(ehPrimo(numero));
