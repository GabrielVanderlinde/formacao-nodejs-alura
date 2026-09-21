# JavaScript: Utilizando Tipos, Variáveis e Funções

Curso de JavaScript & Node.js, via Alura.

> Repositório de estudos com os principais aprendizados do curso de tipos, variáveis e funções em JavaScript.

---

## Sobre o curso

Curso introdutório de JavaScript, cobrindo os blocos básicos da linguagem: variáveis, escopo, tipos de dados, operadores e funções — com foco em consolidar fundamentos sólidos tanto para o navegador quanto para o Node.js.

**Progresso:** 100% concluído

## Módulos do curso

1. **JS, Node.js e o backend** — características do JavaScript, o papel do Node.js e sua relação com o navegador.
2. **Variáveis** — declaração de variáveis, escopo, tratamento de erros.
3. **Tipos de dados** — Number, String, Boolean, null, undefined, conversão de tipos.
4. **Operadores** — aritméticos, lógicos, de comparação, precedência, truthy/falsy.
5. **Funções** — estrutura, expressão de função, arrow functions.

## Principais aprendizados

### 1. JS, Node.js e o backend
- Características e particularidades do JavaScript como linguagem.
- O que é o Node.js e seu papel na execução de JavaScript fora do navegador.
- Outros interpretadores de JavaScript além do V8/Node.js.
- O loop de eventos (event loop) do Node.js.
- Diferenças entre a execução do JavaScript no Node.js e no navegador.

### 2. Variáveis
- Declaração de variáveis em JavaScript e o padrão de nomenclatura da linguagem.
- Escopo de variável (global, de função, de bloco).
- Diferenças entre versões do JavaScript e seu impacto no escopo (`var` vs `let`/`const`).
- Tratamento de erros e os diferentes tipos de erro no Node.js.
- Uso do `console.log()` para depuração.
- Investigação prática de um `SyntaxError`.

### 3. Tipos de dados
- O tipo `Number`, incluindo o caso especial `NaN` e os diferentes tipos numéricos.
- O tipo `String` e conversão entre texto e outros tipos.
- O tipo `Boolean`.
- Coerção e conversão de tipos (implícita vs explícita).
- Os valores `null` e `undefined` e suas diferenças semânticas.
- O tipo `Symbol`.
- Tipagem dinâmica vs. tipagem estática.
- Conversão prática entre números e textos.

### 4. Operadores
- Operadores aritméticos e suas precedências.
- Operador de incremento.
- Operadores lógicos (`&&`, `||`, `!`) e a tabela da verdade.
- Valores truthy e falsy.
- Operadores de comparação (`==`, `===`, `<`, `>`, etc.).
- Operador ternário como alternativa concisa ao `if/else`.
- Comparações entre `Number` e `String`.

### 5. Funções
- Revisão do conceito de funções: parâmetros e retorno.
- Estrutura de uma função (declaração, corpo, retorno).
- Expressão de função (function expression) vs. declaração de função.
- Arrow functions e suas particularidades.

## Pontos de atenção

- JavaScript tem tipagem **dinâmica** (o tipo é resolvido em tempo de execução) e **fracamente tipada** (permite coerção implícita entre tipos) — isso explica comportamentos como `"5" + 3` resultar em `"53"` em vez de `8`.
- `typeof null` retorna `"object"` — é um bug histórico da linguagem, mantido por compatibilidade retroativa.
- Valores falsy em JS: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Todo o resto (incluindo `"0"` como string e `[]`) é truthy.
- `==` faz coerção de tipo antes de comparar; `===` compara valor e tipo sem conversão — preferir sempre `===` para evitar comparações inesperadas.
- Arrow functions não possuem `this` próprio — herdam o `this` do escopo léxico onde foram definidas, diferente de uma function declaration/expression tradicional.
- O event loop do Node.js é o que permite operações não bloqueantes mesmo sendo uma linguagem de thread única — fundamental para entender assincronismo mais à frente.

## Tecnologias

- JavaScript (ES6+)
- Node.js

## Contexto

Curso de fundamentos de JavaScript, reforçando conceitos de tipos, variáveis, operadores e funções — base para os cursos subsequentes de Node.js, Express e persistência de dados.
