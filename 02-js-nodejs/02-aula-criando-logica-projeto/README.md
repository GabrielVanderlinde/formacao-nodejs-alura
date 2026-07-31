# Aula 02 - Criando a Lógica do Projeto

## O que aprendemos?

Nesta aula, aprendemos:

- Como utilizar métodos de array e objeto do JavaScript para resolver problemas comuns de lógica de programação, como manipulação de arrays, strings e objetos.
- Como organizar as funcionalidades do projeto em funções separadas, utilizando a importação e exportação de módulos para comunicar as funções entre si e utilizá-las onde necessário.
- A capturar palavras a partir do conteúdo de um arquivo.
- A separar o conteúdo em parágrafos.
- Caracteres de quebra de linha e seu tratamento no processamento de texto.
- A refinar a lógica de contagem de dados.
- A organizar a saída dos dados processados.
- A utilizar o método `reduce` na prática.
- A revisar e relembrar conceitos de objetos em JavaScript.

## Pontos de atenção

- Separar a lógica em módulos (funções exportadas/importadas) facilita testes e manutenção — cada função deve ter uma responsabilidade única e clara.
- `reduce` é poderoso para agregações (contagens, somas, agrupamentos), mas pode prejudicar a legibilidade se a função acumuladora ficar muito complexa; nesses casos, vale considerar quebrar em passos com `map`/`filter` antes de reduzir.
- Caracteres de quebra de linha variam entre sistemas operacionais (`\n` no Linux/macOS, `\r\n` no Windows) — importante normalizar ao processar arquivos de texto que podem ter sido criados em ambientes diferentes.

## Referências

-
