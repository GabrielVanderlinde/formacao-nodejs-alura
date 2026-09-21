const estaAprovado = true;

if (estaAprovado === true) {
  console.log('Aprovado!');
} else {
  console.log('Reprovado!');
}

console.log(10 === 10);    // true
console.log('10' === 10);  // false

console.log('10' == 10);   // true

console.log(10 !== 5);     // true
console.log(10 != 10);     // false

console.log(10 > 5);       // true
console.log(10 >= 10);     // true
console.log(5 < 10);       // true
console.log(5 <= 10);      // true

const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
  console.log('Não precisa de autorização');
} else {
  console.log('Precisa de autorização');
}
/*

**Resumo:**

```text
===  igual valor e tipo     → recomendado
!==  diferente valor/tipo   → recomendado
==   igual valor            → evitar
!=   diferente valor        → evitar
>    maior
>=   maior ou igual
<    menor
<=   menor ou igual
```
*/
