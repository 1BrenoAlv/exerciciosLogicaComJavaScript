function exercicio17() {
    alert("Média Escolar.")
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let media = (nota1 + nota2) / 2
    if (media < 6) {
        alert(`Sua média é: R$${total} Aprovado!`)
    }
    else {
        alert(`Sua média é: R$${total} Reprovado!`)
    }
}