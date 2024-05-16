// let notas = [];

// for (let i = 0; i < 6; i++) {
//     let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
//     notas.push(nota);
// }
// notas.sort();


// let soma = 0;
// for (let i = 1; i < notas.length - 1; i++) {
//     soma += notas[i];
// }

// let media = soma / 4; 

// alert("A média das notas, descartando a maior e a menor, é: " + media);

// let notas = []
// let menor = 11
// let maior = 0
// let soma = 0

// for (let i = 0; i < 6; i++) {
//     let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
//     notas.push(nota)


//     soma += nota 
//     // verificar se é a nota maior
//     if(nota > maior){
//         maior = nota
//     }
//     //verificar se é a menor nota
//     if(nota < menor){
//         menor = nota
//     }
// }

// let somaFinal = soma - maior - menor
// let media = somaFinal / 4 

// alert( `As notas digitadas foram ${notas.join(', ')}, retirando a menor que for ${menor} e a maior que foi ${maior}, a média ficou em ${media.toFixed(2)}`)

let notas = []

let soma = 0

for (let i = 0; i < 6; i++) {
    let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
    notas.push(nota)

}
// colocar em ordem crescente
notas.sort((atual, proximo)=> atual - proximo)
//remover a menor
notas.shift()
// remover a ultima
notas.pop()

 soma = notas[0] + notas[1] + notas[2] + notas[3]
let media = soma / 4