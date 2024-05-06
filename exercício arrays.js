
let numeros = []

for(let i =0; i<25;i++){
    let n = Math.ceil(Math.random()*100)
    numeros.push(n)
}

// let n1 = Number(prompt("Digite um número entre 1 e 24"));
// let n2 = Number(prompt("Digite outro número entre 1 e 24"));

let vetor = document.getElementById('divVetor')
for(i=0; i<numeros.length;i++){
    vetor.innerHTML += numeros[i]+ '<br>'
}