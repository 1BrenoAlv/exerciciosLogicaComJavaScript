function exercicio10(){
    alert("Calcular custo final")
    let custoFabrica = parseInt(prompt("Digite o custo de fabricação: "))
    let  distruidora = custoFabrica*28/100
    let  impostos = custoFabrica*45/100
    alert(`O custo final é R$${custoFabrica+distruidora+impostos}`)
}