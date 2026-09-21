// Funçoes

function somar(a, b) {
  return a + b;
}

const resultado = somar(2, 2);
console.log(resultado);

// Parâmetros: a, b
// Argumentos: 2,2

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  }

  return 'Não se pode dividir um número por zero';
}

console.log(dividir(10, 2));
console.log(dividir(10, 0));
