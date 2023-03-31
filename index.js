const express = require('express')
const bodyParser = require('body-parser')
const Conexao = require('./classes/Conexao')
const app = express()
const con = new Conexao()

const CadastrarUsuario = require('./classes/CadastrarUsuario')
const cd = new CadastrarUsuario(con)
cd.cadastrar('nome', 'email', 'senha')

app.use(express.static(__dirname + '/public'))
app.use(express.json()) // Necessário para reconhecer os campos de formulário com o body-parser
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {

})

app.post('/novaConta', function(req, res) {
  let nome = req.body['nome']
  let email = req.body['email']
  let senha = req.body['senha']
  console.log(nome, email, senha)
})

app.get('/sari', function(req, res) {
  con.fechar()
})

app.listen(4000)
