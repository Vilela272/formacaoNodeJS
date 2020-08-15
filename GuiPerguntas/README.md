<h1 align="center">
    <img src="https://i.ibb.co/Gp69wN5/guia.png" alt="guia" border="0">
</h1>

### :scroll: Sobre

 [Projeto #01] Criando uma plataforma de perguntas e respostas
---
### Stack
#### :japanese_ogre: Back-end | :nail_care: Front-End
```js
Node.js  |  ES6/ES7  |  Express.js  |  MySQL  |  MongoDB

Mongoose  |  Socket io  |  REST    | Testes      |  TDD

Debug de aplicações Node            | Vue JS
```
---
## :wave: Como utilizar
```js
1. Clone the repository
2. Install Node.js
3. Install Yarn or NPM
```
---
## wave: Configração do banco de dados
```js
# Criar a classe database.js, dentro do diretorio [database].

# Importar o sequilize.
$ const Sequelize = require("sequelize");

# Criar a configuração da base de dados que for utilizar.

$ const connection = new Sequelize('nome-banco-de-dados', 
    'usuario-banco-de-dados', 
    'senha-banco-de-dados', {
        host: 'localhost', - "Se estiver usando o banco na própria máquina"
        dialect: 'mysql' - "Colocar quando banco de dados esta usando. EX: SQL Server, mongodb..."
});

// Exportar a conexão do banco de dados
module.exports = connection;
```
---
### Instalação da API 
```js
# Install the dependencies
$ npm install body-parser
$ npm install express
$ npm install ejs
$ npm install sequelize
$ npm install mysql2

# Start the server
$ nodemon index.js

# Run port 8183
# Available http://localhost:8183

# application routes
# Rota principal - http://localhost:8183/
# Rota perguntar(Formulário) - http://localhost:8183/perguntar
# Rota salvarpergunta - http://localhost:8183/salvarpergunta 
    OBS: (Essa rota só será redirecionada, após o envio do formulário).
```
---
## :black_nib: Autor - Guilherme Vilela Moreira

##### Talk is cheap, show me the code!
Torvalds, Linus.
