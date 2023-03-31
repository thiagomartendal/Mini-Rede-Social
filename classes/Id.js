function letras() {
  return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
}

function embaralhar(str) {
  return str.split('').sort(function(){return 0.5-Math.random()}).join('')
}

function primeiroId() {
  let l1 = Math.floor(Math.random() * 26)
  let l2 = Math.floor(Math.random() * 26)
  let l3 = Math.floor(Math.random() * 26)
  let l4 = Math.floor(Math.random() * 26)
  return letras()[l1] + letras()[l2] + letras()[l3] + letras()[l4]
}

function segundoId() {
  let n1 = Math.floor(Math.random() * 10).toString()
  let n2 = Math.floor(Math.random() * 10).toString()
  let n3 = Math.floor(Math.random() * 10).toString()
  let n4 = Math.floor(Math.random() * 10).toString()
  return n1 + n2 + n3 + n4
}

function terceiroId() {
  return Math.floor(Math.random() * 10000).toString()
}

function quartoId(semente) {
  let novaSemente = Array.from(String(semente))
  let n1 = Math.floor(Math.random() * 10).toString()
  let n2 = Math.floor(Math.random() * 10).toString()
  let n3 = Math.floor(Math.random() * 10).toString()
  let n4 = Math.floor(Math.random() * 10).toString()
  let str = n1.toString() + n2.toString() + n3.toString() + n4.toString() + semente.toString()
  return embaralhar(str)
}

module.exports = function(semente) {
  let str = primeiroId() + segundoId() + primeiroId() + terceiroId()
  + primeiroId() + quartoId(semente) + primeiroId()
  + Math.random().toString().replace('0.','')
  return embaralhar(str)
}
