let carrinho = [50, 30, 20];
let total = 0;

for (let preco of carrinho) {
  total += preco;
}

let totalComDesconto = total * 0.8;

console.log("Total com desconto de 20%: R$ " + totalComDesconto);
