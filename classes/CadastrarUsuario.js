const Id = require('./Id')

module.exports = class CadastrarUsuario {
  #con

  constructor(conexao) {
    this.#con = conexao
  }

  async cadastrar(nome, email, senha) {
    let cadastroRealizado = false
    let log = ''
    let existeEmail = await this.#checarEmail(email)
    if (!existeEmail) {
      await this.#inserir(nome, email, senha)
      cadastroRealizado = true
      log = 'Conta cadastrada com sucesso.'
    } else {
      log = 'O email ' + email + ' já está em uso.'
    }
    this.#con.fechar()
    return {cadastroRealizado: cadastroRealizado, log: log}
  }

  async #checarEmail(email) {
    let emailCadastrado = false
    await this.#con.cliente().connect().then(async function(cliente) {
      let db = cliente.db()
      let colecao = db.collection('usuario')
      await colecao.findOne({email: email}).then(res => {
        if (res != null) {
          emailCadastrado = true
        } else {
          emailCadastrado = false
        }
      })
    })
    return emailCadastrado
  }

  async #inserir(nome, email, senha) {
    await this.#con.cliente().connect().then(async function(cliente) {
      let db = cliente.db()
      let colecao = db.collection('usuario')
      let total = await colecao.count().then(res => {
        return res
      })
      let id = Id(total) // Deve passar como semente o total de usuários cadastrados
      await colecao.insertOne({id: id, nome: nome, email: email, senha: senha, foto: ''})
    })
  }

  async #atualizar(nome, email, senha, id) {
    await this.#con.cliente().connect().then(async function(cliente) {
      let db = cliente.db();
      let colecao = db.collection('usuario');
      var toUpdate = {}
      if (senha != "") {
        toUpdate = { nome: nome, senha: senha, email: email }
      } else {
        toUpdate = { nome: nome, email: email }
      }
      await colecao.findOneAndUpdate(
        {id: id},
        {$set: toUpdate},
        {new: true}
      );
    })
  }

}
