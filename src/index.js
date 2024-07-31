let resultado = quantidadeDeVitorias (130,10)
const heroi = "O Herói tem de saldo de "
const nivel = " Vitorias está no nível de "


function quantidadeDeVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

if (resultado < 10){
    console.log( heroi + resultado + nivel + "Ferro")
}else if (resultado <= 20){
    console.log( heroi + resultado + nivel + "Bronze")
}else if (resultado <= 50){
    console.log( heroi + resultado + nivel + "Prata")
}else if (resultado <= 80){
    console.log( heroi + resultado + nivel + "Ouro")
}else if (resultado <= 90){
    console.log( heroi + resultado + nivel + "Diamante")
}else if (resultado <= 100){
    console.log( heroi + resultado + nivel + "Lendario")
}else {
    console.log(heroi + resultado + nivel + "Imortal")
}