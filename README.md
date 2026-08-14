# Desenvolvimento Back-End Node.js

Repositório de estudos da trilha **Desenvolvimento Back-End Node.js** da [Alura](https://www.alura.com.br/), jornada estruturada de evolução profissional em desenvolvimento back-end com foco em Node.js e ecossistema JavaScript.

---

## Sobre a trilha

A trilha de Desenvolvimento Back-End Node.js oferece um caminho organizado de evolução profissional, direto ao ponto. Uma jornada estruturada que progresses desde fundamentos de JavaScript até arquiteturas avançadas, passando por APIs REST, bancos de dados, autenticação, testes, DevOps e padrões de projeto.

**Início:** 20/07/2026  
**Nível atual:** 1  
**Progresso:** 4/8 cursos concluídos no Q1

## Progresso na trilha

### Q1 - Nível 1 (20/07/2026 - 20/10/2026)

Este nível fornece as ferramentas para construir APIs REST com Express, consolidando fundamentos de HTTP e CRUD. Também aborda a integração do back-end ao front-end em uma aplicação completa, adotando práticas usadas no mercado. Trabalha com persistência de dados com bancos relacionais (SQL) e NoSQL (MongoDB), utilizando ORM para modelagem e migrações. Implementa validações, testes e tratamento de erros. Oferece o primeiro contato com NestJS e TypeORM para organização e escalabilidade de aplicações.

| Curso | Status |
|-------|--------|
| Git e GitHub: compartilhando e colaborando em projetos | Concluído |
| JavaScript com Node.js: criando sua primeira biblioteca | Concluído |
| Node.js: criando uma API Rest com Express e MongoDB | Concluído |
| Node.js: lidando com buscas, filtros, paginação e erros em uma API | Concluído |
| DevOps: construindo e gerindo containers com o Docker | Pendente |
| Node.js: implementando testes em uma API | Pendente |
| Node.JS: melhorando o fluxo de desenvolvimento e integração de sua equipe | Pendente |
| Cloud: realize o deploy de aplicações na AWS | Pendente |

### Q2 - Nível 1 (20/10/2026 - 20/01/2027)

Autenticação e autorização, WebSockets para comunicação em tempo real, programação orientada a objetos, TypeScript e padrões de projeto com arquitetura limpa.

### Q3 - Nível 2 (20/01/2027 - 20/04/2027)

NestJS avançado, PostgreSQL, desenvolvimento seguro, estratégias de segurança para dados de entrada, Secret Scanning, SAST, DAST e SCA.

### Q4 - Nível 2 (20/04/2027 - 20/07/2027)

Streams e processamento de arquivos pesados, gerenciamento de threads e processos, GraphQL, padrões arquiteturais, clean code, arquitetura limpa e fundamentos de DDD.

### Q5 - Nível 3 (20/04/2027 - 20/07/2027)

DDD avançado, monolito modular, migração para microsserviços, serviços RPC, aplicações serverless e arquitetura orientada a eventos.

## Cursos concluídos

### 00 - JavaScript: Aprendendo a Programar

Curso introdutório de JavaScript, cobrindo desde lógica de programação e fundamentos da linguagem até recursos modernos do ECMAScript (ES6+). Serve como base para os cursos seguintes da formação.

**Principais aprendizados:**
- Lógica de programação, algoritmos e fluxogramas
- Fundamentos da linguagem: variáveis, tipos, operadores
- Controle de fluxo e laços de repetição
- Funções, arrays e objetos
- JavaScript moderno (ES6+): destructuring, spread/rest, módulos
- Introdução a assincronismo e orientação a objetos

**Repositório:** `00-java-script/`

---

### 01 - Git e GitHub: Compartilhando e Colaborando em Projetos

Curso prático sobre versionamento de código com Git e colaboração via GitHub. Cobre desde a criação de um repositório do zero até resolução de conflitos, manipulação do histórico de commits e boas práticas de documentação.

**Principais aprendizados:**
- Diferença entre Git e GitHub
- Criação e conexão de repositórios locais e remotos
- Fluxo básico de commits e colaboração
- Resolução de conflitos de merge
- Manipulação do histórico (reset, amend)
- Branches e merges
- README, Markdown e .gitignore

**Repositório:** `01-git-github/`

---

### 02 - JavaScript/Node.js: Criando Sua Primeira Biblioteca

Curso prático de Node.js focado na construção de uma biblioteca própria em JavaScript. Cobre leitura e escrita de arquivos, lógica de processamento de texto, tratamento de erros, programação assíncrona e uso do NPM.

**Principais aprendizados:**
- Leitura e escrita de arquivos com módulo `fs`
- Processamento de argumentos via linha de comando
- Tratamento de erros com try/catch e throw
- Programação assíncrona: Promises e async/await
- Organização de projetos com import/export
- Gerenciamento de pacotes com NPM
- Versionamento semântico (SemVer)

**Repositório:** `02-js-nodejs/`

---

### 03 - Node.js: Criando uma API REST com Express e MongoDB

Curso prático de construção de uma API do zero, seguindo o estilo arquitetural REST. Cobre o funcionamento de requisições HTTP, o framework Express para aplicações robustas e escaláveis, conexão com banco de dados MongoDB e implementação de buscas por campos específicos.

**Principais aprendizados:**
- Fundamentos de APIs e estilo arquitetural REST
- Criação de servidor com Node.js puro e Express
- Métodos HTTP e CRUD completo
- Conexão com MongoDB e Mongoose
- Models e schemas para representação de dados
- Controllers e organização de rotas
- Relacionamentos Embed vs Reference
- Buscas por parâmetro e query params

**Repositório:** `03-nodejs-api-rest-express-mongodb/`

---

### 04 - Node.js: Lidando com buscas, filtros, paginação e erros em uma API

Curso avançado de aprimoramento de uma API REST existente, focado em torná-la mais robusta e escalável. Cobre tratamento elegante de erros, validações de dados com Mongoose, implementação de buscas e filtros avançados com operadores do MongoDB, e paginação de resultados reutilizável.

**Principais aprendizados:**
- Tratamento robusto de erros e manipulador centralizado
- Middlewares do Express e seu funcionamento
- Validações nativas e personalizadas do Mongoose
- Buscas avançadas com regex e operadores do MongoDB
- Filtros dinâmicos por múltiplos parâmetros
- Paginação reutilizável com middleware
- Variáveis de ambiente e configuração sensível
- ESLint para qualidade de código

**Repositório:** `04-nodejs-api-metricas/`

---

## Estrutura do repositório

```
nodejs-backend-development/
├── 00-java-script/                                    # JavaScript: Aprendendo a Programar
├── 01-git-github/                                      # Git e GitHub: Compartilhando e Colaborando
├── 02-js-nodejs/                                       # JavaScript/Node.js: Criando Sua Primeira Biblioteca
├── 03-nodejs-api-rest-express-mongodb/                # Node.js: Criando uma API REST com Express e MongoDB
├── 04-nodejs-api-metricas/                             # Node.js: Lidando com buscas, filtros, paginação e erros
├── certificates/                                       # Certificados dos cursos concluídos
└── README.md                                           # Este arquivo
```

## Tecnologias abordadas

- JavaScript (ES6+)
- Node.js
- Git e GitHub
- Express
- MongoDB e Mongoose
- Postman
- ESLint
- NPM

## Próximos passos

1. Completar os cursos restantes do Q1:
   - DevOps: construindo e gerindo containers com o Docker
   - Node.js: implementando testes em uma API
   - Node.JS: melhorando o fluxo de desenvolvimento e integração de sua equipe
   - Cloud: realize o deploy de aplicações na AWS

2. Iniciar Q2 com foco em:
   - Autenticação e autorização (JWT, Passport, OAuth 2.0)
   - WebSockets e comunicação em tempo real
   - TypeScript e programação orientada a objetos
   - Padrões de projeto e arquitetura limpa

## Sobre

Repositório de estudos mantido como parte da jornada profissional em Desenvolvimento Back-End Node.js, utilizando os cursos da Alura como base para evolução contínua e estruturada de habilidades técnicas.
