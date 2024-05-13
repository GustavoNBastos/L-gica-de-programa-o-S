let numeros = []

let max =100
let min = - 100
let saida = document.getElementById('divSaida')
for(i=0; i<50;i++){
    let n = Math.floor(Math.random() * (max - min) ) + min;
    numeros.push(n)


}

// alert(numeros)

for(i=0;i<numeros.length;i++){
    saida.innerHTML+=numeros[i] + ','
}

saida.innerHTML += '<hr>'

for(i=0;i<numeros.length;i++){
    if(numeros[i]<0){
        numeros[i] = 0
    }

    saida.innerHTML += numeros[i] + ','
}