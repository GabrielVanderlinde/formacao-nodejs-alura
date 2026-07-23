# 02 - Git e GitHub: Compartilhando e Colaborando em Projetos

📚 Curso pertencente à trilha de estudos apoiada pela empresa, via [Alura](https://www.alura.com.br/).

> Repositório de estudos com os principais aprendizados do curso de Git e GitHub — versionamento, colaboração e boas práticas de repositório.

---

## 📌 Sobre o curso

Curso prático sobre versionamento de código com Git e colaboração via GitHub. Cobre desde a criação de um repositório do zero até resolução de conflitos, manipulação do histórico de commits e boas práticas de documentação de projetos.

**Progresso:** 100% concluído ✅

## 🗂️ Módulos do curso

1. **Compartilhando projetos** — criação de conta e repositório no GitHub, instalação do Git, conexão do repositório local com o remoto.
2. **Colaborando em projetos** — clonar repositórios, realizar e enviar commits, baixar alterações de colaboradores.
3. **Utilizando Git na IDE** — Git integrado ao VS Code, simulação e resolução de conflitos.
4. **Voltando no tempo** — desfazer commits, `reset`, alterar e remover commits do histórico.
5. **Mais recursos** — README, Markdown, `.gitignore`, Gist, branches e merges.

## 🧠 Principais aprendizados

### 1. Compartilhando projetos
- Diferença entre **Git** (ferramenta de versionamento local) e **GitHub** (plataforma de hospedagem remota de repositórios).
- Criação de conta e repositório no GitHub, incluindo diferenças entre repositórios públicos e privados.
- Instalação do Git e inicialização de um repositório local com `git init`.
- Autenticação via **SSH** e via **token** (o GitHub não aceita mais autenticação por senha simples em operações via linha de comando).
- Conexão entre repositório local e remoto com `git remote`.

### 2. Colaborando em projetos
- Clonar um repositório existente com `git clone`.
- Fluxo básico de commit: `git add` → `git commit` → `git push`.
- Boas práticas para mensagens de commit (claras, no imperativo, descrevendo o "porquê" da mudança).
- Como o Git rastreia mudanças internamente (staging area, snapshots).
- Baixar alterações de colaboradores com `git pull`.
- Adição de colaboradores em um repositório e outras formas de colaborar (forks, pull requests).

### 3. Utilizando Git na IDE
- Uso do Git integrado diretamente na interface do VS Code (sem depender só do terminal).
- Simulação prática de conflitos de merge.
- Resolução de conflitos manualmente e com o **Merge Editor** do VS Code.
- Entendimento de como e por que conflitos acontecem (mesmas linhas alteradas em branches/commits diferentes).

### 4. Voltando no tempo
- Desfazer um commit já realizado.
- Uso do `git reset` e suas variações (`--soft`, `--mixed`, `--hard`).
- Alterar o último commit com `git commit --amend`.
- Remover um commit específico do histórico.
- Cuidados ao reescrever histórico compartilhado (evitar `reset`/`amend` em commits já enviados a um repositório compartilhado com outras pessoas).

### 5. Mais recursos
- Criação e formatação de um `README.md` com Markdown.
- README especial de perfil do GitHub (`usuario/usuario`).
- Uso do `.gitignore` para excluir arquivos do controle de versão.
- Compartilhamento rápido de trechos de código com **Gist**.
- Introdução a **branches** e **merges**.
- Benefícios de um bom README para a qualidade e adoção de um projeto.

## 📎 Cheat sheet — comandos essenciais

```bash
# Configuração inicial
git init                          # inicializa um repositório local
git remote add origin <url>       # conecta o repositório local a um remoto
git clone <url>                   # clona um repositório remoto

# Fluxo básico
git status                        # verifica o estado atual do repositório
git add <arquivo>                 # adiciona arquivo à staging area
git add .                         # adiciona todos os arquivos modificados
git commit -m "mensagem"          # cria um commit
git push                          # envia commits para o remoto
git pull                          # baixa alterações do remoto

# Histórico e desfazer
git log                           # visualiza o histórico de commits
git reset --soft HEAD~1           # desfaz o commit, mantém alterações staged
git reset --mixed HEAD~1          # desfaz o commit, mantém alterações não staged
git reset --hard HEAD~1           # desfaz o commit e descarta as alterações (cuidado!)
git commit --amend                # altera o último commit (mensagem e/ou conteúdo)

# Branches
git branch                        # lista branches
git branch <nome>                 # cria uma nova branch
git checkout <branch>             # troca de branch
git merge <branch>                # mescla uma branch na atual
```

## ⚠️ Pontos de atenção

- `git reset --hard` **descarta permanentemente** as alterações — não usar sem certeza absoluta, e nunca em commits já compartilhados com outras pessoas.
- Reescrever histórico (`amend`, `reset`, `rebase`) em commits que já foram enviados (`push`) para um repositório compartilhado pode causar divergência grave para colaboradores que já baixaram esse histórico.
- Conflitos de merge não são erros — são o Git pedindo uma decisão humana sobre como combinar mudanças concorrentes nas mesmas linhas.
- Boas mensagens de commit valem tanto quanto código limpo: facilitam revisão, histórico e depuração futura (`git blame`, `git log`).
- Autenticação via senha simples foi descontinuada pelo GitHub para operações Git via linha de comando — usar SSH ou token de acesso pessoal.

## 🛠️ Tecnologias

- Git
- GitHub
- VS Code (Git integrado + Merge Editor)
- Markdown

## 🔗 Contexto

Curso complementar à trilha de estudos, focado em versionamento e colaboração — habilidade transversal aplicada a todos os projetos práticos desenvolvidos ao longo da formação (incluindo os da Formação Node.js).