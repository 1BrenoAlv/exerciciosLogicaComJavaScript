function exercicio23() {
    alert("Calcular peso ideal.")
    let nome = (prompt("Digite seu nome: "))
    let altura = parseFloat(prompt("Digite sua altura: "))
    let peso = parseFloat(prompt("Digite seu peso: "))
    let sexo = (prompt("Qual o seu sexo?(M-masculino F-feminino) "))
    let pesoIdeal

    if (sexo = "M") {
        pesoIdeal = (72.7*altura)-58
        alert(`Nome: ${nome}\nAltura: ${altura}\nSexo: Masculino\nPeso Ideal: ${pesoIdeal.toFixed(2)}`)
    } else {
        pesoIdeal = (62.1*altura)-44.7
        alert(`Nome: ${nome}\nAltura: ${altura}\nSexo: Feminino\nPeso Ideal: ${pesoIdeal.toFixed(2)}KG`)
    }
}