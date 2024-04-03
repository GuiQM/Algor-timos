let print = console.log


const readlineSync = require("readline-sync"); /*
const nome = readlineSync.question("Quel o seu nome? ")
const email = readlineSync.question("Qual o seu email? ")
print(`O email ${email} foi cadastrado. Seja bem-vinda(o) ${nome}!`)


const comida = ["Camarão", "Arroz com Galinha", "Pizza", "Hamburguer", "Carreteiro"]
const comidaPref = readlineSync.question("Qual sua comida preferida? ")
print("Essas são as minhas comidas preferidas: ","\n", comida[0], "\n", comida[1], "\n", comida[2], "\n", comida[3], "\n", comida[4])
let i = 1
comida [i] = comidaPref
print(comida) */


const tarefa1 = readlineSync.question("Escreva 3 tarefas, uma de cada vez, que terá que fazer: Tarefa 1-")
const tarefa2 = readlineSync.question("Tarefa 2-")
const tarefa3 = readlineSync.question("Tarefa 3-")

let listaDeTarefas = [tarefa1, tarefa2, tarefa3]
print(listaDeTarefas)
const indice = readlineSync.question("Qual delas foi realizada?  (0 = primeira, 1 = Segunda e 2 = Terceira) ")

listaDeTarefas.splice(indice,  1)
print(listaDeTarefas)