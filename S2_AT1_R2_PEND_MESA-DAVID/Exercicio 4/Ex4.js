let valor = parseInt(prompt("DIGITE O NUMERO PARA A CONTAGEM:"));
function contagemRegressiva(valor) {
  for (let i = valor; i >= 0; i--) {
    console.log(i);
  }
}
contagemRegressiva(valor);
