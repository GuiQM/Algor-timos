let print = console.log
//O QUE SÃO ARRAYS?
/*
=> São "Listas de Elementos"
ex: Lista de compras, lista de alunos, lista de números da loteria, lista telefônica...

=> no javascript, usamos colchetes para agrupar os itens de uma lista:
*/
const lista_de_Compras = ["Batata", "Alface", "Presunto" ,"Queijo", "Erva"]
const segIntem = lista_de_Compras[2] //Aparece presunto, sempre começa pelo número 0 
const lista_de_Numeros_Mega = [2, 6, 10, 34, 88, 95]

print(lista_de_Compras)
print (segIntem)
print(lista_de_Numeros_Mega)
//---------------------------------

//PROPRIEDADE LENGTH
/*
=> A propriedade "length" nos diz qual é a "quantidade de itens" de um array
*/

const pokemon = ["Bulbassauro", "Squirtle", "Charmander"]
print(pokemon.length) //3
//----------------------------------

//MÉTODO INCLUDES(ELEMENTO)
/*
=> O método determina se um array contém um determinado elemento, retornando "true" ou "false"
*/

const filmes = ["Minions", "Shrek", "Super Mário"]
print(filmes.includes("Shrek")) //True
print(filmes.includes("Impossible Mission")) //False
//----------------------------------

//MÉTODO PUSH(ELEMENTO)
/*
=> O método adiciona um ou mais elementos ao final de um array
*/
const numeros = [1, 2, 3]

numeros.push(4)
print(numeros) //[1, 2, 3, 4]
numeros.push(5, 6, 7)
print(numeros) //[1, 2, 3, 4, 5, 6, 7]
//-------------------------

//MÉTODO POP()
/*
=> O método remove o último elemento de uma array
*/
const meusPeixes = ["Palhaço", "Mandarim", "Estujão"]

meusPeixes.pop()
print(meusPeixes) //[Palhaço, Mandarim]
//-------------------------

//MÉTODO SPLICE (I,N)
/*
=> O método remove "n" elementos à partir da posição do "i" do array
*/
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
//indices (i)    0    1    2    3    4    5    6    7

print(letras.splice(2, 1))
//      Letras = ["A", "B", "D", "E", "F", "G", "H"]
//Indices (i)      0    1    2    3    4    5    6

print(letras.splice(3,2)) //Letras = ["A", "B", "C", "D", "G", "H"]
