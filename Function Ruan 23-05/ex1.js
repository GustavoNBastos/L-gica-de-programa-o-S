// Crie uma função anônima para gerar uma mensagem de convite de casamento, quedeve receber nomeConvidado, data, horário, local e nomeNoivos e a partir dissomonte uma mensagem convidando a pessoa para o casamento. Realize pelo menos 3chamadas para ela e valide se o retorno foi o esperado.

let conviteCasamento = function(nomeConvidado,data, horario, local, noivos){
    alert(`Olá ${nomeConvidado},\nLhe convido para no dia ${data}, às ${horario} horas, no local ${local}, prestigiar o casamento de ${noivos}`)
}

let nome = prompt('Qual é o nome do convidado?')


mostrarConvite(nome, '23/05', '20', 'Igreja', 'Gustavo e Yasmin')
mostrarConvite(nome, '23/05', '20', 'Igreja', 'Gustavo e Yasmin')
mostrarConvite(nome, '23/05', '20', 'Igreja', 'Gustavo e Yasmin')


