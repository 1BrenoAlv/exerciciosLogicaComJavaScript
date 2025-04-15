function exercicio35() {
    alert("Calcular valor de combustível!")
    let combustivel = (prompt("Qual combustível: (Digite A para álcool e G para gasolina) "))
    let litros = parseInt(prompt("Digite a quantidade de combustível: "))
    let total
    if (combustivel == "A" && litros < 21) {
        total = litros * 2.90
        total = total - 3 * total / 100
        alert(`O álcool deu o total de R$ ${total.toFixed(2)}`)
    }
    else if (combustivel = "A" && litros > 20) {
        total = litros * 2.90
        total = total - 5 * total / 100
        alert(`O álcool deu o total de R$ ${total.toFixed(2)}`)
    }
    else if (combustivel = "G" && litros < 21) {
        total = litros * 3.30
        total = total - 4 * total / 100
        alert(`A gasolina deu o total de R$ ${total.toFixed(2)}`)
    }
    else {
        total = litros * 3.30
        total = total - 6 * total / 100

        alert(`A gasolina deu o total de R$ ${total.toFixed(2)}`)
    }
}