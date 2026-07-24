const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  verificaPalavrasDuplicadas(texto);
});

// criar um array de palavras
//contar as ocorrencias
// montar um objeto com o resultado

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  //   objeto[propiedade] = valor;

  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });

  console.log(resultado);
}
