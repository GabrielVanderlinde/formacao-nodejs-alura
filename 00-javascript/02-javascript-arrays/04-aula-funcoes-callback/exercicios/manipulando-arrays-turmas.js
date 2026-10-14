const nomesTurmaA = ['João Silva', 'Maria Santos', 'Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = todasAsTurmas.find((nome) => nome === 'João Silva');

if (alunoProcurado) {
  console.log('Aluno encontrado:', alunoProcurado);
} else {
  console.log('Aluno não encontrado.');
}
