//Pacotes necessários
require("colors");
var http = require("http")
var express = require("express")
let bodyParser = require("body-parser")
const { render } = require('ejs');
const MongoClient = require("mongodb").MongoClient;

//URI do MongoDb / Adquirido no MongoDb online
const uri = 'mongodb+srv://Ozzy23:Ozyakup2303%40@gabriel.bjouz9s.mongodb.net/'

// Nomeação do banco de dados e da coleção do bd
const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("Gabriel");
var usuarios = dbo.collection("usuarios");

var app = express(); 
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ... ".rainbow)

// Metodos e actions

app.get('/', (req, res) => {
    res.redirect("LAB/index.html");
});

app.get('/pagina_cadastro', (req, res) => {
    res.redirect("LAB/Cadastro.html");
});

app.get('/criar_novo_post', (req, res) => {
    res.redirect("LAB/cadastrar_post.html");
});


app.post("/cadastrar", function(req, resposta){

    let data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    usuarios.insertOne(data, function(err){
        console.log(err)
        if(err){
            resposta.render("resposta_cadastro.ejs",{status: "Erro ao cadastrar!"})
        }
        else {
            resposta.render("resposta_cadastro.ejs",{status: "Usuário cadastrado!"})
        }
    })
    }
)

app.post('/logar', function(req, resposta){

    let data = { db_login: req.body.login, db_senha: req.body.senha}

    usuarios.find(data).toArray(function(err, item){
        console.log(item)
        if(item.length == 0){
            resposta.render("resposta.ejs",{status: "usuario/senha não encontrado"})
            // nao encontrou usuário
        }else if(err){
            resposta.render("resposta.ejs",{status: "erro ao logar"})
            // erro ao logar
        }else{
            resposta.render("resposta.ejs",{status: "usuario encontrado e login realizado!"})
            // usuário encontrado
        }
    })
})