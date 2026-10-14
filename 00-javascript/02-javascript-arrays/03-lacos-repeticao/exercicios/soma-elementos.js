const numeros = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2];

function soma(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log('A soma total dos números é:', soma(numeros));
