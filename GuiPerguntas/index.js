const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta");
const port = process.env.PORT || 8183;

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com a base de dados");
    })
    .catch((msgErro) => {
        console.error("ERROR::::::::::", msgErro);
    })

//  Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send(`Formulário recebido! Título: ${titulo} e a Descrição: ${descricao}`);
});

// Startando o servidor
app.listen(port, (err) => {
    if(err) {
        console.error('ERROR:::::::::', err);
    } else {
        console.log(`Servido startado na porta ${port} com sucesso`);
    }
});
