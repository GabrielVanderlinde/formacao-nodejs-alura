const valor = 50;
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente';
console.log(texto); // retorna ‘valor suficiente’

let matriculaAtiva = true;

function verificaMatriculaAtiva() {
  if (matriculaAtiva === true) {
    return 'matrícula ativa no sistema';
  } else {
    return 'matrícula não está ativa';
  }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'
