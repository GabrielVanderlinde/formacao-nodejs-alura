const nome = "";

if (nome) {
  console.log("Nome não está vazio");
} else {
  console.log("Nome está vazio");
}

const idade = null;

if (idade != null) {
  if (idade != null && idade >= 18) {
    console.log("É maior de idade");
  } else if (idade >= 0 && idade < 18) {
    console.log("É menor de idade");
  }
} else {
  console.log("Idade não informada");
}

// Truthy: valores que, embora não sejam exatamente true, são interpretados como verdadeiros.
// Falsy: valores que, embora não sejam exatamente false, são interpretados como falsos.

// Quais valores são falsy?
// Existem valores específicos no JavaScript que sempre são considerados falsos (falsy). Esses valores são:

// * false
// * 0 (o número zero)
// * "" (string vazia)
// * null

// * undefined
// * NaN (Not a Number)

// Qualquer valor que não esteja nessa lista é automaticamente considerado truthy.
