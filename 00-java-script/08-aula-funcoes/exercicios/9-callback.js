function executarAcao(acao) {
  acao();
}

executarAcao(function () {
  console.log("Executando ação!");
});
