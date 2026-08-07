# 03 - Node.js: Criando uma API REST com Express e MongoDB

Curso pertencente à **Formação Node.js** da [Alura](https://www.alura.com.br/), disponibilizada via convênio corporativo.

> Repositório de estudos com os principais aprendizados do curso de construção de uma API REST com Node.js, Express e MongoDB.

---

## Sobre o curso

Curso prático de construção de uma API do zero, seguindo o estilo arquitetural REST. Cobre o funcionamento de requisições HTTP, o framework **Express** para aplicações robustas e escaláveis, conexão com banco de dados **MongoDB** e implementação de buscas por campos específicos.

**Instrutora:** Juliana Amoasei
**Trilha:** [Desenvolvimento Back-End Node.js](https://cursos.alura.com.br/career/path/desenvolvimento-backend-nodejs)

**Progresso:** 100% concluído

## Módulos do curso

1. **Criando o projeto com Node.js** — fundamentos de API, servidor Node.js puro, rotas, portas e gerenciadores de pacotes.
2. **Express e primeiras rotas** — framework Express, requisição/resposta, CRUD de livros, métodos HTTP.
3. **Persistindo dados** — bancos NoSQL, MongoDB Atlas, models e schemas com Mongoose.
4. **Evoluindo a API** — controllers, tratamento de erros, definição e organização de rotas.
5. **Adicionando funcionalidades** — relacionamentos (Embed x Reference), buscas por parâmetro, projeto final.

## Principais aprendizados

### 1. Criando o projeto com Node.js
- O que são APIs e os diferentes tipos de API existentes.
- O que é o Node.js e seu papel na execução de JavaScript no servidor.
- Criação de um servidor básico com Node.js puro, sem framework.
- Import e export de módulos, componentes principais de um projeto Node.js.
- Criação de rotas e o conceito de portas na comunicação em rede.
- Funcionamento de gerenciadores de pacotes (NPM).

### 2. Express e primeiras rotas
- Instalação e uso do Postman para testar requisições.
- Início de um projeto com o framework Express.
- Partes que compõem uma requisição e uma resposta HTTP.
- Criação da rota de listagem, criação (`POST`), busca/atualização e remoção de livros.
- O CRUD (Create, Read, Update, Delete) e sua relação direta com os métodos HTTP.

### 3. Persistindo dados
- Conceitos gerais de bancos de dados e mais sobre NoSQL.
- Criação de banco e coleção no MongoDB Atlas.
- Conexão do MongoDB com a API.
- Criação de models e schemas (Mongoose) para representar os dados.
- Acesso à coleção de livros através da aplicação.

### 4. Evoluindo a API
- Criação de um controller para o recurso de livro, separando lógica das rotas.
- Implementação dos controllers de `POST`, `PUT` e `DELETE`.
- Uso do bloco `try/catch` para tratamento de erros nos controllers.
- Definição e organização das rotas conectadas aos respectivos controllers.

### 5. Adicionando funcionalidades
- Criação do recurso de autores e relacionamento entre coleções no MongoDB.
- Diferença entre as estratégias **Embed** e **Reference**.
- Implementação de buscas por parâmetro (query params) e estrutura de uma URL.
- Finalização do projeto: API REST completa de livros e autores.

## Pontos de atenção

- Separar **controllers** das **rotas** segue o princípio de responsabilidade única: a rota define "onde" e "com qual método"; o controller define "o que fazer".
- Todo controller que interage com o banco (operação assíncrona) deve estar dentro de um `try/catch`.
- **Embed** é indicado para dados sempre acessados juntos e que não crescem indefinidamente; **Reference** é indicado para dados reutilizados por múltiplos documentos ou que crescem muito.
- Ao usar `Reference`, é necessário popular manualmente os dados relacionados na consulta (`populate` no Mongoose) — sem isso, a API retorna só o ID.
- Retornar códigos de status HTTP corretos (`201`, `404`, `400`, `500`) facilita o consumo da API por quem for integrá-la.
- Variáveis sensíveis (string de conexão do MongoDB) nunca devem ir para o repositório — usar `.env` e `.gitignore`.

## Tecnologias

- Node.js
- Express
- MongoDB / MongoDB Atlas
- Mongoose
- Postman

## Projeto final

API REST completa de livros e autores, com CRUD completo, persistência em MongoDB, relacionamento entre coleções e buscas por parâmetro.

## Contexto

Terceiro curso da **Formação Node.js**, seguindo os cursos de *JavaScript: Aprendendo a Programar*, *Git e GitHub: Compartilhando e Colaborando em Projetos* e *JavaScript/Node.js: Criando Sua Primeira Biblioteca*.
