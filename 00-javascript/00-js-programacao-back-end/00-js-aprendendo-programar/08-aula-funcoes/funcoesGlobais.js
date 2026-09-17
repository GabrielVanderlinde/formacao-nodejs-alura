// Função Global 01

function saudacao() {
  console.log("E aí, beleza?");
}

// setTimeout(saudacao, 2000); //ms

// Função Global 02

let contador = 0;

const id = setInterval(() => {
  contador++;
  console.log("Tempo decorrido:", contador);
  if (contador == 10) {
    clearInterval(id);
  }
}, 1000);
