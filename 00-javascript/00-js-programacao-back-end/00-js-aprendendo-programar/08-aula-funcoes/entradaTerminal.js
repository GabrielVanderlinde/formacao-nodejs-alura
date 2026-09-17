const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Qual é o seu nome? ", (nome) => {
  console.log("Olá,", nome);
  console.log("Boas vindas ao nosso sistema!");

  leitor.question("Qual a sua idade? ", (idade) => {
    if (idade >= 18) {
      console.log("Você pode tirar sua CNH");
    } else {
      console.log("Você NÃO pode tirar sua CNH");
    }
  });

  leitor.close;
});
