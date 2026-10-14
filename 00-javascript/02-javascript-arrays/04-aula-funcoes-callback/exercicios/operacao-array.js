function executaOperacaoEmArray(array, funcaoCallback) {
  return array.map(funcaoCallback); // Executa a função de callback em cada elemento do array
}

function dobraNumero(num) {
  return num * 2; //Função de exemplo para dobra o número
}

const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log(listaNumerosDobrados); // Saída: [2, 4, 6]
