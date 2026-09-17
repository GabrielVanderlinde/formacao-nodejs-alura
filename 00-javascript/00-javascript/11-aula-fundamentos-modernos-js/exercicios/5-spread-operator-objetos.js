const dados1 = { nome: "Joana" };
const dados2 = { idade: 32 };

const perfil = { ...dados1, ...dados2 };

console.log(perfil);
