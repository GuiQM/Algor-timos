let print = console.log
//ATV1.NV2
print ("                            ATIVIDADE 1.NV2:")
function verificarNumero (num1){
if (num1 > 0){
    print(`O número ${num1} é positivo`)
}else if (num1 < 0){
    print(`O número ${num1} é negativo`)
}else if (num1 == 0){
    print(`O número ${num1} é neutro`)
}else{
    print(`Número não definido`)}
    return verificarNumero
}
verificarNumero (0)