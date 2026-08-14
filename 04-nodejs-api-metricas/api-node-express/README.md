# API REST com Express e MongoDB - Buscas, Filtros, Paginação e Tratamento de Erros

API REST completa de livros e autores construída com Node.js, Express e MongoDB, com recursos avançados de tratamento de erros, validações, buscas dinâmicas e paginação.

Projeto desenvolvido durante o curso **Node.js: Lidando com buscas, filtros, paginação e erros em uma API** da Alura.

## Funcionalidades

- ✅ CRUD completo de livros e autores
- ✅ Tratamento robusto de erros com manipulador centralizado
- ✅ Validações de dados com Mongoose (nativas e personalizadas)
- ✅ Buscas avançadas por título, editora, número de páginas e nome de autor
- ✅ Paginação reutilizável em diferentes rotas
- ✅ Middlewares para tratamento de erros e paginação
- ✅ Variáveis de ambiente para configuração sensível
- ✅ Código limpo e consistente com ESLint

## Tecnologias

- Node.js
- Express
- MongoDB / MongoDB Atlas
- Mongoose
- ESLint
- dotenv

## Estrutura do projeto

```
api-node-express/
├── src/
│   ├── app.js                      # Configuração principal do Express
│   ├── config/
│   │   └── dbConnect.js            # Conexão com MongoDB
│   ├── controllers/
│   │   ├── autoresController.js   # Lógica de negócio para autores
│   │   └── livrosController.js     # Lógica de negócio para livros
│   ├── errors/
│   │   ├── ErroBase.js             # Classe base de erros
│   │   ├── ErroValidacao.js        # Erros de validação
│   │   ├── NaoEncontrado.js        # Erro 404
│   │   └── RequisicaoIncorreta.js  # Erro 400
│   ├── middlewares/
│   │   ├── errorsManipulation.js   # Manipulador central de erros
│   │   ├── manipulador404.js       # Middleware para rotas inexistentes
│   │   └── paginar.js              # Middleware de paginação
│   ├── models/
│   │   ├── Autor.js                # Schema de autores
│   │   ├── Livro.js                # Schema de livros
│   │   ├── index.js                # Exportação dos models
│   │   └── validadorGlobal.js      # Validação global do Mongoose
│   └── routes/
│       ├── autoresRoutes.js        # Rotas de autores
│       ├── index.js                # Exportação das rotas
│       └── livrosRoutes.js         # Rotas de livros
├── postman/
│   ├── collection/
│   │   └── api-rest-express-mongodb.postman_collection.json
│   └── environment/
│       └── api-express-mongodb-environment.postman_environment.json
├── .env                            # Variáveis de ambiente (não commitado)
├── .env.example                    # Exemplo de variáveis de ambiente
├── .gitignore                      # Arquivos ignorados pelo Git
├── eslint.config.js               # Configuração do ESLint
├── package.json                    # Dependências do projeto
├── server.js                       # Ponto de entrada da aplicação
└── README.md                       # Este arquivo
```

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd 04-nodejs-api-metricas/api-node-express
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
MONGO_URI=sua_string_de_conexao_do_mongodb
PORT=3000
```

## Execução

### Modo desenvolvimento
```bash
npm run dev
```

### Lint
```bash
npm run lint
```

## Endpoints da API

### Autores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/autores` | Listar todos os autores (com paginação) |
| GET | `/autores/:id` | Buscar autor por ID |
| POST | `/autores` | Criar novo autor |
| PUT | `/autores/:id` | Atualizar autor |
| DELETE | `/autores/:id` | Excluir autor |

### Livros

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/livros` | Listar todos os livros (com paginação) |
| GET | `/livros/:id` | Buscar livro por ID |
| POST | `/livros` | Criar novo livro |
| PUT | `/livros/:id` | Atualizar livro |
| DELETE | `/livros/:id` | Excluir livro |
| GET | `/livros/busca` | Buscar livros com filtros |

### Filtros de busca de livros

- `editora`: Filtro por editora exata
- `titulo`: Filtro por título (case insensitive)
- `minPaginas`: Número mínimo de páginas
- `maxPaginas`: Número máximo de páginas
- `nomeAutor`: Nome do autor (case insensitive)

### Parâmetros de paginação

- `limite`: Número de registros por página (padrão: 5)
- `pagina`: Número da página (padrão: 1)

## Exemplos de uso

### Criar autor
```bash
POST /autores
Content-Type: application/json

{
  "nome": "C.S Lewis",
  "nacionalidade": "Irlanda"
}
```

### Criar livro
```bash
POST /livros
Content-Type: application/json

{
  "titulo": "Cartas de um Diabo a seu Aprendiz",
  "editora": "Alura",
  "numeroPaginas": 250,
  "autor": "ID_DO_AUTOR"
}
```

### Buscar livros por editora
```bash
GET /livros/busca?editora=Alura
```

### Buscar livros por título
```bash
GET /livros/busca?titulo=cartas
```

### Buscar livros com paginação
```bash
GET /livros?limite=10&pagina=2
```

## Coleção do Postman

Uma coleção completa do Postman está disponível na pasta `postman/` com todos os endpoints configurados e scripts automáticos para capturar IDs.

1. Importe o arquivo `postman/collection/api-rest-express-mongodb.postman_collection.json`
2. Importe o ambiente `postman/environment/api-express-mongodb-environment.postman_environment.json`
3. Execute as requisições na ordem: Autor → Create → Livro → Create → demais operações

## Validações

### Livro
- `titulo`: Obrigatório
- `autor`: Obrigatório (deve ser um ObjectId válido)
- `editora`: Obrigatório (deve ser "Casa do Código" ou "Alura")
- `numeroPaginas`: Opcional (deve estar entre 10 e 5000)

### Autor
- `nome`: Obrigatório
- `nacionalidade`: Opcional

## Tratamento de erros

A API possui um sistema robusto de tratamento de erros:

- **400 Bad Request**: Requisição incorreta (validação, dados inválidos)
- **404 Not Found**: Recurso não encontrado
- **500 Internal Server Error**: Erro interno no servidor

Todos os erros são tratados de forma centralizada pelo middleware `errorsManipulation.js`.

## Middlewares implementados

- **errorsManipulation**: Manipulador central de erros
- **manipulador404**: Trata rotas inexistentes
- **paginar**: Aplica paginação aos resultados de buscas

## Autor

Projeto desenvolvido como parte do curso da Formação Node.js da Alura.
