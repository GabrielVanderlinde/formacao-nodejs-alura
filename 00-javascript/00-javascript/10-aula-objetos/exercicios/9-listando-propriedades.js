const pessoas = [
  { nome: "Ana", idade: 17 },

  { nome: "Carlos", idade: 22 },

  { nome: "Mariana", idade: 15 },
];

for (let chave in pessoas) {
  console.log(`${chave}: ${pessoas[chave]}`);
}
