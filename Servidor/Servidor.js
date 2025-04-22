require("colors");
var http = require("http")
var express = require("express")

var app = express(); 
app.use(express.static('./public'))

var server = http.createServer(app);
server.listen(3000);

console.log("Servidor rodando ... ".rainbow)

// Metodos e actions

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("LAB/index.html")
})