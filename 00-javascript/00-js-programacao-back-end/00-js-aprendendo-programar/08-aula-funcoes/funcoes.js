// function saudacao(nome) {
//  // nome é um parametro da função saudacao
//  console.log("Olá,", nome);
// }

// arrow function

const saudacao = (nome) => {
  console.log("Vida longa e prospéra,", nome);
};

// const saudacao = (nome) => console.log("Olá", nome);

saudacao("Gabriel"); // Gabriel é o 'Argumento'
saudacao("Ana");
saudacao("Júlia");

//-----

// function calcularDobro(numero) {
//  return numero * 2;
// }

const calcularDobroDeUm = (numero) => {
  return numero * 2;
};

numeroDobrado = calcularDobroDeUm(20);

console.log("O dobro é: ", numeroDobrado);
