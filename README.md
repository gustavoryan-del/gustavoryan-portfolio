#  Portfólio Terminal 👨‍💻

![React](https://img.shields.io/badge/React-19.1.1-007ec6?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7.1.3-007ec6?style=for-the-badge&logo=vite&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-2.97.0-007ec6?style=for-the-badge&logo=supabase&logoColor=white) ![GitHub repo size](https://img.shields.io/github/repo-size/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge&logo=files) ![GitHub directory file count](https://img.shields.io/github/directory-file-count/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge&logo=files) ![GitHub stars](https://img.shields.io/github/stars/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge&logo=git) ![GitHub language count](https://img.shields.io/github/languages/count/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge&logo=python) ![GitHub license](https://img.shields.io/github/license/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge&color=007ec6&logo=opensourceinitiative) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge&color=007ec6&logo=gitkraken) ![GitHub last commit](https://img.shields.io/github/last-commit/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge&logo=clockify) ![Vercel](https://vercelbadge.vercel.app/api/gustavoryan-del/gustavoryan-portfolio?style=for-the-badge) ![Views Counter](https://views-counter.vercel.app/badge?pageId=https%3A%2F%2Fgithub%2Ecom%2Fgustavoryan-del%2Fgustavoryan-portfolio&leftColor=555555&rightColor=007ec6&type=total&label=RepoViews) ![GitHub Actions](https://img.shields.io/github/actions/workflow/status/gustavoryan-del/gustavoryan-portfolio/keep-supabase-awake.yml?style=for-the-badge&logo=githubactions&label=SupabaseAlive)

-----

## 📚 Índice

- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Comandos do Terminal](#-comandos-do-terminal)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Testes e Validação](#-testes-e-validação)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis

- 🌐 **Demo Online:** Em breve (Deploy pendente)
- 💻 **Repositório:** [gustavoryan-del/gustavoryan-portfolio](https://github.com/gustavoryan-del/gustavoryan-portfolio)
- 👤 **Perfil do GitHub:** [gustavoryan-del](https://github.com/gustavoryan-del)
- 🏫 **PUC Minas:** [Portal institucional](https://www.pucminas.br/)
- 🏫 **Colégio Santo Antônio:** [Site oficial](https://www.colegiosantoantonio.com.br/)

---

## 📖 Sobre o Projeto

O Terminal Portfolio é uma aplicação React que apresenta um perfil profissional em uma interface inspirada em terminais Unix. Em vez de navegar por páginas tradicionais, o visitante digita comandos como `sobre`, `projetos`, `github` ou `habilidades`.

O projeto contém:

- informações pessoais, acadêmicas e profissionais;
- projetos fixos do portfólio e projetos obtidos pela GitHub API;
- experiências profissionais e formação;
- visualizações de habilidades, WakaTime e estatísticas do GitHub;
- consulta de tarefas acadêmicas previamente geradas a partir do Canvas;
- currículo em PDF;
- contato por EmailJS;
- livro de visitas persistido no Supabase;
- internacionalização em português e inglês;
- temas escuro, claro e Galo;
- autocomplete, histórico de comandos e links diretos por query string.

---

## ✨ Funcionalidades Principais

### 🖥️ Terminal interativo

- prompt visual de terminal usando `react-terminal-ui`;
- histórico de comandos com as setas `↑` e `↓`;
- autocomplete com `Tab` e listagem com dois `Tab`;
- aliases para os comandos principais;
- link direto no formato `?cmd=curriculo`;
- tela de boot e mensagem de boas-vindas;
- rolagem automática para respostas longas.

### 🌎 Internacionalização

A interface possui traduções em português e inglês com `i18next` e `react-i18next`. O idioma pode ser alterado pelo seletor visual da aplicação.

### 🎨 Temas

O tema pode ser alternado pela interface ou pelo comando `tema`/`theme`. Os temas registrados no projeto são:

- `escuro` / `dark`;
- `claro` / `light`;
- `galo`.

### 📊 Integrações

- GitHub API para repositórios e estatísticas;
- WakaTime para atividade de programação;
- Spotify para música atual e reproduções recentes;
- EmailJS para envio de mensagens de contato;
- Supabase para o livro de visitas;
- Canvas API usada pelo script local que atualiza os dados acadêmicos.

---

## ⌨️ Comandos do Terminal

Os comandos abaixo são derivados do registro em [`src/commands.js`](src/commands.js). Os aliases são aceitos pela aplicação e também aparecem no comando `ajuda`.

| Comando | Aliases | Descrição |
| :--- | :--- | :--- |
| `sobre` | `about` | Exibe informações pessoais, acadêmicas e profissionais. |
| `ajuda` | `help` | Lista comandos, aliases e dicas de uso. |
| `experiencias` | `experience`, `xp` | Exibe a trajetória e as experiências profissionais. |
| `contato` | `contact` | Exibe os dados de contato e permite enviar uma mensagem. |
| `curriculo` | `resume` | Abre o currículo com visualização de PDF. |
| `canvas` | `tarefas`, `prazos`, `entregas` | Exibe tarefas, prazos, entregas e eventos acadêmicos gerados para o Canvas. |
| `habilidades` | `skills` | Exibe habilidades no terminal, em cards ou em um globo 3D. |
| `limpar` | `clear` | Limpa o histórico visual do terminal. |
| `tema` | `theme` | Alterna ou seleciona o tema visual. |
| `projetos` | `projects` | Exibe os projetos cadastrados no portfólio. |
| `github` | `git`, `api` | Lista repositórios usando a GitHub API. |
| `spotify` | `music` | Exibe a música atual e reproduções recentes. |
| `stats` | `githubstats`, `ghstats` | Exibe estatísticas e gráficos do GitHub. |
| `wakatime` | `time` | Exibe o tempo de programação e a atividade do WakaTime. |
| `neofetch` | `fetch`, `galo` | Exibe informações do sistema em estilo neofetch. |
| `guestbook` | `guest`, `book` | Lista mensagens ou abre o formulário do livro de visitas. |
| `design` | `ds`, `designsystem` | Exibe o design system do portfólio. |

### Opções disponíveis

```text
skills --terminal | --cards | --lista | --list | --globo | --globe
theme --escuro | --claro | --galo | --dark | --light
stats --resumo | --linguagens | --atividade | --horarios | --repos | --tudo
     --summary | --languages | --activity | --hours | --all
wakatime --terminal | --grade | --grid | --lista | --list | --cards
guestbook add | list | help

```

O comando `canvas` aceita as seções `--resumo`, `--tarefas`, `--agenda` e `--tudo`, além de filtros por disciplina, curso, campus, turma ou texto.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

* **React 19.1.1** e **React DOM 19.1.1**;
* **Vite 7.1.2**;
* **React Router DOM 7.8.2**;
* **React Terminal UI 1.4.0**;
* **React Icons 5.5.0**;
* **React Type Animation 3.2.0**;
* **React Three Fiber 9.8.1**, **Drei 10.7.9** e **Three 0.186.1**;
* **i18next 25.4.2** e **react-i18next 15.7.2**;
* CSS modularizado por componente e tokens globais em `src/theme/theme.css`.

### Integrações e serviços

* **GitHub API**;
* **WakaTime API**;
* **Spotify**;
* **EmailJS**;
* **Supabase**;
* **Canvas API**;
* **PDF.js** e `@react-pdf-viewer` para o currículo.

### Qualidade e build

* **ESLint 9.33.0**;
* `eslint-plugin-react-hooks`;
* `eslint-plugin-react-refresh`;
* `@vitejs/plugin-react`;
* Node.js com módulos ES (`"type": "module"`).

---

## 🏗️ Arquitetura

A aplicação é um front-end único servido pelo Vite:

1. `src/main.jsx` inicializa o React e os providers.
2. `src/App.jsx` mantém o estado do terminal, interpreta a entrada e seleciona o componente correspondente.
3. `src/commands.js` centraliza nomes, aliases e subcomandos.
4. `src/components/` contém as respostas visuais dos comandos.
5. `src/data/` concentra conteúdo estático, filtros e dados gerados.
6. `src/i18n.js` contém as traduções em português e inglês.
7. `src/theme/` concentra o contexto e os tokens dos temas.
8. `vite.config.js` configura os proxies locais para GitHub, WakaTime e estatísticas.

O Canvas é carregado de forma lazy em `App.jsx`. O arquivo `scripts/canvas.mjs` consulta o Canvas em ambiente local e grava dados sanitizados em `src/data/canvasData.js`; nomes, e-mails, notas e entregas individuais não são gravados no arquivo gerado.

---

## 🚀 Instalação e Execução

### Pré-requisitos

* Node.js compatível com Vite 7;
* npm;
* Git;
* credenciais opcionais para as integrações descritas em [Variáveis de Ambiente](https://www.google.com/search?q=%23-vari%C3%A1veis-de-ambiente).

### 🔐 Variáveis de Ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env.local

```

Todas as variáveis são opcionais para abrir a aplicação.

| Variável | Uso | Obrigatória |
| --- | --- | --- |
| `VITE_GITHUB_USERNAME` | Usuário exibido nas consultas do WakaTime/configurações públicas. | Não |
| `VITE_WAKATIME_ID` | Identificador público usado pelo proxy do WakaTime. | Não |
| `VITE_SUPABASE_URL` | URL do projeto Supabase para o `guestbook`. | Apenas para o livro de visitas |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Chave pública do Supabase. | Apenas para o livro de visitas |
| `VITE_EMAILJS_SERVICE_ID` | Serviço do EmailJS. | Apenas para `contato` |
| `VITE_EMAILJS_TEMPLATE_ID_FOR_ME` | Template de mensagem recebida. | Apenas para `contato` |
| `VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER` | Template de confirmação ao remetente. | Apenas para `contato` |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública do EmailJS. | Apenas para `contato` |
| `GITHUB_SITE_TOKEN` | Token de leitura usado somente no proxy local/servidor. | Não |
| `CANVAS_TOKEN` | Token usado por `npm run canvas` para consultar o Canvas. | Apenas para gerar dados do Canvas |

> [!WARNING]
> Não use o prefixo `VITE_` em `GITHUB_SITE_TOKEN` ou `CANVAS_TOKEN`. Essas credenciais não devem ser expostas no bundle do navegador.

### 📦 Instalação de Dependências

```bash
git clone [https://github.com/gustavoryan-del/gustavoryan-portfolio.git](https://github.com/gustavoryan-del/gustavoryan-portfolio.git)
cd gustavoryan-portfolio
npm install

```

### ⚡ Como Executar a Aplicação

#### Desenvolvimento

```bash
npm run dev

```

O Vite exibirá a URL local, normalmente `http://localhost:5173`.

#### Build de produção

```bash
npm run build

```

Os arquivos estáticos são gerados na pasta `dist/`.

#### Preview do build

```bash
npm run preview

```

#### Atualização dos dados do Canvas

Com `CANVAS_TOKEN` configurado:

```bash
npm run canvas
npm run canvas -- --semestre 2026-1
npm run canvas -- --cursos

```

O script usa `fetch` e APIs nativas do Node.js, consulta os cursos e tarefas publicados e atualiza `src/data/canvasData.js`.

---

## 🚀 Deploy

O projeto contém configuração para execução como aplicação Vite e rewrites de API na Vercel.

### Build

```bash
npm ci
npm run build

```

### Vercel

1. Importe o repositório na Vercel.
2. Use `npm run build` como comando de build.
3. Use `dist` como diretório de saída.
4. Configure apenas as variáveis necessárias em **Project Settings → Environment Variables**.
5. Mantenha tokens privados sem o prefixo `VITE_`.

Durante o desenvolvimento e o preview, `vite.config.js` fornece os proxies locais. Em produção, os rewrites e funções da Vercel atendem as rotas correspondentes.

---

## 📂 Estrutura de Pastas

```text
.
├── .env.example                 # 🔐 Modelo das variáveis de ambiente.
├── .github/                     # 🤖 Workflows e templates do GitHub.
├── api/                         # 🔌 Funções/proxy para integrações de produção.
├── dist/                        # 📦 Saída gerada pelo build local.
├── public/                      # 🖼️ Imagens, fontes e PDFs públicos.
├── scripts/
│   └── canvas.mjs               # 📚 Gera dados sanitizados do Canvas.
├── src/
│   ├── components/              # 🧱 Componentes React e seus estilos.
│   ├── config/                  # ⚙️ Configurações de APIs e usuários.
│   ├── data/                    # 🗃️ Conteúdo estático e dados gerados.
│   ├── terminal/                # ⌨️ Histórico, autocomplete e DOM do terminal.
│   ├── theme/                   # 🎨 Contexto e tokens dos temas.
│   ├── App.jsx                  # 🖥️ Shell do terminal e dispatcher de comandos.
│   ├── commands.js              # 📋 Registro de comandos e aliases.
│   ├── i18n.js                  # 🌎 Traduções em português e inglês.
│   └── main.jsx                 # 🚀 Ponto de entrada do React.
├── index.html                   # 🌐 Documento HTML principal.
├── package.json                 # 📦 Scripts e dependências.
├── package-lock.json            # 🔒 Lockfile npm.
├── vercel.json                  # ☁️ Rewrites e configuração de produção.
├── vite.config.js               # ⚡ Configuração do Vite e proxies locais.
└── README.md                    # 📘 Documentação do projeto.

```

---

## 🎥 Demonstração

Para testar o projeto localmente, inicie o servidor de desenvolvimento:

```bash
npm run dev

```

E experimente alguns comandos no terminal da aplicação:

```text
ajuda
sobre
projetos
skills --cards
stats --resumo
theme --light

```

---

## 🧪 Testes e Validação

O `package.json` não define uma suíte de testes automatizados. Os comandos disponíveis para validação são:

```bash
# Verifica regras do ESLint
npm run lint

# Gera o bundle de produção
npm run build

```

O build valida a transformação dos módulos React, CSS e assets. O lint pode reportar avisos ou erros relacionados ao ambiente/configuração das integrações.

---

## 📚 Documentações utilizadas

* [React](https://react.dev/)
* [Vite](https://vite.dev/guide/)
* [React Router](https://reactrouter.com/)
* [i18next](https://www.i18next.com/)
* [React Three Fiber](https://r3f.docs.pmnd.rs/)
* [GitHub REST API](https://docs.github.com/en/rest)
* [WakaTime API](https://wakatime.com/developers)
* [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
* [EmailJS](https://www.emailjs.com/docs/)
* [suspicious link removed]
* [Vercel Functions](https://vercel.com/docs/functions)

---

## 👨‍💻 Autores

* **Gustavo Ryan Gomes Guedes** — [GitHub](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/gustavoryan-del)

---

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua alteração:
```bash
git checkout -b feature/minha-alteracao

```


3. Instale as dependências e execute o lint/build:
```bash
npm install
npm run lint
npm run build

```


4. Faça commits pequenos e descritivos.
5. Abra um Pull Request explicando a alteração e incluindo evidências de validação.

Para mudanças de conteúdo, prefira os arquivos em `src/data/` e `src/i18n.js`. Para novos comandos, atualize o registro em `src/commands.js`, o dispatcher em `src/App.jsx` e as descrições nas traduções.

---

## 🙏 Agradecimentos

* À comunidade React e Vite pelas ferramentas utilizadas na aplicação.
* À PUC Minas pelos dados acadêmicos apresentados no portfólio.
* Aos serviços GitHub, WakaTime, Spotify, Supabase, EmailJS e Canvas pelas integrações disponibilizadas.

---

## 📄 Licença

Este repositório não contém um arquivo `LICENSE` no momento. Consulte o proprietário do projeto antes de reutilizar código, conteúdo, imagens ou dados pessoais.
