// entre 9 e 10: excelente
// entre 7 e 8: bom
// entre 5 e 6: médio
// entre 0 e 4: ruim

const notaDoAluno = 8;

switch (notaDoAluno) {
  case 10:
  case 9:
    console.log("Excelente");
    break;
  case 8:
  case 7:
    console.log("Bom");
    break;
  case 6:
  case 5:
    console.log("Médio");
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Ruim");
    break;
  default:
    console.log("Nota inválida");
    break;
}
