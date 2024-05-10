let notas = [];

for (let i = 0; i < 6; i++) {
    let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
    notas.push(nota);
}
notas.sort();


let soma = 0;
for (let i = 1; i < notas.length - 1; i++) {
    soma += notas[i];
}

let media = soma / 4; 

alert("A média das notas, descartando a maior e a menor, é: " + media);