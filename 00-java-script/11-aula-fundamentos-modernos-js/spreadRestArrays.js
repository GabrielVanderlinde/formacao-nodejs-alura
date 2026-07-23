const frutas = ["Maça", "Banana", "Goiaba"];

const maisFrutas = ["Uva", "Morango", "Kiwi"];

const clone = [...frutas];

frutas.push("Pitanga");

const todasFrutas = [...frutas, ...maisFrutas];

console.log(frutas);
console.log(maisFrutas);
console.log(clone);
console.log(todasFrutas);

const [primeira, segunda, restante] = todasFrutas;

console.log(primeira)
console.log(segunda);
console.log(restante);