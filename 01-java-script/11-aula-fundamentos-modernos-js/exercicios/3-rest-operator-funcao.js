function somarTudo(...numeros) {
  let soma;

  for (let i = 0; i <= numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

console.log(somarTudo(1, 2, 3, 4));
