const idade = 17;

// Condicional if...else
if (idade >= 18) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}

// entre 9 e 10: excelent
// entre 7 e 8: bom
// entre 5 e 6: médio
// entre 0 e 4: ruim

const notaDoAluno = 8;

if (notaDoAluno >= 9 && notaDoAluno <= 10) {
  console.log("Excelente");
} else if (notaDoAluno >= 7 && notaDoAluno <= 8) {
  console.log("Bom");
} else if (notaDoAluno >= 5 && notaDoAluno <= 6) {
  console.log("Médio");
} else if (notaDoAluno >= 0 && notaDoAluno <= 4) {
  console.log("Ruim");
}
