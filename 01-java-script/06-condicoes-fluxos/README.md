# Aula 06 - Condições e Fluxos

## O que aprendemos?

Nesta aula, aprendemos:

- A utilizar `if`, `else if` e `else` para controlar o fluxo do código.
- O uso do operador ternário como alternativa mais concisa ao `if/else`.
- A compreender valores truthy e falsy em JavaScript.
- A aprofundar em casos específicos e menos óbvios de coerção truthy/falsy.
- A explorar múltiplas condições utilizando `switch`.
- A praticar a construção de condicionais através de uma lista de exercícios.
- Conteúdo complementar sobre assincronismo no JavaScript (ver abaixo).

## Pontos de atenção

- Valores falsy em JS: `false`, `0`, `""`, `null`, `undefined` e `NaN`. Todo o resto é truthy — 
  inclusive `"0"` (string) e `[]` (array vazio), o que costuma pegar quem vem de outras linguagens.
- `switch` usa comparação estrita (`===`) internamente, então cuidado com tipos diferentes.

## Complemento: Assincronismo no JavaScript

Conteúdo "para saber mais" dessa aula, introduzindo conceitos que serão aprofundados futuramente:

- O assincronismo permite ao JavaScript executar operações demoradas (rede, leitura/escrita) sem travar o restante do código, mesmo sendo uma linguagem de thread única.
- O **Event Loop** é o mecanismo central: operações assíncronas (como `setTimeout`) são delegadas à API do ambiente e, ao concluir, suas callbacks entram numa fila de tarefas. O Event Loop só as envia para a pilha de execução quando ela está livre.
- Existem três formas principais de lidar com assincronismo:
  - **Callbacks**: abordagem tradicional; em cadeias longas gera o chamado "callback hell".
  - **Promises**: possuem três estados (pendente, resolvida, rejeitada) e permitem encadeamento mais legível com `.then()`/`.catch()`.
  - **Async/Await**: açúcar sintático sobre Promises, permitindo escrever código assíncrono com aparência síncrona, tratando erros com `try/catch`.

### Exemplo — ordem de execução com `setTimeout`

```javascript
console.log('Início');

setTimeout(() => {
  console.log('Tarefa assíncrona concluída');
}, 1000);

console.log('Fim');

// Saída: Início -> Fim -> Tarefa assíncrona concluída
```

### Exemplo — Promise vs Async/Await

```javascript
// Usando Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dados obtidos');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Usando Async/Await
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
```

## Referências

- [Praticando JavaScript: condicionais - Alura](https://cursos.alura.com.br/course/praticando-javascript-condicionais)