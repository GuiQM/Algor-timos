let array
console.log('a. ', array)//Undefined

array = null
console.log('b. ', array)//Null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//c. 11

let i = 0
console.log('d. ', array[i])//d. 3

array[i+1] = 19
console.log('e. ', array)//e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor)//f. 9
//---------------------------------------------------

const readlineSync = require('readline-sync'); // Cria uma variável

const frase = readlineSync.question("Digite uma frase: "); //Pede para digitar uma frase

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);//aparecerá "SUBI NUM ÔNIBUS EM MIRROCOS 27"