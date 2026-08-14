import express from "express";
import dotenv from "dotenv";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipularErros from "./middlewares/errorsManipulation.js";
import manipulador4040 from "./middlewares/manipulador404.js";

dotenv.config();

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador4040);

app.use(manipularErros);

export default app;
