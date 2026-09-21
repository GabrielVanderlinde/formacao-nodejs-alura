const validacaoPalindroma = (palavra) => {
  const palavraInvertida = palavra.split('').reverse().join('');
  return palavra.toLowerCase() === palavraInvertida.toLowerCase();
};

console.log(validacaoPalindroma('arara')); // true
console.log(validacaoPalindroma('Tartaruga')); // false
