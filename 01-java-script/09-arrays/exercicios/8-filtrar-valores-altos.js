let idades = [12, 18, 25, 16, 30];

let maiores = idades.filter(function (idade) {
  return idade >= 18;
});

console.log("Maiores de idade:", maiores);
