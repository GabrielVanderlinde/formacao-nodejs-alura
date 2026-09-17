const pessoa = {
  nome: "Ana",
  idade: 26,
  temCNH: true,
};

pessoa.sobrenome = "Silva";

// console.log("Nome: ", pessoa.nome);
// console.log("Sobrenome: ", pessoa.sobrenome);

const livro = {
  titulo: "O Hobbit",
  //  autor: "J. R. R. Tolkien",
  paginas: 310,
};

livro.publicado = true;
livro.idiomas = ["Ingles", "Portugues", "Espanhol"];

livro.idiomas.push("Mandarim");
livro.idiomas.push("Frances");

console.log("Livro antes:", livro);

delete livro.paginas;

console.log("Livro depois:", livro);

console.log("Autor do livro:", livro["autor"]);
console.log("Editora:", livro["editora"]);

const autor = {
  nome: "J R R Tolkien",
  nacionalidade: "Britanico",
  idade: 98,
  livros: [livro],
};

console.log("Autor", autor);

livro.autor = autor;

console.log(livro);

livro.autor.nacionalidade;
