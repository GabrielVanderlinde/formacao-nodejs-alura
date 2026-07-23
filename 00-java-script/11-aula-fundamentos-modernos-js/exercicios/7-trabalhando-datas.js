const hoje = new Date();

const dia = hoje.getDate();

const mes = hoje.getMonth() + 1; // mês começa em 0

const ano = hoje.getFullYear();

console.log(`Hoje é ${dia}/${mes}/${ano}`);
