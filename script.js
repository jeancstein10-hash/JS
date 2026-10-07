let nome = "Carlos"
let pontos = 2000
let tempoDeCasa = 2
if(pontos <= 99) {
    console.log(nome + " Voce é um cliente nível Bronze")
} else if(pontos <= 499) {
    console.log(nome + " Voce é um cliente nível Prata")
} else if(pontos <= 999) {
    console.log(nome + " Voce é um cliente nível Ouro")
} else if(pontos >= 1000 && tempoDeCasa >= 1){
    console.log(nome + " Voce é um cliente nível Diamante")
}

contagem = 20
while(contagem > 0) {
    console.log(contagem);
    contagem--;

//