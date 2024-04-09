let print = console.log

const numeros = [1, 22, 3, 4]
let maior = 0

function calcMaior (array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}
calcMaior(numeros)
print(maior)