let filme =
{
    elenco: ["Steve Carrel", "Pierre Coffin", "Russell Brand"],
    nome: "Minions",
    diretor: "Andrew Adamson",
    assisti: true
}

filme.personagem = ["Gru", "Kevin", "Dr. Nefário"]

console.log(`${filme.elenco[0]} fez ${filme.personagem[0]}, ${filme.elenco[1]} fez ${filme.personagem[1]} e ${filme.elenco[2]} fez ${filme.personagem[2]}.`)

filme.elenco[0] = "Xuxa"
console.log(`${filme.elenco[0]} fez ${filme.personagem[0]}, ${filme.elenco[1]} fez ${filme.personagem[1]} e ${filme.elenco[2]} fez ${filme.personagem[2]}.`)