let tarefas = [
  "Estudar",
  "Lavar a louça",
  "Ir ao mercado",
  "Caminhar",
  "Dormir",
];
let concluida = [false, true, false, true, false];

let tarefasPendentes = tarefas.filter(function (tarefa, index) {
  return concluida[index] === false;
});

console.log("Tarefas pendentes:", tarefasPendentes);
