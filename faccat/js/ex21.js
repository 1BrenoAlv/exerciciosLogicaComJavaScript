function exercicio21() {
    alert("Calcular tempo de partida.")
    let inicio = parseInt(prompt("Digite o horário de início da partida:(Apenas horas inteiras) "))
    let fim = parseInt(prompt("Digite o horário do termino da partida:(Apenas horas inteiras) "))
    let total
    
    if (inicio < fim) {
        total = fim-inicio
        alert(`A partida durou ${total} horas`)
    }
    else{
        total = (24-inicio)+fim
        alert(`A partida durou ${total} horas`)
    }
}