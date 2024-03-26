let print = console.log


//EXERCÍCIO 1

let pessoa = function (nome, idade, endereço, profissão){
return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}.`)
}
let info = pessoa("Guilherme", 15, "Esteio", "Estudante")
print (info)


//EXERCÍCIO 2
//A)
let Numero = function (num1, num2){
    return (num1 + num2);
    

}
let resultado = Numero(8, 9)
print(resultado)

//---------------------------------
//B)
let NUM = function (NUM1, NUM2){
    if (NUM1 >= NUM2){
        print ("True")
        }else{
            print("False")
        }
    return (NUM1 >= NUM2)
    }
    let RESULT = NUM(9, 8)

//----------------------------------
//C)
let Num = function (Num1){
    if (Num1 %2){
        print("False")
    }else{
        print("True")
    }
    return (Num1 %2)
}
let Result = Num(9)

//----------------------------------
//D)
let texto = "Alguma coisa"

print(texto.length)
print(texto.toUpperCase(texto))


//EXERCÍCIO 3
//...