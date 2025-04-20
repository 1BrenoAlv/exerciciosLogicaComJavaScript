function exercicioC() {
    alert("Calcular notas e saber se foi aprovado.")
    let nota1 = parseFloat(prompt("Digite sua primeira nota:"))
    let nota2 = parseFloat(prompt("Digite sua segunda nota:"))
    let nota3 = parseFloat(prompt("Digite sua terceira nota:"))
    let nota4 = parseFloat(prompt("Digite sua quarta nota:"))
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    
    if (valor > 4.99) {
        alert(`Nota ${media} | Aluno Aprovado!!!`)
    }
    else{
        alert(`Nota ${media} | Aluno Reprovado!!!`)
    }
}