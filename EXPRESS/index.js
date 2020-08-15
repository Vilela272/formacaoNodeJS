const express = require("express"); // Importando o express
const { response } = require("express");
const app = express(); // Iniciando o express
const port = process.env.PORT || 8182; // Setando a porta que o servidor irá rodar

app.get("/", (req, res) => {
    res.end("Seja bem vindo!!!");
});

app.get("/blog/:artigo?", (req, res) => {

    let artigo = req.params.artigo;

    if(artigo){
        res.end("Artigo: " + artigo);
    }else {
        res.end("Seja bem bindo ao blog!");
    }
});

app.get("/canal/youtube", (req, res) => {

    let canal = req.query["canal"];
    
    if(canal) {
        res.end(canal);
    } else {
        res.end("Nenhum canal fornecido!");
    }
});

// Passando o parametro [:nome] na rota ola
app.get("/ola/:nome", (req, res) => {
    res.end(req.params.nome);
});

// Passando o parametro [:nome] e [:empresa] na rota ola
app.get("/ola/:nome/:empresa", (req, res) => {
    res.end(req.params.nome + " " +req.params.empresa);
});

// Iniciando o servidor
app.listen(port ,function(erro) {
    if(erro) {
        console.log("Error::::: Servidor não startado");
    } else {
        console.log("Servidor startado com sucesso!!!");
    }
});
