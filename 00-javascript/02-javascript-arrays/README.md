# JavaScript: Trabalhando com Arrays

Curso de JavaScript & Node.js, via Alura.

> Repositório de estudos com os principais aprendizados do curso de arrays em JavaScript.

---

## Sobre o curso

Curso focado no domínio de arrays em JavaScript, abordando desde a criação e manipulação básica até operações avançadas com métodos funcionais como `map`, `filter`, `reduce` e uso de estruturas modernas como `Set` e spread operator.

**Progresso:** 100% concluído

## Módulos do curso

1. **Introdução a Arrays** — criação, manipulação básica, `push()`, `pop()`, acesso por índice.
2. **Alterando Arrays** — `concat()`, `splice()`, `slice()`, arrays multidimensionais.
3. **Laços de Repetição** — `for` clássico, `for...of`, busca com `includes()` e `indexOf()`, desestruturação.
4. **Funções de Callback** — `forEach()`, `map()`, arrow functions, manipulação de strings.
5. **Avançando em Arrays** — `filter()`, `reduce()`, `Set`, spread operator, clonagem.

## Principais aprendizados

### 1. Introdução a Arrays
- Criação de arrays vazios e com elementos.
- Uso de `push()` para adicionar elementos ao final do array.
- Uso de `pop()` para remover o último elemento do array.
- Acesso a elementos por índice.
- Propriedade `length` para obter o tamanho do array.
- Cálculo de médias usando arrays.

### 2. Alterando Arrays
- Uso de `concat()` para unir dois ou mais arrays.
- Uso de `splice()` para remover e/ou adicionar elementos em posições específicas.
- Uso de `slice()` para dividir arrays em partes.
- Arrays de arrays (matrizes/multidimensionais).
- Acesso a elementos em arrays aninhados.

### 3. Laços de Repetição
- `for` clássico com índice para iterar sobre arrays.
- `for...of` para iterar diretamente sobre os elementos.
- Busca de elementos com `includes()` (verifica existência).
- Busca de índices com `indexOf()` (retorna posição).
- Desestruturação de arrays para extrair valores.

### 4. Funções de Callback
- Conceito de funções de callback e Higher-Order Functions (HOF).
- Uso de `forEach()` para iterar sobre arrays.
- Uso de `map()` para transformar elementos de um array.
- Arrow functions e sintaxe concisa.
- Manipulação de strings com métodos de array.
- Operador ternário com `map()`.

### 5. Avançando em Arrays
- Uso de `filter()` para filtrar elementos baseado em condições.
- Uso de `reduce()` para reduzir um array a um único valor.
- Uso de `Set` para remover duplicatas de arrays.
- Spread operator (`...`) para clonar arrays.
- Spread operator para adicionar elementos a arrays clonados.
- Conceito de imutabilidade e por que não modificar arrays originais.

## Pontos de atenção

- `push()` e `pop()` modificam o array original — use com cuidado quando precisar preservar dados.
- `splice()` modifica o array original ao contrário de `slice()` que retorna um novo array.
- `includes()` retorna `true/false`, enquanto `indexOf()` retorna o índice ou `-1` se não encontrado.
- `map()` sempre retorna um array do mesmo tamanho, diferente de `filter()` que pode retornar um array menor.
- `reduce()` precisa de um valor inicial para o acumulador para evitar comportamentos inesperados com arrays vazios.
- `Set` remove duplicatas mas não é um array — use spread operator `[...new Set(arr)]` para converter de volta.
- Spread operator `...` cria uma cópia rasa (shallow copy) — arrays aninhados ainda compartilham referências.
- Arrow functions são ideais para callbacks curtas, mas function expressions podem ser mais legíveis para lógica complexa.
- Métodos funcionais (`map`, `filter`, `reduce`) não modificam o array original — retornam novos arrays, promovendo imutabilidade.

## Tecnologias

- JavaScript (ES6+)
- Node.js

## Contexto

Curso de aprofundamento em arrays, uma das estruturas de dados mais importantes em JavaScript. Os conceitos aprendidos aqui são fundamentais para manipulação de dados em aplicações reais, especialmente no contexto do Node.js, onde lidamos frequentemente com listas, APIs e processamento de dados. Os métodos funcionais (`map`, `filter`, `reduce`) são amplamente utilizados no desenvolvimento moderno e servem como base para entender frameworks como React e bibliotecas de processamento de dados.
