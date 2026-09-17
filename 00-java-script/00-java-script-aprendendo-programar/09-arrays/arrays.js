const frutas = ["Uva", "Banana", "Maça", "Kiwi"];

// console.log(frutas);
// console.log("Primeira fruta: ", frutas[0]);

// console.log("Total de frutas:", frutas.length);

// frutas.push("Melancia");

// console.log("Total de frutas, depois da melancia:", frutas.length);

// console.log("Última fruta:", frutas[frutas.length - 1]);

frutas.splice(2, 1);

console.log("Depois de remover: ", frutas);

for (let i = 0; i <= frutas.length; i++) {
  console.log("indice: ", i);
  console.log(frutas[i]);
}

console.log("Usando For Each:");

frutas.forEach((valor, indice) => {
  console.log("índice: ", indice, valor);
});

console.log("Usando for of: ");

for (const fruta of frutas) {
  console.log("fruta da vez: ", fruta);
}
