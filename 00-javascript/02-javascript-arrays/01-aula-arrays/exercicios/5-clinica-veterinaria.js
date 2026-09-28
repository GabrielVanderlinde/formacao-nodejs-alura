let clinica = [];

clinica = ['cachorro', 'papagaio', 'hamster'];

while (clinica.length > 0) {
  console.log('Animal a ser atendido:', clinica.shift());
}

console.log('Não há mais animais a serem atendidos!');

// Por que funciona?
// * clinica.length: verifica quantos animais restam.
// * clinica.shift(): remove e retorna o primeiro animal da fila.
// * while: continua enquanto houver animais.
