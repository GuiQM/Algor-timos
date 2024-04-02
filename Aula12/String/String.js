let print = console.log

/*
Concatenação de String

=> Também podemos juntar várias strings para formar uma nova
=> Chamamos esse processo de "concatenação" e utilizamos o sinal de "+" para fazê-lo
*/


//TEMPLATE STRING

let nome = "Gui"
let idade = 27
let frase = "Eu me chamo " + nome + " e tenho " + idade + " anos."
print(frase)
//-----------


//CONCATENAÇÃO
//Junta duas palavras

let palavra = "Gui"
let palavra2 = "lherme"
print(palavra + palavra2)
//----------------
let name = "Guilherme"
let age = 15
print(`Meu nome é ${name}, e tenho ${age} anos.`)
//--------------------


//LENGTH
//A propriedade "length" nos diz qual é o tamanho de uma string, incluindo espaços

nome = "Guilherme Quaiato Móta"
print(nome.length) //22
//--------------------------


//TOLOWERCASE()
//O método toLowerCase() transforma todas as letras da sua tring em minúsculas

let frse = "OlÁ"
let fraseMinuscula = frse.toLocaleLowerCase()
print(fraseMinuscula) //olá
//--------------------------


//TOUPPERCASE()
//Transforma todas as letras da sua string em maiúsculas

frse = "OlÁ"
let fraseMaiuscula = frse.toUpperCase()
print(fraseMaiuscula) //OLÁ
//-------------------------------


//MÉTODO TRIM()
//Retira os espaços que existem antes e depois da sua string

let email = " eduardomenezesdeo@gmail.com "
print(email.trim()) //"eduardomenezesdeo@gmail.com"
//---------------------------------


//MÉTODO INCLUDES(CARACTERES)
//O método includes(caracteres) determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando "true" ou "false"

frase = "Hoje comi cenoura"
print(frase.includes("cenoura")) //true
print(frase.includes("Kartoffel")) //false
//------------------------------------

//MÉTODO REPLACEALL(CHARS1, CHARS2)
//Troca todas as ocorrências de um conjunto de caracteres (chars1) por alguma outra coisa (chars2)

frase = "Hoje comi batata, e a batata estava boa"
print(frase.replaceAll("batata", "massa")) //Nova frase: Hoje comi massa, e a massa estava boa