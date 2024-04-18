//1
//A)
const obj = {
    nome: "Catiana",
    apelido: ["Ca ", "Cati ", "Caca"]
}
console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelido}.`)

//B)
const obj2 = {
    ...obj,
    apelido: ["Ac", "Itac", "Acac"] 
}
console.log(`Eu sou ${obj2.nome}, mas pode me chamar de: ${obj2.apelido}.`)

console.log("-----------------------------------------------------")

//2

const pessoa = [
    {nome: "Juan"},
    {idade: 20},
    {profissao: "Motorista de Uber"}
]

let nom = pessoa[0].nome.length
let pr = pessoa[2].profissao.length
console.log(pessoa, nom, pr)
console.log(nom)
console.log(pr)

