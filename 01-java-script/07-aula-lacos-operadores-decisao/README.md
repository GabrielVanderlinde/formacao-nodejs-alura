# Aula 07 - Laços, Operadores e Decisão

## O que aprendemos?

Nesta aula, aprendemos:

- A utilizar laços de repetição para executar blocos de código múltiplas vezes.
- A diferença entre os laços `while` e `do...while`.
- A identificar e discutir erros comuns ao trabalhar com laços de repetição.
- Cuidados específicos ao iterar sobre strings.
- A praticar a construção de loops em cenários variados.
- Variantes do laço `for` (como `for...of` e `for...in`).
- A testar e validar decisões em JavaScript com apoio de IA.

## Pontos de atenção

- `while` verifica a condição **antes** de executar o bloco; `do...while` executa o bloco **pelo menos uma vez** antes de verificar a condição.
- Laços infinitos costumam ocorrer por esquecer de atualizar a variável de controle (ex: esquecer o `i++`).
- Strings são iteráveis, mas indexá-las diretamente (`string[i]`) não é recomendado para strings com caracteres especiais/emojis (problemas de codificação UTF-16) — `for...of` lida melhor com isso.