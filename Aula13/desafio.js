let print = console.log

const readlineSync = require("readline-sync");
/*
const frase = readlineSync.question("Digite sua frase: ")
pia_Abichornado = frase.split(" ")
print(pia_Abichornado)
*/




//-----------------------------------------------------------
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const procurada = "Abacaxi";
const frutaEncontrada = frutas.filter(encontrar);
frutas[frutaEncontrada]
let array = frutas.length
function encontrar (frutas){
    return frutas === procurada;
}
if (procurada == "Banana")
{print(`Fruta: ${frutaEncontrada}, Índice: 0, Array: ${array}`)}
else if(procurada == "Morango")
{print(`Fruta: ${frutaEncontrada}, Índice: 1, Array: ${array} `)}
else if(procurada == "Abacaxi")
{print(`Fruta: ${frutaEncontrada}, Índice: 2, Array: ${array} `)}
else if(procurada == "Laranja")
{print(`Fruta: ${frutaEncontrada}, Índice: 3, Array: ${array} `)}
else if(prourada == "Ameixa")
{print(`Fruta: ${frutaEncontrada}, Índice: 4, Array: ${array} `)}
else
{print(`Fruta: ${frutaEncontrada}, Índice: Undefined, Array: ${array} `)}