const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) {
        console.error(erro);
        return;
    }
    console.log(texto);
});
