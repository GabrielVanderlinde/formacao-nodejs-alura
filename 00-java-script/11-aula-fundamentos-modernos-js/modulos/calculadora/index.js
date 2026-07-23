// const readline = require("readline");
import { createInterface } from "readline";
import { soma, subtracao } from "./operacoesMatematicas.js";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite o primeiro número:\n>", (num1) => {
  leitor.question(
    "Digite a operação::\n+: soma\n-: subtração\n",
    (operacao) => {
      leitor.question("Digite o segundo número::\n>", (num2) => {
        const numero1 = Number(num1);
        const numero2 = Number(num2);

        let resultado = null;

        if (operacao == "+") {
          resultado = soma(numero1, numero2);
        } else if (operacao == "-") {
          resultado = subtracao(numero1, numero2);
        } else {
          console.log("Operação Inválida!");
        }

        if (resultado != null) {
          console.log("O resultado da operação é:", resultado);
        }

        leitor.close();
      });
    },
  );
});
