let nota = parseInt(prompt("DIGITE SUA NOTA: "));

function classificarNota(nota) {
  if (nota === 10) {
    console.log("EXCELENTE!!");
  } else if (nota === 9 || nota === 8) {
    console.log("ÓTIMO!!");
  } else if (nota === 6 || nota === 7) {
    console.log("BOM!!");
  } else if (nota === 4 || nota === 5) {
    console.log("REGULAR!!");
  } else if (nota === 0 || nota === 1 || nota === 2 || nota === 3) {
    console.log("RUIM!!");
  } else {
    console.log("nota inválida!");
  }
}
classificarNota(nota);
