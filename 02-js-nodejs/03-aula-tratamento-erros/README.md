# Aula 03 - Tratamento de Erros

## O que aprendemos?

Nesta aula, aprendemos:

- A identificar diferentes tipos de erros em JavaScript.
- O que é e como interpretar uma stack trace.
- A utilizar `throw`, `catch` e `try` para lançar e capturar erros.
- A praticar o tratamento de erros com blocos `try/catch`.
- O objeto `Error` nativo do JavaScript e suas propriedades.
- Estratégias para tratamento de erros em um projeto real.

## Pontos de atenção

- `throw` pode lançar qualquer valor (string, número, objeto), mas a boa prática é sempre lançar uma instância de `Error` (ou subclasse), pois ela carrega `message` e `stack` — informações essenciais para debugar.
- A stack trace mostra a sequência de chamadas de função até o ponto do erro; ler de cima para baixo mostra onde o erro ocorreu primeiro, e as linhas seguintes mostram quem chamou o quê até chegar ali.
- Um bloco `try/catch` só captura erros **síncronos** dentro dele; erros em callbacks assíncronos ou Promises não tratadas exigem abordagens específicas (`.catch()`, `try/catch` com `await`, ou listeners de erro).
- Capturar um erro genérico demais (`catch (e) {}` vazio) esconde problemas reais — sempre tratar ou ao menos logar o erro capturado.

## Referências

-
