# Aula 11 - Fundamentos Modernos do JavaScript

## O que aprendemos?

Nesta aula, aprendemos:

- A trabalhar com datas em JavaScript.
- Os operadores REST e spread (`...`).
- A usar REST e spread em conjunto com arrays.
- A funcionalidade de destructuring.
- A explorar módulos em JavaScript (`import`/`export`).
- Conteúdo complementar sobre ECMAScript e a evolução do JavaScript (ver abaixo).
- Conteúdo complementar sobre a palavra reservada `new` e orientação a objetos (ver abaixo).
- Conteúdo complementar sobre conversão de strings para números (ver abaixo).

## Pontos de atenção

- Spread (`...`) **expande** elementos (usado ao passar/copiar valores); Rest (`...`) **agrupa** elementos (usado em parâmetros de função ou destructuring). A sintaxe é igual, o contexto de uso é que diferencia.
- Destructuring de arrays segue a **posição**; destructuring de objetos segue o **nome da propriedade**.
- `"7" + "7"` resulta em `"77"` (concatenação), enquanto `Number("7") + Number("7")` resulta em `14` — conversão explícita evita esse tipo de erro silencioso.

## Complemento: Palavra reservada `new` e Orientação a Objetos

Ao usar `new Date()`, estamos criando um novo objeto a partir de um molde chamado **classe** — conceito central da Orientação a Objetos (OO), um estilo de organizar o código representando "coisas" do mundo real com características (dados) e ações (funções).

Conceitos básicos da OO:

- **Objeto**: uma "coisa" com dados e comportamentos (ex: o `Date` usado no curso).
- **Classe**: um molde para criar objetos.
- **Herança**: um objeto pode herdar comportamentos de outro.
- **Encapsulamento**: cada objeto cuida dos seus próprios dados.
- **Polimorfismo**: a mesma ação pode se comportar de formas diferentes em objetos diferentes.

Esse é apenas um primeiro contato com o tema — aprofundamento fica para um curso específico de OO em JavaScript.

## Complemento: ECMAScript

- **ECMAScript (ES)** é o nome da especificação oficial que define como o JavaScript deve funcionar; é mantida pelo grupo **TC39**.
- **ES6** (2015), também chamado **ES2015**, foi um marco: introduziu `let`/`const`, arrow functions, template literals, destructuring, rest/spread, parâmetros padrão, módulos e Promises — muitos dos recursos já vistos ao longo deste curso.
- O termo **"ES6+"** se refere a todas as versões lançadas após 2015, atualizadas anualmente (ex: ES2017 trouxe `async/await`).
- Entender essa evolução ajuda a compreender por que certos recursos (spread, destructuring, arrow functions) não aparecem em códigos mais antigos, e por que frameworks modernos (React, Vue, Angular) dependem fortemente de ES6+.

## Complemento: Conversão de Strings para Números

- Dados vindos do terminal, formulários ou arquivos chegam sempre como **strings**. Para operações matemáticas, é necessário convertê-los explicitamente para número — caso contrário, o JS pode concatenar em vez de somar.
- **`Number()`**: converte a string inteira para número; se inválida, retorna `NaN`.
- **`parseInt()`**: interpreta a string até encontrar um caractere não numérico, retornando um inteiro.
- **`parseFloat()`**: semelhante ao `parseInt()`, mas preserva casas decimais.

```javascript
const valorTexto = "7";
const valorNumero = Number(valorTexto);
console.log(valorNumero + 7); // 14
```

**Recomendações:**

- Sempre converter explicitamente antes de operações matemáticas.
- Validar se a conversão teve sucesso (checar `NaN`) antes de usar o valor em cálculos.
- Preferir `parseFloat()` ou `Number()` quando o valor pode conter casas decimais.

## Referências

- [JavaScript: programação orientada a objetos](https://cursos.alura.com.br/course/javascript-programacao-orientada-objetos)
