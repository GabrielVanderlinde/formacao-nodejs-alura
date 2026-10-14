const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function imprimeIndiceElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Índice: ${i}, Elemento: ${arr[i]}`);
  }
}

imprimeIndiceElemento(array);
