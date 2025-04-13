function exercicio22() {
    alert("Calcular horas de serviço.")
    let horasT = parseInt(prompt("Digite as suas horas trabalhadas no mês: "))
    let salarioH = parseFloat(prompt("Digite seu salário por hora: "))
    let total
    let horasExtra

    if (horasT > 160) {
        horasExtra = (horasT - 160) * salarioH * 1.5;
        total = 160 * salarioH + horasExtra;
        alert(`Seu salário ficou R$ ${total.toFixed(2)}`)
    } else {
        total = horasT * salarioH;
        alert(`Seu salário ficou R$ ${total.toFixed(2)}`)
    }
}