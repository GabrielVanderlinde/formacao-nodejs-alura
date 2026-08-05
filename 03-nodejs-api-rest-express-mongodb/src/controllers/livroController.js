import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Erro ao listar livros: ${erro.message}` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Erro ao listar livro: ${erro.message}` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;

    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      if (!autorEncontrado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "criado com sucesso", livro: livroCriado });
    } catch (erro) {
      res.status(500).json({ message: `Erro ao criar livro: ${erro.message}` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "atualizado com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Erro ao atualizar livro: ${erro.message}` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro excluído com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Erro ao excluir livro: ${erro.message}` });
    }
  }

  static async listarLivroPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      res.status(500).json({
        message: `Erro ao listar livros por editora: ${erro.message}`,
      });
    }
  }
}

export default LivroController;
