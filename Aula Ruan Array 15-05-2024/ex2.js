let impares = [];
let soma = 0

for(i =0; i< 5; i++){
    let numero = Number(prompt("Digite um número:"));
    
    if(numero % 2 == 1){
        impares.push(numero)
        soma += numero
    }
}

alert(`A soma dos números impares é ${soma} e os números são ${impares.join('\n')}`)
//.join serve para escolher o que vai separar os elementos.
