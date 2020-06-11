let http = require("http");

// Roda na porta 8181 ou na porta configuração na integração
http.createServer(function(requests, response) {
    response.end("Bem vindo ao meu site!");
})
.listen(process.env.PORT || 8181);
console.log("listening on Server");
