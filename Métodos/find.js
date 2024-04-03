//Definição do array de números
const numeros = [1, 2, 3, 4, 5];
//Número que estamos procurando
const numeroProcurado = 1;
//Função para verificar se um número é igual ao número procurado
function encontrar(numero){
    return numero === numeroProcurado;
}
//Filtrando os números usando a função encontrar
const numerosEncontrado = numeros.filter(encontrar);
/* É uma função de array em JavaScript que cria um novo array
contendo apenas os elementos que passam em um determinado teste,
especificado por uma função de callback. */

//Exibindo números encontrados
console.log(numerosEncontrado); //Saída = [1]