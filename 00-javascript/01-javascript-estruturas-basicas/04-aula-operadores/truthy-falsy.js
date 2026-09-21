// TRUTHY & FALSY — JAVASCRIPT

// FALSY → considerados false:
false;
0 - 0;
0n;
('');
null;
undefined;
NaN;

// TRUTHY → todo o resto é true:
true;
1 - 1;
('texto');
('0');
('[]');
('{}');

// Conversão para Boolean:
Boolean(0); // false
Boolean('texto'); // true
Boolean([]); // true
Boolean(null); // false

// inverte o booleano:
!0; // true
!'texto'; // false

// transforma em boolean:
!!0; // false
!!'texto'; // true

// Uso comum:
const nome = 'Gabriel';

if (nome) {
  console.log('Nome preenchido!');
}

// REGRA PRINCIPAL:
// Decore os FALSY.
// Se não for FALSY → é TRUTHY.
