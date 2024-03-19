
//ATIVIDADE 1
const respostaDoUsuario = "-1" 
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) { console.log("Passou no teste.") } 
else { console.log("Não passou no teste.") }
//o código analizará e dirá se a pessoa passou no teste ou não.
//Se for número natural, passou no teste.
//Se for número negativo, não passou no teste.

//-----

//ATIVIDADE 2
let fruta
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break
  case "Maçã":
    preco = 2.25
    break
      case "Uva":
    preco = 0.30
    break
  case "Pêra":
    preco = 5.5
    break // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//Esse código serve para dizer a fruta e seu preço.
//Se for maçã, imprimirá "O preço da fruta "Maçã" é R$2.25
//O preço da fruta  undefined  é  R$  5

//-----

//ATIVIDADE 3
const numer = Number(("50"))

if(numer > 0) {
  console.log("Esse número passou no teste")
	let mensagem = ("Essa mensagem é secreta!!!")
}

console.log(mensagem)
//Está criando uma const de number 50
// Se for um número >0 aparecerá "Esse número passou no teste!", Se for <0 aparecerá
//Sim. Não se pode declarar uma variável dentro do if.