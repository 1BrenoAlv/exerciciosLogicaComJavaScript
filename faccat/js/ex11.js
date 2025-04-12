function exercicio11(){
    alert("Calcular salário.")
    let salarioFixo = parseInt(prompt("Digite seu salário fixo: "))
    let comissaoC = parseInt(prompt("Digite o valor da comissão fixa: "))
    let vendas = parseInt(prompt("Digite o total de suas vendas: "))
    let salarioF = salarioFixo+comissaoC+(vendas*5/100)
    alert(`O custo final é R$${salarioF}`)
}