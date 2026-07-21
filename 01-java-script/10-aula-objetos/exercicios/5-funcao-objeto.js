const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
};

function apresentarPessoa(p) {
  return (
    "Olá! Meu nome é " +
    p.nome +
    ", tenho " +
    p.idade +
    " anos e sou " +
    p.profissao +
    "."
  );
}

console.log(apresentarPessoa(pessoa));
