let print = console.log
//ATV5
print("                            ATIVIDADE 5:")
function temp(celsius){
 fahrenheit = ((celsius * 9/5) +32)
    print(`Enquanto é ${celsius} graus na fórmula de celsius, em fahrenheit é ${fahrenheit}`)
    return temp;
}
temp(18)