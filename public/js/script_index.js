function botaoOlho(id, nome) {
  let olho = document.getElementById(id)
  let senha = document.querySelector('input[name="' + nome + '"]')
  if (olho.name == 'olho1') {
    olho.src = 'img/olho2.png'
    olho.name = 'olho2'
    senha.type = 'text'
  } else {
    olho.src = 'img/olho1.png'
    olho.name = 'olho1'
    senha.type = 'password'
  }
}

function novaConta() {
  let nova_conta = document.getElementById('nova_conta')
  nova_conta.style.height = '270px'
  nova_conta.style.transition = '.5s ease'
  nova_conta.style.visibility = 'visible'
  setTimeout(function() {
    conteudo_nova_conta.style.visibility = 'visible'
  }, 200)
}

function cancelarNovaConta() {
  let nova_conta = document.getElementById('nova_conta')
  let conteudo_nova_conta = document.getElementById('conteudo_nova_conta')
  let msg = document.getElementById('msg_nova_conta')
  msg.textContent = ''
  conteudo_nova_conta.style.visibility = 'hidden'
  nova_conta.style.height = '0px'
  nova_conta.style.transition = '.5s ease'
  nova_conta.style.visibility = 'hidden'
}

function analizarSenhas() {
  let senha_nova_conta = document.querySelector('input[name="senha_nova_conta"]')
  let senha_nova_conta_rep = document.querySelector('input[name="senha_nova_conta_rep"]')
  let msg = document.getElementById('msg_nova_conta')
  if (senha_nova_conta.value != senha_nova_conta_rep.value) {
    msg.textContent = 'As senhas são diferentes.'
  } else {
    msg.textContent = ''
  }
}

function cadastrarConta() {
  let nome_nova_conta = document.querySelector('input[name="nome_nova_conta"]')
  let email_nova_conta = document.querySelector('input[name="email_nova_conta"]')
  let senha_nova_conta = document.querySelector('input[name="senha_nova_conta"]')
  let senha_nova_conta_rep = document.querySelector('input[name="senha_nova_conta_rep"]')
  if (senha_nova_conta.value == senha_nova_conta_rep.value) {
    fetch('/novaConta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome_nova_conta.value,
        email: email_nova_conta.value,
        senha: senha_nova_conta.value
      })
    })
  }
}
