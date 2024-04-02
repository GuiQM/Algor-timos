let print = console.log

let personagens = ["Naruto", "Sasuke", "Sakura", "Kakashi", "Obito"]


function quemSouEu (){
    let algo = personagens.length
    let indiceAleatorio = Math.floor(Math.random(personagens)* algo)
    
    return personagens [indiceAleatorio];
}
print(quemSouEu())