//EXERCÍCIO 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

/*
A) Irá imprimir 10 e 50
B) Dará erro
*/

//EXERCÍCIO 2

let textoDoUsuario = prompt("Eu gosto de cenoura");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/*
A) Dirá se o texto possui "cenoura" nele.
B) I: True. II:True. III:False.
*/

//ATIVIDADE 3

