// Documento JS para teste e arquivamento de scripts para resolução de problemas.

function countBy(x, n) { //Função que soma o primeiro input na quantidade de vezes do segundo input, somando a cada elemento adicionado no array
    let z = [];
    y = x
    for (let i = 0; i < n; i++) {
        z.push(y)
        y = z[z.length - 1] + x
    }
    return z;
}


function litres(time) { //Função que arredonda pra menos o produto da quantidade de tempo informada vezes 0,5

  let lit = parseInt(parseInt(time,10)* 0.5,10)

  return lit;
}


var countSheep = function (num){ //Função que concatena strings mediante quantidade desejada
    let a = ""
    for(let i = 1; i <= num; i++){
    a = a + i + " sheep..."
    }
    return a
  }