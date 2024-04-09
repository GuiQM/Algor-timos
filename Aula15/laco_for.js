//O laço "FOR" é uma maneira que permite "simplificar" a escrita de laços que tenham este comportamento

//WHILE

let i = 0
while(i < 10){
    console.log(i)
    i++
}


//FOR
let q
for(let q = 0;/*(começo)*/q<10;/*(condição)*/q++/*(final)*/){
console.log(q)
}



/*Uma das principais utiliddes deste "tipo de estrutura" é para "PERCORRERMOS
os valores contidos em um array".*/
const numeros = [14, 67, 89, 15, 23, 90, 20, 50]

for(let e = 0; e < 5; e++){ //Pegará apenas 5 números
    const elemento = numeros [e]
    console.log(elemento)
}
//----------------------------
const numeros2 = [14, 67, 89, 15, 23, 90, 20, 50]

for(let o = 0; o < numeros2.length; o++){ //Pegará apenas 5 números
    const elemento2 = numeros2 [o]
    console.log(elemento2)
}