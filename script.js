
let tab = document.getElementById('tabela')
let nu = document.getElementById('numero')
var numero = Number(nu.value)
var c = [101,]
var alerta = 'nao alertei'
var acionado = 'nao'
var res = document.getElementById('res')
  function adicionar(){
    let nu = document.getElementById('numero')
    var numero = Number(nu.value)
    var alerta = 'nao alertei'
    var confir = 'nada'
    acionado = 'sim'
  for(pos = 0;pos < c.length;pos++){
    if(c[pos] == numero || numero > 100 || numero == 0 ){
      if(alerta == 'nao alertei' ){
        alert('Valor invalido ou já encontrado na lista')
        confir = 'nao'
        alerta = 'ja alertei'
      }
    }else if(confir == 'nao'){
      confir = 'nao'
    }else{
      confir = 'sim'
    }
  }
  if (confir == 'sim'){
   c.push(numero)
   var item = document.createElement('option')
   item.text =`Valor ${numero} adicionado`
   tab.appendChild(item)
   res.innerHTML = ''
  }
   
}
function finalizar(){
  if(acionado == 'nao'){
   alert(`Adicione valores antes de finalizar!`)
  }else{
    res.innerHTML = ''
    var maior = 0
    var menor = 101
    var soma = 0 
    var media = 0
    var numcadastro = 0
    c[0] = 0
    for(pos = 1;pos < c.length;pos++){
      if(c[pos]> maior){
        maior =  c[pos]
      } 
      if(c[pos] < menor){
        menor = c[pos]
      }
      soma += c[pos]
    }
     numcadastro = (c.length - 1)
     media = (soma/numcadastro)
     res.innerHTML += `<p> </p>`
     res.innerHTML += `Ao todo temos ${numcadastro} números cadastrados.`
     res.innerHTML += `<p> </p>`
     res.innerHTML += `O maior valor informado foi ${maior}.`
     res.innerHTML += `<p> </p>`
     res.innerHTML += `O menor valor informado foi ${menor}.`
     res.innerHTML += `<p> </p>`
     res.innerHTML += `Somando todos os valores, temos ${soma}.`
     res.innerHTML += `<p> </p>`
     res.innerHTML += `A média dos valores digitados é ${media}.`
  }

}

