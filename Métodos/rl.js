const { constrainedMemory } = require('process');
const readline = require ('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Quantos anões deseja comprar?", (resposta) => {

    console.log(`Aproveite seus ${resposta} anões!`)
    rl.close()
})