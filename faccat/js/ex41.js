function exercicio41() {
    alert("Calcula média!")
    let nome = (prompt("Digite o nome do aluno:"))
    let n1 = parseFloat(prompt("Digite a primeira nota:"))
    let n2 = parseFloat(prompt("Digite a segunda nota:"))
    let n3 = parseFloat(prompt("Digite a terceira nota:"))
    let mediaE = parseFloat(prompt("Digite a nota dos exercícios:"))
    let mediaF = ( n1 + n2 * 2 + n3 * 3 + mediaE ) / 7
    let conceito

    if (mediaF > 8.99) {
        conceito = "A"
    }
    else if (mediaF > 7.49 && mediaF < 9.0) {
        conceito = "B"
    }
    else if (mediaF > 5.99 && mediaF < 7.5) {
        conceito = "C"
    }
    else{
        conceito = "D"
    }

  alert(`Nome: ${nome}\nConceito: ${conceito}\nMédia de aproveitamento: ${mediaF.toFixed(2)}`)
}