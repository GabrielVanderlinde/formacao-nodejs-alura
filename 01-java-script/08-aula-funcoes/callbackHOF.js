// HOF - Higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

function soma(num1, num2) {
  return num1 + num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

const resultadoSoma = calcular(5, 5, soma); // soma é um callback
const resultadoSubtracao = calcular(5, 5, subtracao); // subtração é um callback
const resultadoDivisao = calcular(5, 5, divisao); // divisão é um callback
const resultadoMultiplicacao = calcular(5, 5, multiplicacao); // multiplicação é um callback

console.log("O resultado para o cálculo de soma é: ", resultadoSoma);
console.log("O resultado para o cálculo de subtração é: ", resultadoSubtracao);
console.log("O resultado para o cálculo de divisão é: ", resultadoDivisao);
console.log("O resultado para o cálculo de multiplicação é: ", resultadoMultiplicacao);
