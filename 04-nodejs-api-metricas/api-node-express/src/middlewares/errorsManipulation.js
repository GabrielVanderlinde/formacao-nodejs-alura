import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipularErros(req, res, erro, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send({
      message: "Um ou mais dados foram informados de forma incorreta.",
    });
  } else {
    res.status(500).send({ message: "Erro interno no servidor" });
  }
}

export default manipularErros;
