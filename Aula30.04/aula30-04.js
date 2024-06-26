const rd = require('readline-sync')


let bancoDeDados = []

function adicionarAbrigo(){
    
   
abrigoNome = rd.question("Qual o nome do abrigo? ")
abrigoNome = abrigoNome.toLowerCase()  
   

abrigoEndereco = rd.question("Qual o endereço? ")
abrigoEndereco = abrigoEndereco.toLowerCase()  


abrigoCidade = rd.question("Qual a cidade em que se encontra? ")
abrigoCidade = abrigoCidade.toLowerCase()  
 

abrigoTelefone = rd.question("Qual o telefone? ")
abrigoTelefone = abrigoTelefone.toLowerCase()  
 

abrigoCapacidade = rd.question("Qual a capacidade máxima? ")
abrigoCapacidade = abrigoCapacidade.toLowerCase() 

bancoDeDados.push({
    Nome: abrigoNome,
    Endereco: abrigoEndereco,
    Cidade: abrigoCidade,
    Telefone: abrigoTelefone,
    Capacidade: abrigoCapacidade
})
}

function exibirMenu(){
    console.log("BEM VINDO AO MENU! Escolha: \n Precione 1 para adicionar um novo abrigo. \n  Precione 2 para listar os abrigos.  \n precione 3 para procurar Abrigo.  \n Precione 4 para Sair.")
}

function ProcessarEscolha(opcao)
{
switch (opcao){

    //FUNCIONANDO
    case "1":
        adicionarAbrigo()
        break;

        
    case "2":
         console.log(bancoDeDados)
        break;

       
    case "4":
        console.log("Encerrando...")
        return true
        
            case "3":
    if (bancoDeDados.length === 0) {
        console.log("Não há nenhum abrigo.")
    } else {
        let procurarAbrigo = rd.question("Qual a sua cidade? ").toLowerCase();
        const abrigosEncontrados = bancoDeDados.filter(abrigo => abrigo.Cidade.toLowerCase() === procurarAbrigo);
        if (abrigosEncontrados.length === 0) {
            console.log("Nenhum abrigo encontrado nessa cidade.")
        } else {
            console.log(abrigosEncontrados);
        }
    }
    break;
    }
}

function main()
{
    let encerrar = false
    while(!encerrar)
    {exibirMenu()
     let opcao = rd.question ('Digite o numero da opcao desejada: ')
      encerrar = ProcessarEscolha(opcao)
    }
}
main()