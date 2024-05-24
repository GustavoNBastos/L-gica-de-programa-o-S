
1
// Função anônima

// const somar = function (numero1, numero2){
//     return numero1 + numero2
// }
// // Eu não posso acessar essa função antes dela ser formada
// let resultado = somar (94, 78)

// alert(`O resultado é ${resultado}`)
// Variaveis (let) eu posso alterar o visualViewport, mas  (const) não

2
// arrow function 

// const somar = (numero1, numero2) => {
    
//     return numero1 + numero2

// }
// let resultado = somar (94, 78)

3
// variação de arrow function que só pode ser escrita se tiver uma linha de código simples, 
// sem if, while, for e etc 

// const somar = (numero1, numero2) => numero1 + numero2

4
// funcao callback
// function processarAposReceberNome(meDeUmaFuncao){
//     letnome= prompt('Qaul é o seu nome?')
//     meDeUmaFuncao(nome)
// }

// processarAposReceberNome( function(nomeRecebido){
//         alert(`Feliz aniversário ${nomeRecebido}`)
// })

5
// // função callback em um array - 
// executa uma função e cria um novo array para os itens que retornarem true na função
// let lista = [1,2,3,4,5,6,7,8,9,10]
// let listaPares = lista.filter( itemRodando => {
//     console.log(`Estou verificando o ${itemRodando}`)
//     return itemRodando % 2 == 0 
//     ou 
// let listaPares = lista.filter(itemRodando => itemRodando % 2 == 0)
// })

// console.log(listaPares)