let camila1 = {
  nome: "Camila",
  idade: 29,
  profissao: "Desenvolvedora",
};

let camila2 = { ...camila1 };

camila2.idade = 30;

console.log(camila1);
console.log(camila2);

camila1 = {
  ...camila2,
  profissao: "Desenvolvedora Senior",
  possuiCNH: true,
};

const { nome, ...resto } = camila1;

console.log(nome);
console.log(resto);
