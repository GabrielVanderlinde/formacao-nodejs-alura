const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acum, atual) => atual + acum, 0); // 0 se refere ao valor inicial do acumulador - no caso 0

console.log(soma);
