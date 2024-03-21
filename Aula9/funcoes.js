  function imprimir(valor){
        console.log(`Hello/Olá ${valor}`)
    }
imprimir ("World!")
imprimir("Mundo!")
imprimir("Pessoas!")

//------------

function notas(Nota1, Nota2, Nota3){
console.log(`Média da nota: ${(Nota1 + Nota2 + Nota3)/3}`)
}
notas (8,9,10)

//----------

function verificar (numero){
    let a = numero%2
    let b = a == 0
    if (b == true){
        console.log (`Esse número é par`)}
        else{
            console.log(`Esse número é ímpar`)}
}
verificar(6)

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Escreva um número:", (valor) => {
    verificar (valor)
rl.close();
})