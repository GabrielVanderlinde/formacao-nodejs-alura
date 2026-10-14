const notas = [10, 9.5, 8, 7, 6];

// FUNCÃO MAP

const notasAtualizadasMap = notas.map(function (nota) {
  return nota + 1;
});

console.log(notasAtualizadasMap);

// FUNÇÃO ARROW

const notasAtualizadasArrow = notas.map((nota) => nota + 1);
console.log(notasAtualizadasArrow);

// FUNÇÃO ARROW COM OPERADOR TERNÁRIO - Aumenta cada nota em 1, sem deixar passar de 10.

const notasAtualizadasTern = notas.map((nota) =>
  notas + 1 >= 10 ? 10 : nota + 1,
);
console.log(notasAtualizadasTern);
