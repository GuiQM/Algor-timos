let print = console.log

let nome = "Gui" //Escopo Global

function Chamanome () {
    print(nome)
    function imprimefrase (){
        print(`Olá ${nome}, como vai?`)
    }
    imprimefrase()
}

Chamanome()

//------------------------

const a = 1 //Declaração da variável a no escopo global

function imprimevariavel () {
    const b = 2 //Declaração da variável b no escopo local
    print("Variável a", a) 
    print("Variável b", b)
}
imprimevariavel()

print("Variável a", a)

/* NÃO É POSSÍVEL ACESSAR A VARIÁVEL B, pois a variável B foi criada dentro de um escopo local, enquanto
Os prints foram executados fora de tal escopo*/
