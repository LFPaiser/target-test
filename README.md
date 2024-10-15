## ========== QUESTÃO 1 E 2 ==========
As questões 1 e 2 estão respondidas em código no arquivo `test.js`.
É possível rodar o código localmente utilizando Node.js como no exemplo abaixo:

```bash
PS D:\PROJECTS\target-tests> node .\test.js
Número: 51517
Sequência calculada:
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025
O número 51517 não existe na sequencia de Fibonacci

Texto fornecido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
 Contém a letra 'a' ou 'A' aparecendo 7 vezes

PS D:\PROJECTS\target-tests>
```

No código também é possível encontrar em formato de comentários as respostas para as próximas questões.


## ========== QUESTÃO 3 ==========
### Observe o trecho de código abaixo:
### int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
### Ao final do processamento, qual será o valor da variável SOMA?

O valor de SOMA será 66

```js
const indice = 12
let soma = 0

for (let k = 1; k < indice; k++){
  soma = soma + k
}
console.log(soma)
```

## ========== QUESTÃO 4 ==========

### Descubra a lógica e complete o próximo elemento:
- a) 1, 3, 5, 7, ___ => 9 ( números ímpares )
- b) 2, 4, 8, 16, 32, 64, ___ => 128 ( y = 2x )
- c) 0, 1, 4, 9, 16, 25, 36, ___ => 49 ( função quadrática ax^2 + bx + c, sendo a = 1, b = -2 e c = 1 )
- d) 4, 16, 36, 64, ___ => 100 ( função quadrática ax^2 + bx + c, sendo a = 4, b = 0 e c = 0 )
- e) 1, 1, 2, 3, 5, 8, ___ => 13 ( fibonacci )
- f) 2, 10, 12, 16, 17, 18, 19, ___ => 200 ( números começando com a letra 'D" )

## ========== QUESTÃO 5 ==========

### Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes.
### Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
### Seu objetivo é descobrir qual interruptor controla qual lâmpada.
### Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Organizo as lâmpadas em A, B e C, e os interruptores em X, Y, e Z.

Para a primeira ida, deixo X e Y ligados e vou verificar a sala A.
Aqui posso encontrar a sala A acesa ou apagada e anoto o seguinte:

A sala A estando acesa concluo que: Z controla a sala B ou sala C (porque o interruptor X ou Y deve controlar a sala A)
A sala A estando apagada concluo que: Z controla a sala A (porque é o único interruptor desligado)

Para a segunda ida desligo o interruptor Y, deixando ligado apenas o X, e vou observar a sala B.
Aqui posso encontrar a sala B acesa ou apagada. Acrescento as informações da sala A e anoto o seguinte:

A sala B estando acesa e tendo visto A acesa anteriormente, concluo que: Y controla A porque B não apagou, portanto X controla B e Z controla C
A sala B estando acesa e tendo visto A apagada anteriormente, concluo que: Z controla A e Y controla C (porque B não apagou), portanto X controla B
A sala B estando apagada e tendo visto A acesa anteriomente, concluo que: Y controla B, portanto X controla A e Z controla C
A sala B estando apagada e tendo visto A apagada anteriormente, concluo que: Z controla A e Y controla B, portanto X controla C
