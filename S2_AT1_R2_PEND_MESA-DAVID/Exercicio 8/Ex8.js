let n = parseInt(prompt("Digite um número: "));

function numerosPares(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
numerosPares(n);
