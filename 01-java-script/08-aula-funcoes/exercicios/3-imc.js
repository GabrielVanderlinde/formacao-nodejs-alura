function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

let resultadoIMC = calcularIMC(70, 1.75);
console.log("Seu IMC é: " + resultadoIMC);
