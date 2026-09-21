const variavelNumerica = 15;
const variavelString = 'Esta é uma String';

const numericaConvertida = String(variavelNumerica);
const stringConvertida = Number(variavelString);

console.log(
  'Variável numérica convertida para string:',
  typeof numericaConvertida,
);
console.log(
  'Variável string convertida para numérica:',
  typeof stringConvertida,
);
