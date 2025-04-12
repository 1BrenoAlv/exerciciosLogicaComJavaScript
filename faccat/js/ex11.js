function exercicio11(){
    alert("Calcular salário.")
    let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "))
    let comissaoC = parseFloat(prompt("Digite o valor da comissão fixa: "))
    let vendas = parseInt(prompt("Digite o total de suas vendas: "))
    let salarioF = salarioFixo+comissaoC+(vendas*5/100)
    alert(`O custo final é R$${salarioF}`)
}