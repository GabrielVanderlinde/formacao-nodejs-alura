# 04 - Node.js: Lidando com buscas, filtros, paginação e erros em uma API

Curso pertencente à **Formação Node.js** da [Alura](https://www.alura.com.br/), disponibilizada via convênio corporativo.

> Repositório de estudos com os principais aprendizados do curso de tratamento de erros, validações, buscas avançadas e paginação em uma API REST com Node.js, Express e MongoDB.

---

## Sobre o curso

Curso avançado de aprimoramento de uma API REST existente, focado em torná-la mais robusta e escalável. Cobre tratamento elegante de erros, validações de dados com Mongoose, implementação de buscas e filtros avançados com operadores do MongoDB, e paginação de resultados reutilizável. Explora profundamente o conceito de middlewares do Express e sua aplicação em diferentes camadas da aplicação.

**Instrutora:** Juliana Amoasei
**Trilha:** [Desenvolvimento Back-End Node.js](https://cursos.alura.com.br/career/path/desenvolvimento-backend-nodejs)

**Progresso:** 100% concluído

## Módulos do curso

1. **Deixando nossa API resiliente** — tratamento de erros em buscas por ID, variáveis de ambiente, configuração do ESLint, refatoração de métodos.
2. **Avançando o tratamento de erros** — middlewares do Express, erros de validação, manipulador de erros centralizado, tratamento de página 404, encaminhamento de erros.
3. **Validando os dados** — validações do Mongoose, validação personalizada, validação global, validando espaços em branco.
4. **Avançando em buscas e filtros** — busca por título com regex, operadores do MongoDB, filtro por número de páginas, filtro por nome de autor, busca dinâmica.
5. **Implementando paginação** — paginação de rotas, ordenação de resultados, reutilização de middleware de paginação, encaminhamento de busca.

## Principais aprendizados

### 1. Deixando nossa API resiliente

- Tratamento de erros em buscas por ID para evitar que a API quebre quando um recurso não existe.
- Configuração de variáveis de ambiente com `dotenv` para separar configurações sensíveis do código.
- Instalação e configuração do ESLint para manter a qualidade e consistência do código.
- Refatoração de métodos existentes para aplicar o tratamento de erros de forma consistente.
- Boas práticas de separação de responsabilidades entre front-end e back-end.
- Uso correto de códigos de status HTTP (404, 500, 400, etc.) para diferentes tipos de erro.
- Compreensão dos erros específicos do Mongoose e tratamento de ObjectIds inválidos.

### 2. Avançando o tratamento de erros

- Entendimento profundo dos **middlewares do Express** e seu funcionamento no ciclo de requisição-resposta.
- Diferença entre controllers e middlewares, e quando usar cada um.
- Implementação de logging de erros para facilitar debugging.
- Tratamento específico de erros de validação do Mongoose.
- Criação de um manipulador de erros centralizado para evitar repetição de código.
- Tratamento adequado da página 404 para rotas inexistentes.
- Uso de `next()` para encaminhar erros para o manipulador apropriado.
- Tratamento de recursos inexistentes de forma padronizada.

### 3. Validando os dados

- Validações nativas do Mongoose (required, enum, min, max, etc.).
- Criação de validadores personalizados para regras de negócio específicas.
- Validação global para aplicar regras comuns a todos os campos.
- Validação de espaços em branco em campos de texto.
- Sintaxe correta para implementação de validadores personalizados.
- Importância da validação no back-end para garantir consistência dos dados.
- Diferença entre validação no front-end (UX) e no back-end (integridade).

### 4. Avançando em buscas e filtros

- Implementação de busca por título usando expressões regulares (regex).
- Uso do operador `$regex` do MongoDB para buscas case-insensitive.
- Exploração de operadores avançados do MongoDB para filtros complexos.
- Implementação de filtro por número de páginas com operadores `$gte` e `$lte`.
- Filtro por nome de autor com busca em coleção relacionada.
- Tratamento de casos onde o autor filtrado não é encontrado.
- Implementação de busca dinâmica que aceita múltiplos parâmetros opcionais.
- Boas práticas de modelagem de dados para facilitar buscas.

### 5. Implementando paginação

- Implementação de paginação em uma rota para lidar com grandes volumes de dados.
- Ordenação de resultados com métodos do Mongoose.
- Criação de middleware de paginação reutilizável para diferentes rotas.
- Encaminhamento de buscas para o middleware de paginação.
- Uso de `skip()` e `limit()` do MongoDB para paginação eficiente.
- Configuração de parâmetros de paginação via query params.
- Melhoria de performance ao não retornar todos os registros de uma vez.
- Boas práticas de UX ao lidar com listagens longas.

## Pontos de atenção

- **Middlewares do Express** são funções que têm acesso ao objeto de requisição, resposta e ao próximo middleware no ciclo — essenciais para tratamento de erros, logging, autenticação, etc.
- Tratamento de erros deve ser centralizado sempre que possível para evitar repetição e garantir consistência nas respostas.
- **Validações no back-end são obrigatórias** — o front-end pode ser burlado, então a integridade dos dados deve ser garantida no servidor.
- Usar códigos de status HTTP corretos facilita a vida de quem consome a API e ajuda no debugging.
- Variáveis de ambiente (`.env`) nunca devem ser commitadas — usar `.gitignore` para proteger dados sensíveis.
- **Paginação é essencial** para APIs que podem retornar muitos registros, evitando sobrecarga no servidor e no cliente.
- Buscas com regex podem impactar performance em grandes volumes de dados — considerar índices apropriados.
- O operador `$options: "i"` no MongoDB torna a busca case-insensitive, mais amigável para o usuário final.
- Validações personalizadas do Mongoose devem ser usadas quando as validações nativas não atendem à regra de negócio.
- Middlewares de erro devem ter quatro parâmetros `(err, req, res, next)` para serem reconhecidos pelo Express como manipuladores de erro.

## Tecnologias

- Node.js
- Express
- MongoDB / MongoDB Atlas
- Mongoose
- Postman
- ESLint
- dotenv

## Projeto final

API REST aprimorada de livros e autores com:
- Tratamento robusto de erros e manipulador centralizado
- Validações de dados com Mongoose (nativas e personalizadas)
- Buscas avançadas por título, editora, número de páginas e nome de autor
- Paginação reutilizável aplicada a diferentes rotas
- Middlewares para tratamento de erros e paginação
- Variáveis de ambiente para configuração sensível
- Código limpo e consistente com ESLint

## Contexto

Quarto curso da **Formação Node.js**, seguindo os cursos de _JavaScript: Aprendendo a Programar_, _Git e GitHub: Compartilhando e Colaborando em Projetos_, _JavaScript/Node.js: Criando Sua Primeira Biblioteca_ e _Node.js: Criando uma API REST com Express e MongoDB_.
