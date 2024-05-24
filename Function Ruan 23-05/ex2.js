// Crie um programa que recebe 10 números de inscrição para um campeonato. A partirdesses números, utilizando o método filter, crie um Array para os jogadores do time denúmeros pares e um outro para os jogadores do time de números ímpares. Ao finalexiba na tela se os times estão com a mesma quantidade de jogadores.



// let inscrição = []

// for(i=1;i<=10;i++){
//     let jogadores = Number(prompt(`Digite a inscrição do ${i}º jogador`))

//     inscrição.push(jogadores)
// }


// let listaPares = inscrição.filter(jogador => jogador % 2 == 0)

// alert(listaPares)

// let listaImpares = inscrição.filter(jogador => jogador % 2 != 0)


// alert(listaImpares)

if(listaPares.lenght == listaImpares){
    alert('Os times estão equilibrados')

}else {
    alert('Os times estão desequilibrados')
}

// funçao anonima
// let listaImpares = inscrição.filter(function (jogador){
//    return jogador % 2 != 0
// })