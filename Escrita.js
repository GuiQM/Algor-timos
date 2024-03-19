let idade = 18
let print = console.log

if (idade >=18){
    print("Você pode dirigir")
}
else{
    print("Você não pode dirigir, faça 18 anos primeiro.")
}

//-----

let horario

if (horario === "manhã"){
print("Bom dia!")

}else if (horario === "tarde"){
print("Boa tarde!")

}else if (horario === "noite"){
    print("Boa noite!")

}else { 
print("Horário não definido.")
}

let turno

switch(turno){
case "Manhã":
    print("Bom Dia!")
break;

case "Tarde":
    print("Boa Tarde!")
break;

case "Noite":
    print("Boa Noite!")

break;
default:
print("Horário não definido")
break;
}

//-----

let genero = "Fantasia"
let preco = 15
if (genero == "Fantasia" && preco == 15){ true
print("Bom filme!")
}else {
    print("Verifique o preço e o genero")
}