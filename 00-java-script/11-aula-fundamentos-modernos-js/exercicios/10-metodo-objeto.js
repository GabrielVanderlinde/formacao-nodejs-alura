function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito por " + this.autor + ". ";
  };
}

const livro = new Livro("O Hobbit", "J. R. R. Tolkien");
console.log(livro.descrever());
