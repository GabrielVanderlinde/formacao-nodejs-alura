let precos = [100, 200, 300];

let comDesconto = precos.map(function (preco) {
  return preco * 0.9;
});

console.log("Preços com 10% de desconto:", comDesconto);
