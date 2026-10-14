// Atualizar Lista com Splice ()

const listaEstudantes = [
  'João',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Rodrigo',
  'Leo',
];

/*
listaEstudantes.splice(1, 2); // Começa do Índice 1 e se alimenta de dois itens

console.log(listaEstudantes);
*/

//=== Incrementto com Splice

listaEstudantes.splice(1, 2, 'Rodrigo');

console.log(listaEstudantes);
