# 05 - DevOps: Construindo e Gerindo Containers com Docker

Curso pertencente à **Trilha Desenvolvimento Back-End Node.js** (Q1), disponibilizada via convênio corporativo com a Alura.

> Repositório de estudos com os principais aprendizados do curso de containers com Docker.

---

## Sobre o curso

Curso introdutório e prático sobre containers, cobrindo desde os conceitos fundamentais de isolamento e virtualização até a construção de imagens próprias, persistência de dados e orquestração básica com Docker Compose, com um primeiro contato com deploy em nuvem (AWS) e Kubernetes.

**Progresso:** 100% concluído

## Módulos do curso

1. **Hello Docker!** — conceitos de containers, isolamento, namespaces/cgroups, instalação e primeiros containers.
2. **Explorando o Docker!** — análise da criação de containers, imagens, gerenciamento de containers, mapeamento de portas.
3. **Construindo imagens** — estrutura de imagens, Dockerfile, build e push para o DockerHub.
4. **Persistindo dados** — volumes, TMPFS, estratégias seguras de persistência.
5. **Cloud** — deploy em nuvem com AWS Elastic Beanstalk, Docker Compose, introdução a Kubernetes.

## Principais aprendizados

### 1. Hello Docker!
- O que são containers e como eles se diferenciam de máquinas virtuais tradicionais.
- Isolamento de processos através de **namespaces** e limitação de recursos com **cgroups**.
- Instalação e verificação do Docker no ambiente local.
- Criação dos primeiros containers e o ciclo de vida de um container (criado, em execução, parado, removido).
- Exploração da Docker CLI.

### 2. Explorando o Docker!
- Análise detalhada de como um container é criado a partir de uma imagem.
- Diferença entre **imagem** (o molde, somente leitura) e **container** (a instância em execução).
- Comandos de gerenciamento de containers (listar, parar, remover, executar comandos dentro de um container em execução).
- Acesso a aplicações rodando dentro de containers.
- Mapeamento de portas (`-p host:container`) para expor serviços do container para fora.

### 3. Construindo imagens
- Estrutura de imagens e camadas (layers) e boas práticas de otimização.
- Criação de imagens customizadas.
- O `Dockerfile`: instruções principais (`FROM`, `COPY`, `RUN`, `CMD`, etc.).
- Build de uma imagem a partir de um Dockerfile.
- Push de uma imagem para o DockerHub.

### 4. Persistindo dados
- Por que containers são efêmeros por padrão e o impacto disso na persistência de dados.
- Uso de **volumes** para persistir dados fora do ciclo de vida do container.
- **TMPFS** como alternativa de armazenamento temporário em memória.
- Estratégias seguras de persistência de dados em ambientes containerizados.

### 5. Cloud
- Infraestrutura básica para hospedar aplicações containerizadas.
- Criação de instâncias na nuvem e deploy com **AWS Elastic Beanstalk**.
- Atualização de imagens em produção.
- Coordenação de múltiplos containers com **Docker Compose** e arquivos de configuração YAML.
- Introdução conceitual ao **Kubernetes** como orquestrador de containers em maior escala.

## Pontos de atenção

- Containers compartilham o kernel do host (diferente de VMs, que virtualizam hardware completo) — por isso são mais leves e rápidos para subir, mas o isolamento é de processo, não de sistema operacional completo.
- Dados gravados dentro de um container **são perdidos** quando ele é removido, a menos que se use **volumes** — todo dado que precisa sobreviver ao ciclo de vida do container deve ser persistido externamente.
- `TMPFS` armazena dados em memória (RAM), então é rápido, mas os dados são perdidos ao reiniciar o container ou a máquina — usar apenas para dados verdadeiramente temporários/sensíveis que não devem ser persistidos em disco.
- Otimizar a ordem das instruções no `Dockerfile` (colocando o que muda menos no topo) aproveita melhor o cache de camadas do Docker, acelerando builds futuros.
- **Módulo de Cloud (AWS)**: não me aprofundei na prática dessa seção por decisão pessoal de não inserir cartão de crédito na AWS. O conteúdo teórico (Elastic Beanstalk, Docker Compose, Kubernetes) foi acompanhado, mas sem execução prática de deploy real na nuvem.

## Tecnologias

- Docker / Docker CLI
- Dockerfile
- Docker Compose
- DockerHub
- AWS Elastic Beanstalk (conteúdo teórico)
- Kubernetes (introdução conceitual)

## Contexto

Curso do **Q1** da Trilha Desenvolvimento Back-End Node.js, complementando os cursos anteriores de fundamentos de JavaScript, Git/GitHub e construção de APIs REST com Node.js, Express e MongoDB.
