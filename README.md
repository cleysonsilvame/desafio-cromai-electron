<h1 align="center">
  <img alt="Logo Desafio Cromai | Teorema de Pitágoras" title="Teorema de Pitágoras" src=".github/logo-pitagoras.svg" width="420px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requisitos-da-aplicação">Requisitos da aplicaçao</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-setup">Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <a href="https://github.com/cleysonsilvame/desafio-cromai-electron/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/cleysonsilvame/desafio-cromai-electron.svg">
  </a>

  <a href="https://github.com/cleysonsilvame/desafio-cromai-electron/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/cleysonsilvame/desafio-cromai-electron.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/cleysonsilvame/desafio-cromai-electron.svg">
</p>

<p float="center">
  <img alt="App Teorema de Pitágoras" src=".github/notebook.png" width="100%" >
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Electron
- React.js
- Next.js
- Typescript
- JavaScript

## 💻 Projeto

### Desafio proposto pela empresa Cromai

A missão era desenvolver um fork do front-end em [React](https://github.com/cleysonsilvame/desafio-cromai) para Electron que fosse capaz de resolver o cálculo do Teorema de Pitágoras.
Conectado a uma [API em Python](https://github.com/cleysonsilvame/desafio-cromai-api) com Flask para servir o cálculo.

## ⚙️ Requisitos da aplicação

- Node
- Yarn ou NPM
- Rodar o servidor em python disponível [aqui](https://github.com/cleysonsilvame/desafio-cromai-api), ou usar o deploy feito no heroku com este caminho: https://desafio-cromai-api.herokuapp.com
- Entedimento desta portabilidade

| Part       | Source code (Typescript) | Builds (JavaScript) |
| ---------- | ------------------------ | ------------------- |
| Next.js    | `/renderer`              | `/renderer`         |
| Electron   | `/electron-src`          | `/main`             |
| Production |                          | `/dist`             |

## 🔧 Setup

```bash
#.env.example para .env.local e definir a URL da api
NEXT_PUBLIC_API_URL=http://localhost:5000

#terminal
npm install
#ou
yarn

#terminal
npm run dev
#ou
yarn dev
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### 🙋‍♂️ Autor

---

<a href="https://github.com/cleysonsilvame/" title="Cleyson Silva">
 <img style="border-radius: 50%;" src="https://raw.githubusercontent.com/cleysonsilvame/cleysonsilvame/master/.github/cleyson-rounded.png" width="100px;" alt="Cleyson Silva">
 <br />

<sub><b>Cleyson Silva</b></sub> 🚀</a>

👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Cleyson_Silva-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/cleyson-silva-639b01188/) [![Gmail Badge](https://img.shields.io/badge/-cleysonsilva.me@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:cleysonsilva.me@gmail.com)](mailto:cleysonsilva.me@gmail.com)
