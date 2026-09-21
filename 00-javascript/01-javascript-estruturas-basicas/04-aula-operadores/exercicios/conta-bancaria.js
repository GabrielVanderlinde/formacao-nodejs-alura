let saldo = 1000;
let saque; // Insira Valores
let deposito; // Insira Valores

let operacao;

if (saque > 0 && saque <= saldo) {
  operacao = saldo - saque;
  console.log('Saldo antes de saque:', saldo);
  console.log('Saldo após saque:', operacao);
} else if (deposito >= 0.1) {
  operacao = saldo + deposito;
  console.log('Saldo antes do depósito:', saldo);
  console.log('Saldo após depósito:', operacao);
} else if (saque == null && deposito == null) {
  console.log('Saldo:', saldo);
} else {
  console.log('Insira Dados Válidos!');
}
