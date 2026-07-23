// estrutura laco de repeticao FOR

for (let i = 0; i <= 5; i++) {
  console.log("Número Atual: ", i);
}

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log("Número par encontrado: ", i);
  }
}

for (let i = 0; i <= 15; i++) {
  if (i % 2 > 0) {
    console.log("Número ímpar encontrado: ", i);
  }
}

const palavra = "calopsita";

for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
}
