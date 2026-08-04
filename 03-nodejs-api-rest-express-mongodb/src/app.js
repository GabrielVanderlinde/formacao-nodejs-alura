import express from "express";

const app = express();

const livros = [
  { id: 1, titulo: "Senhor dos Anéis" },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js API REST com Express e MongoDB");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

export default app;
