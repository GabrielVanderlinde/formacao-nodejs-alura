function fazerPergunta(pergunta, respostaCorreta) {
  let respostaUsuario = respostaCorreta;

  if (respostaUsuario === respostaCorreta) {
    console.log("Resposta correta!");
  } else {
    console.log("Reposta errada!");
  }
}

fazerPergunta("Qual a capital do Brasil?", "Brasília");
