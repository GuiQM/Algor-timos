let print = console.log
//ATV8
print("                            ATIVIDADE 8:")
function numeroMenor(num10, num11){
    if(num10 < num11){
        print(`Número ${num10} é menor.`)
    }else if (num11 < num10){
        print(`Número ${num11} é menor.`)
    }else{
        print("Selecione 2 números")
    }
    return numeroMenor
}
numeroMenor(1, 2)