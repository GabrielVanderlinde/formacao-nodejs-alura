const frutas = ["Maça", "Melancia", "Kiwi"];

console.log("Antes: ");
for (fruta of frutas) {
  console.log(fruta);
}

//--
console.log("\nDepois: ");
frutas.push("Bergamota");
frutas.shift(frutas[0]);

for (fruta of frutas) {
  console.log(fruta);
}
