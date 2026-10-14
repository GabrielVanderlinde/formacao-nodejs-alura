const valores = [10, 20, 30, 40, 50];
const soma = valores.reduce(
  (acumulador, valorTotal) => acumulador + valorTotal,
  0,
);

console.log('Soma dos valores:', soma);
