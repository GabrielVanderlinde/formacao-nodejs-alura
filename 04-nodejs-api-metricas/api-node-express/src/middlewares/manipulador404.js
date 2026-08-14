import NaoEncontrado from "../errors/NaoEncontrado.js";

function manipulador4040(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

export default manipulador4040;
