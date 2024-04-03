const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

function findAbacaxiIndex(array) {
    let index; //Inicializa o índice 

function findAbacaxiIndex(fruit, i) {
    if (fruits === "Abacaxi") {
        index = i; //Atribui o índice atual se a fruta for "Abacaxi"
        return true; //Retorna true para interromper a execução do filter
    }
}


array.filter(findAbacaxiIndex);
//Retorna o índice encontrado
return index;
}

//Chama a função para encontrar o índice da palavra "Abacaxi"
const abacaxiIndex = findAbacaxiIndex(fruits);

// Imprime o índice encontrado e o tamanho do array de frutas
console.log("Índice de 'Abacaxi':", abacaxiIndex);
console.log("Tamanho do array:", fruits.length);