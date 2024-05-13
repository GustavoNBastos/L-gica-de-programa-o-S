let numerosPai = []
let numerosMae = []
let numerosFilho = []

let max =100
let min = 0
let saida = document.getElementById('divSaida')

for(i=0; i<50;i++){
    let nP = Math.floor(Math.random() * (max - min) ) + min;
    numerosPai.push(nP)
}


for(i=0; i<50;i++){
    let nM = Math.floor(Math.random() * (max - min) ) + min;
    numerosMae.push(nM)
}

for ( i = 0; i < 50; i++){
    if (i % 2 === 0) {
        
        numerosFilho.push(numerosPai[i]);
    } else {
        
        numerosFilho.push(numerosMae[i]);
 }

}
