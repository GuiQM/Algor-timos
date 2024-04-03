let print = console.log

//Crie uma variável que vai referenciar a biblioteca
const readlineSync = require('readline-sync');

//Fazendo perguntas e armazendo as respostas
const nome = readlineSync.question("Qual o seu nome? ");
const idade = readlineSync.question("Qual a sua idade? ");
const cidade = readlineSync.question("Qual a sua cidade? ");

//Exibindo respostas
print("Nome: " + nome);
print("Idade: " + idade);
print("Cidade: " + cidade);