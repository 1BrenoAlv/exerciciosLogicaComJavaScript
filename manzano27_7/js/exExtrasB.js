function exercicioExtraB(){
    alert("Calcular reajuste salárial.")
    let salario = parseFloat(prompt("Digite seu salário: "))
    let porcentagem = parseFloat(prompt("Digite a porcentagem do reajuste:"))
    let novoSalario = salario + porcentagem * salario / 100
    alert(`Novo salário é: R$ ${novoSalario.toFixed(2)}`)
}