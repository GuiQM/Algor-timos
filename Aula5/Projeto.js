let a = 10 //Cria uma variável com valor
let b = 10
console.log(b)
//10
b = 5
console.log (a, b) //Esse aqui vai mostrar 10, 5

let aa = 10
let bb = 20
cc = aa
bb = cc
aa = bb
console.log (aa, bb, cc) //Esse aqui vai mostrar 10, 10, 10

let name1 //Cria uma variável sem valor
let age1

console.log (typeof name1, typeof age1) //Vai imprimir undefined pois não possui um valor definido

let name = "Guilherme" //Quando String (texto), Usar "".
let age = 15 //Quando Number, deixar apenas o número.

console.log (typeof name, typeof age) //Imprimiu o name = Guilherme e o Age = 15

console.log ("Olá", name,", você tem", age, "anos")