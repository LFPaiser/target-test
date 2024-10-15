// =========================== 1 ===========================
// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// calcula a sequencência fibonacci
function f_sequence(n){
  let f1 = 0
  let f2 = 1
  const sequence = [f1, f2]

  let i = 1
  while (f2 < n) {
    //generate next number
    sequence.push(f1+f2)
    f1 = sequence[i]
    f2 = sequence[i + 1]
    i ++
  }

  return sequence
}

function ExistsInFibonacci(x){
  const sequence = f_sequence(x)
  const exists = sequence.includes(x)

  return {sequence, exists}
}

// gera um número aleatório
function getRandomNumber(){
  return Math.floor(Math.random() * (Date.now()/(1000 * 60 * 60)))
}

function TestFibonacci(a){
  const number = a || getRandomNumber() // se nenhum número for provido, gera um aleatório
  const result = ExistsInFibonacci(number)

  console.log(`Número: ${number}`)
  console.log(`Sequência calculada:\n${result.sequence}`)
  console.log(`O número ${number} ${result.exists ? '': 'não'} existe na sequencia de Fibonacci\n`)
}

TestFibonacci()

// =========================== 2 ===========================

// Escreva um programa que verifique, em uma string, a existência da letra ‘a’,
// seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

function CountLetterA(str){
  const count = str.toLowerCase().split("a").length - 1

  if (!count) return console.log(`A string '${str}', não contém a letra 'a'`)
  return console.log(`Texto fornecido: '${str}'\n Contém a letra 'a' ou 'A' aparecendo ${count} vezes\n`)
}

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
CountLetterA(loremIpsum)



// ===================== QUESTÃO 3 =====================
//  Observe o trecho de código abaixo:
//  int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
//  Ao final do processamento, qual será o valor da variável SOMA?

// O valor de SOMA será 66

// const indice = 12
// let soma = 0

// for (let k = 1; k < indice; k++){
//   soma = soma + k
// }
// console.log(soma)

// ===================== QUESTÃO 4 =====================

//  Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___ => 9 ( números ímpares )
// b) 2, 4, 8, 16, 32, 64, ___ => 128 ( y = 2x )
// c) 0, 1, 4, 9, 16, 25, 36, ___ => 49 ( função quadrática ax^2 + bx + c, sendo a = 1, b = -2 e c = 1 )
// d) 4, 16, 36, 64, ___ => 100 ( função quadrática ax^2 + bx + c, sendo a = 4, b = 0 e c = 0 )
// e) 1, 1, 2, 3, 5, 8, ___ => 13 ( fibonacci )
// f) 2, 10, 12, 16, 17, 18, 19, ___ => 200 ( números começando com a letra 'D" )

// ===================== QUESTÃO 5 =====================

//  Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes.
//  Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
//  Seu objetivo é descobrir qual interruptor controla qual lâmpada.
//  Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// Organizo as lâmpadas em A, B e C, e os interruptores em X, Y, e Z.

// Para a primeira ida, deixo X e Y ligados e vou verificar a sala A.
// Aqui posso encontrar a sala A acesa ou apagada e anoto o seguinte:

// A sala A estando acesa concluo que: Z controla a sala B ou sala C (porque o interruptor X ou Y deve controlar a sala A)
// A sala A estando apagada concluo que: Z controla a sala A (porque é o único interruptor desligado)

// Para a segunda ida desligo o interruptor Y, deixando ligado apenas o X, e vou observar a sala B.
// Aqui posso encontrar a sala B acesa ou apagada. Acrescento as informações da sala A e anoto o seguinte:

// A sala B estando acesa e tendo visto A acesa anteriormente, concluo que: Y controla A porque B não apagou, portanto X controla B e Z controla C
// A sala B estando acesa e tendo visto A apagada anteriormente, concluo que: Z controla A e Y controla C (porque B não apagou), portanto X controla B
// A sala B estando apagada e tendo visto A acesa anteriomente, concluo que: Y controla B, portanto X controla A e Z controla C
// A sala B estando apagada e tendo visto A apagada anteriormente, concluo que: Z controla A e Y controla B, portanto X controla C
