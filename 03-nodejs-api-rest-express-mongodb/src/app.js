import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const db = await dbConnect();

db.on("error", (erro) =>
  console.error("Erro de conexão com o banco de dados: ", erro),
);

db.once("open", () =>
  console.log("Conexão com o banco de dados estabelecida com sucesso!"),
);

const app = express();
routes(app);

export default app;
