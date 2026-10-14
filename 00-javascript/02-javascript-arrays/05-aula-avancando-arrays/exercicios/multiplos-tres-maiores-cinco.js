const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

function filtrarNumeros(arr) {
  return arr.filter((num) => num % 3 === 0 && num > 5);
}

const numerosFiltrados = filtrarNumeros(listaNumeros);
console.log(numerosFiltrados); // Saída: [6, 9, 12]
