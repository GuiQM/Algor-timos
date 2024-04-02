const { constrainedMemory } = require('process');
const readline = require ('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Escreva uma frase: ", (frase) => {

    console.log(frase.toUpperCase()) //Aumenta a letra da frase
    console.log(frase.replaceAll("o", "i")) //Substitui "O" por "I"
    console.log(frase.length) //Revela quantos caracteres a frase possui
    rl.close()
})