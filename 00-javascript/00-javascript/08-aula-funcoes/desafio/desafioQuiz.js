const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Bem vindo ao Quiz de Corrida!");
console.log("Responde com a letra correta: a, b ou c\n");

let acertos = 0;
leitor.question(
  "(1) Qual a distância preferivel para um competidor iniciante realizar sua primeira prova?\n(a)10km\n(b)7km\n(c)5km\nDigite: ",
  (resposta1) => {
    if (resposta1 === "c") {
      console.log("Resposta correta! 5km!");
      acertos++;
    } else {
      console.log("Resposta Incorreta!");
    }

    leitor.question(
      "(2) Qual o material amplamente utilizado para placas nos tênis de corrida?\n(a) Plástico\n(b)Ar\n(c)Carbono\nDigite: ",
      (resposta2) => {
        if (resposta2 === "c") {
          console.log("Resposta correta! Carbono!");
          acertos++;
        } else {
          console.log("Resposta Incorreta!");
        }

        leitor.question(
          "(3) Qual o nome da principal maratona ocorrida em Porto Alegre-RS?\n(a) Maratona Internacional do Gaúcho\n(b)Maratona do Mate\n(c)Maratona Internacional de Porto Alegre\nDigite: ",
          (resposta3) => {
            if (resposta3 === "c") {
              console.log(
                "Resposta correta! Maratona Internacional de Porto Alegre!",
              );
              acertos++;
            } else {
              console.log("Resposta Incorreta!");
            }
            console.log("Você acertou", acertos, "perguntas");
            leitor.close();
          },
        );
      },
    );
  },
);
