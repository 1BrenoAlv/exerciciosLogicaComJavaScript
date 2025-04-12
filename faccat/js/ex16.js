function exercicio16(){
    alert("Calcular valor de maçãs.")
    let macas = parseInt(prompt("Digite quantas maçãs comprou: "))
    let total
    if (macas < 12 ) {
        total = macas * 1.30
        alert(`O valor das ${macas} maçãs ficou: R$${total}`)
    }
    else {
        total = macas * 1.00
        alert(`O valor das ${macas} maçãs ficou: R$${total}`)
    }
}