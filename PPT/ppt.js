let print = console.log

const { constrainedMemory } = require('process');
const readline = require ('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Escolha entre 1-Pedra, 2-Papel ou 3-Tesoura", (resposta) => {
    
    let personagens = ["Pedra", "Papel", "Tesoura"]


    function algo (){
        let outracoisa = personagens.length
        let ajuda = Math.floor(Math.random(personagens)* outracoisa)
        
        return personagens [ajuda];
    }
    print(algo())

    rl.close()
})

