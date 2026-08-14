import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
  constructor(
    mensagem = "Um ou mais dados fornecidos estão incorretos",
    status = 400,
  ) {
    super(mensagem, status);
  }
}

export default RequisicaoIncorreta;
