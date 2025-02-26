let a = parseInt(prompt("Digite um número: "));
let b = parseInt(prompt("Digite outro número: "));
let operacacao = prompt("Digite a operação: ");

function calculadora(a, b, operacacao) {
  if (operacacao === "+") {
    console.log(a + b);
  } else if (operacacao === "-") {
    console.log(a - b);
  } else if (operacacao === "*") {
    console.log(a * b);
  } else if (operacacao === "/") {
    console.log(a / b);
  } else if (operacacao === "%") {
    console.log(a % b);
  }
}
calculadora(a, b, operacacao);
