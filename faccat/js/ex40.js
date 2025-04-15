function exercicio40() {
    alert("Mercadinho de Bairro")
    let produto = (prompt("Digite o nome do produto:"))
    let quantidade = parseInt(prompt("Digite a quantidade:"))
    let preco = parseFloat(prompt("Digite o preço unitário:"))
    let total, totalApagar, desconto
    total = quantidade * preco

    if (quantidade <= 5) {
        desconto = total * 2 / 100
        totalApagar = total - desconto
    }
    else if (quantidade > 5 && quantidade < 11) {
        desconto = total * 3 / 100
        totalApagar = total - desconto
    }
    else {
        desconto = total * 5 / 100
        totalApagar = total - desconto
    }
    alert(`Produto: ${produto}\nTotal: R$ ${total}\nDesconto: R$ ${desconto}\nO total a ser pago é: R$ ${totalApagar}`)
}