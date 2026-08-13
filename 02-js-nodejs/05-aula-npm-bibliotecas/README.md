# Aula 05 - O NPM e suas Bibliotecas

## O que aprendemos?

Nesta aula, aprendemos:

- O que é o NPM e como funciona um gerenciador de pacotes.
- Como utilizar o NPM para criar o esqueleto de um novo projeto Node.js e seu arquivo principal de configuração, o `package.json`.
- Como instalar bibliotecas externas, importá-las e utilizá-las em projetos.
- O que é a pasta `node_modules` e para que ela serve.
- A diferença entre callbacks e Promises na prática.
- A trabalhar com argumentos de linha de comando.
- Como decorar/estilizar a saída no terminal.
- Conceitos de versionamento de bibliotecas e softwares (SemVer).
- A construir e finalizar o projeto final do curso, integrando os conceitos aprendidos ao longo de todas as aulas.

## Pontos de atenção

- O `package.json` é o arquivo central de configuração do projeto: define dependências, scripts, versão e metadados — deve sempre ser versionado no Git.
- A pasta `node_modules` **não** deve ser versionada (deve entrar no `.gitignore`), pois é gerada automaticamente a partir do `package.json` com `npm install`.
- Versionamento semântico (SemVer) segue o padrão `MAJOR.MINOR.PATCH` — mudanças incompatíveis incrementam o MAJOR, novas funcionalidades compatíveis incrementam o MINOR, e correções incrementam o PATCH.
- Ao instalar uma biblioteca, vale sempre checar sua documentação e manutenção ativa antes de adicionar como dependência de um projeto real.

## Referências

- ***

## 🏁 Projeto final do curso

Este curso é concluído com um projeto prático que integra todos os conceitos vistos ao longo das aulas: leitura de arquivos com `fs`, lógica de processamento de texto, tratamento de erros, promessas (`async/await`) e uso de bibliotecas externas via NPM.
