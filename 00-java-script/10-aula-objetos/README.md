# Aula 10 - Objetos

## O que aprendemos?

Nesta aula, aprendemos:

- O que são objetos e qual seu propósito em JavaScript.
- A trabalhar com objetos e suas propriedades.
- A acessar propriedades de forma dinâmica utilizando colchetes (`objeto[chave]`).
- Os métodos de objetos e o uso do `for...in` para iterar sobre suas propriedades.
- A relação entre JSON e objetos JavaScript.
- O funcionamento do `this` dentro de objetos.
- A manipular objetos na prática.

## Pontos de atenção

- Acesso com ponto (`objeto.propriedade`) exige que o nome da propriedade seja conhecido em tempo de escrita do código; acesso com colchetes (`objeto["propriedade"]` ou `objeto[variavel]`) permite acessar propriedades dinamicamente, inclusive vindas de variáveis.
- `for...in` itera sobre as **chaves** (propriedades) de um objeto — diferente do `for...of`, que itera sobre valores de um iterável (arrays, strings, etc.).
- JSON é um formato de texto baseado na sintaxe de objetos JS, mas não é idêntico: chaves em JSON sempre são strings entre aspas duplas, e não pode conter funções.
- O valor de `this` dentro de um método de objeto depende de **como a função é chamada**, não de onde foi definida (cuidado ao usar arrow functions como métodos de objeto, pois elas não têm `this` próprio).