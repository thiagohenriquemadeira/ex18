

    c = [0,1,2,3,4,5,10]
    var maior = 0
    var menor = 101
    var soma = 0 
    var media = 0
    var contar = 1
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
    media = (soma/5)
    console.log(media)