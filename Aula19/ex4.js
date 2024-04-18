const pessoa = {
    nome: "Pâmela",
    idade: 15,
    GenMusPref: "Diversos"
}

function criaNovoObjeto(objeto){
const pessoa2 = {
...pessoa,
comidaPref: ["Camarão", "Risoto", "Massa", "Lasanha"],
melAmigo:{
    nome: "Matheus",
    idade: 15,
        }
    }
    console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas são ${pessoa2.comidaPref}. Seu melhor amigo se chama ${pessoa2.nome} e tem ${pessoa2.idade} anos.`)
}
criaNovoObjeto(pessoa)


