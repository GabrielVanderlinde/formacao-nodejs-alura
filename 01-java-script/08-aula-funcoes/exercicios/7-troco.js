function troco(valorPago, valorCompra) {
  let valorTroco = valorPago - valorCompra;
  return valorTroco;
}

let resultadoTroco = troco(50, 30);
console.log("O total de troco é: R$", resultadoTroco);
