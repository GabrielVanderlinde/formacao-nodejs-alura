//contar quantos numeros pares e quantos numeros impares nos temos entre 0 e 100

let par = 0;
let impar = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    par += 1;
  } else {
    impar += 1;
  }
}

console.log("A quantidade de números pares é: ", par);
console.log("A quantidade de números impares é: ", impar);
