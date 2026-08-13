import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "O título é obrigatório"] },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O autor é obrigatório"],
  },
  editora: {
    type: String,
    required: [true, "A editora é obrigatória"],
    enum: {
      values: ["Casa do Código", "Alura"],
      message:
        "A editora {VALUE} não é válida. As editoras válidas são: Casa do Código, Alura",
    },
  },
  numeroPaginas: {
    type: Number,
    min: [
      10,
      "O número de páginas deve ser maior que zero. Valor fornecido: {VALUE}",
    ],
    max: [
      5000,
      "O número de páginas deve ser menor que 5.000. Valor fornecido: {VALUE}",
    ],
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
