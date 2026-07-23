const numeroSecreto = 10;

for (i = 1; i <= 3; i++) {
  let numeroTentado;

  if (i == 1) {
    numeroTentado = 3;
  } else if (i == 2) {
    numeroTentado = 10;
  } else {
    numeroTentado = 3;
  }

  if (numeroTentado === numeroSecreto) {
    console.log("Acertou!", "tentativas:", i);
  } else {
    console.log("NÃO Acertou!");
  }
}


