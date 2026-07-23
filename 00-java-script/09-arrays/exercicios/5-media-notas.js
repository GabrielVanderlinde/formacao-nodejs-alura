let notas = [7, 8, 6, 9];

let somaNotas = 0;

for (let nota of notas) {
  somaNotas += nota;
}

let media = somaNotas / notas.length;

if (media >= 7) {
  console.log("Aprovado com média: " + media);
} else {
  console.log("Reprovado com média: " + media);
}
