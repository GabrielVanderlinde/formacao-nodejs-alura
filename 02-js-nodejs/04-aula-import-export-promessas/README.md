# Aula 04 - Import/Export e Promessas

## O que aprendemos?

Nesta aula, aprendemos:

- O que é programação assíncrona e sua importância para viabilizar processos complexos, como operações com bancos de dados.
- As formas que o JavaScript utiliza para trabalhar com código assíncrono, como callbacks e promessas.
- O que são promessas, quais são os estados possíveis de uma promessa e o que é o objeto `Promise`.
- A resolver promessas utilizando `then` e `async/await`, e as diferenças entre esses métodos.
- A importação e exportação de módulos em JavaScript (`import`/`export`).
- A criar e salvar arquivos de forma assíncrona.
- A adicionar novas funcionalidades a um projeto já estruturado em módulos.
- A exportar módulos organizando as funcionalidades do projeto.

## Pontos de atenção

- Uma `Promise` tem três estados possíveis: **pendente** (ainda não resolvida), **resolvida/fulfilled** (concluída com sucesso) e **rejeitada** (concluída com erro) — uma vez que sai de "pendente", o estado é definitivo.
- `then/catch` encadeiam o tratamento da Promise de forma explícita; `async/await` permite escrever o mesmo fluxo com aparência síncrona, mas por baixo dos panos ainda é uma Promise — `await` só funciona dentro de uma função declarada como `async`.
- Erros em código com `async/await` devem ser tratados com `try/catch`, já que não há um `.catch()` visível encadeado.
- `Promise.all()` executa múltiplas promessas em paralelo e só resolve quando todas forem concluídas — mas rejeita assim que a primeira falhar, o que pode exigir tratamento cuidadoso dependendo do caso de uso.

## Referências

-
