function filtrarNumerosPares(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const numArray = [1, 2, 3, 4, 5, 6];
const numerosPares = filtrarNumerosPares(numArray);
console.log(numerosPares);
