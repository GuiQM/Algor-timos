let print = console.log
let genero = "Fantasia"
let preco = 15
let lanche = "Pizza"

if (genero == "Fantasia" && preco >= 15){
print("Bom filme E aroveite seu/sua", lanche,)
}else {
    print("Verifique o preço e o genero do seu filme")
}

//------

let nomeCompleto = "GuiQuaiato"
let tipoDeJogo = "in"
let etapa = "sf"
let categoria = 2
let ingressos = 7


print(nomeCompleto)

if (tipoDeJogo == "in"){
print ("Tipo de jogo: Internacional")}
else if (tipoDeJogo === "do"){
print("Tipo de jogo: Doméstico")}
else{
    print("Tipo de jogo não selecionado")
}

if (etapa == "sf"){
    print("Etapa do jogo: Semi-Final")}
    else if (etapa == "dt"){
print("Etapa do jogo: Decisão de terceiro lugar")}
    else if (etapa == "fn"){
    print("Etapa do jogo: Final")}
    else{
        print("Etapa do jogo: Não Selecionada")
    }

if (categoria == 1){
print("Categoria selecionada: 1")}
else if (categoria == 2){
print("Categoria selecionada: 2")}
else if (categoria == 3){
    print("Categoria selecionada: 3")}
    else if (categoria == 4){
        print("Categoria selecionada: 4")}
        else{
            print("Categoria: Não selecionada")
        }

        print("Ingressos", ingressos)