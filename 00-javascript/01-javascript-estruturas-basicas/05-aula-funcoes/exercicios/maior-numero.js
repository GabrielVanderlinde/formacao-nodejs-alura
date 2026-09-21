function encontraMaiorValor(num1, num2, num3) {
  let maior = num1; // Assumindo inicialmente que num1 é o maior

  if (num2 > maior) {
    maior = num2;
  }

  if (num3 > maior) {
    maior = num3;
  }

  return maior;
}

console.log(encontraMaiorValor(12, 56, 32)); // 56
