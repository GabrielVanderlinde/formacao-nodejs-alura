const estados = [
  'Rio Grande do Sul',
  'Santa Catarina',
  'Paraná',
  'São Paulo',
  'Rio de Janeiro',
];

function imprimir(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Índice: ${i}, Elemento: ${arr[i]}`);
  }
}

imprimir(estados);
