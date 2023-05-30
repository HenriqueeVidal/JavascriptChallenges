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

  let lit = parseInt(parseInt(time, 10) * 0.5, 10)

  return lit;
}


var countSheep = function (num) { //Função que concatena strings mediante quantidade desejada
  let a = ""
  for (let i = 1; i <= num; i++) {
    a = a + i + " sheep..."
  }
  return a
}


function paperwork(n, m) { //Função que verifica se argumentos são maiores que 0 e multiplica os mesmos
  if (n < 0 || m < 0) {
    return 0
  } return n * m
}


function betterThanAverage(classPoints, yourPoints) { // Função que adiciona a nota à array e verifica se é maior que a média retornando True or False
  let avgr = 0
  classPoints.push(yourPoints)
  for (let i = 0; i < classPoints.length; i++) {
    avgr += classPoints[i]
  }
  return yourPoints > (avgr / classPoints.length)
}


function smash(words) { // Função que transforma array em frase string e coloca espaços somente entre as palavras
  let phrase = ''
  let j = 0
  if (words != '') {
    if (words.length > 1) {
      for (let i = 0; i < words.length - 1; i++) {
        phrase += words[i] + " "
        j++
      }
    }
    phrase += words[j];

  }
  return phrase
};