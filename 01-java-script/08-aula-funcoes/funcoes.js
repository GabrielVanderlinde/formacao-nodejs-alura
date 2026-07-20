function saudacao(nome) {
  // nome é um parametro da função saudacao
  console.log("Olá,", nome);
}

saudacao("Gabriel"); // Gabriel é o 'Argumento'
saudacao("Ana");
saudacao("Júlia");

//-----

function calcularDobro(numero) {
  return numero * 2;
}

const numeroDobrado = calcularDobro(5);

console.log("O dobro é: ", numeroDobrado);
