function exercicio24() {
    alert("Calcular salário total.")
    let salario = parseInt(prompt("Digite seu salário fixo: "))
    let vendasV = parseInt(prompt("Digite as vendas feitas por você: "))
    let salarioFinal

    if (vendasV > 1500) {
       salarioFinal = vendasV*0.03+(vendasV-1500)*0.05+salario
        alert(`Seu salário total é R$ ${salarioFinal}`)
    } else {
        salarioFinal = vendasV*0.03+salario
        alert(`Seu salário total é R$ ${salarioFinal}`)
    }
}