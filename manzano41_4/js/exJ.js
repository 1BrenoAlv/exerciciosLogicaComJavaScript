function exercicioI() {
    alert("Validação de números.");
    let num = parseFloat(prompt("Digite um número: "))
    
    if (num > 0 && num < 10) {
        alert("O valor está na faixa permitida.")
    }
    else{
        alert("O valor está fora da faixa permitida.")
    }
}