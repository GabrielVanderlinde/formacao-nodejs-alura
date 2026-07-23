const pessoas = [
  { nome: "Ana", idade: 17 },

  { nome: "Carlos", idade: 22 },

  { nome: "Mariana", idade: 15 },
];

for (let p of pessoas) {
  if (p.idade >= 18) {
    console.log(`${p.nome} é maior de idade.`);
  }
}
