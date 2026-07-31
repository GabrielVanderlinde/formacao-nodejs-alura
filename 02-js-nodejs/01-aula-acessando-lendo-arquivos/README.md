# Aula 01 - Acessando e Lendo Arquivos

## O que aprendemos?

Nesta aula, aprendemos:

- O que são bibliotecas e seu uso no dia a dia de qualquer projeto em programação.
- Como funciona a execução de um programa em JavaScript através da linha de comando e do Node.js.
- A acessar informações enviadas através da linha de comando e utilizar essas informações em um programa.
- O que é a biblioteca `fs` nativa do Node.js e como importá-la em um projeto.
- Como utilizar a `fs` para acessar um arquivo no computador e processar seu conteúdo.

## Pontos de atenção

- Caminho absoluto vs. relativo: caminho absoluto começa a partir da raiz do sistema de arquivos, enquanto o relativo depende do diretório de onde o script é executado — cuidado ao rodar o script a partir de pastas diferentes, pois um caminho relativo pode quebrar.
- Argumentos passados pela linha de comando ficam disponíveis via `process.argv`, que sempre inclui o caminho do executável do Node e do script nas duas primeiras posições.

## Referências

-
