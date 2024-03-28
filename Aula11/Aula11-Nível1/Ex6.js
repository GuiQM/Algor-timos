let print = console.log
//ATV6
print("                            ATIVIDADE 6: (EM MANUTENÇÃO)")
function numeroMaior(num6, num7, num8, num9, num0){
    if(num6 > num7 && num8 && num9 && num0){
        print(`Número ${num6} é o maior`)
    }else if (num7 > num6 && num8 && num9 && num0){
        print(`Número ${num7} é o maior`)
    }else if (num8 > num6 && num7 && num9 && num0){
        print(`Número ${num8} é o maior`)
    }else if (num9 > num6 && num7 && num8 && num0){
        print(`Número ${num9} é o maior`)
    }else if (num0 > num6 && num7 && num8 && num9){
        print(`Número ${num0} é o maior`)
    }else{
        print("Selecione todos os números")
    }
    return numeroMaior;
}
numeroMaior(1, 2, 3, 4, 5)