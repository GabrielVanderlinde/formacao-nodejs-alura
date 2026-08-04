import express from "express";
import dbConnect from "./config/dbConnect.js";
import livro from "./models/livro.js";

const db = await dbConnect();

db.on("error", (erro) =>
  console.error("Erro de conexão com o banco de dados: ", erro),
);

db.once("open", () =>
  console.log("Conexão com o banco de dados estabelecida com sucesso!"),
);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js API REST com Express e MongoDB");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

app.post("/livros", async (req, res) => {
  try {
    const novoLivro = await livro.create(req.body);
    res.status(201).json(novoLivro);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.get("/livros/:id", async (req, res) => {
  try {
    const livroEncontrado = await livro.findById(req.params.id);
    if (!livroEncontrado) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    res.status(200).json(livroEncontrado);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.put("/livros/:id", async (req, res) => {
  try {
    const livroAtualizado = await livro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    res.status(200).json(livroAtualizado);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.delete("/livros/:id", async (req, res) => {
  try {
    const livroExcluido = await livro.findByIdAndDelete(req.params.id);
    if (!livroExcluido) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    res.status(200).json(livroExcluido);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

export default app;
