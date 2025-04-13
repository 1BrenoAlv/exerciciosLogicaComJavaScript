function exercicio26() {
    alert("Calcular quantidade no estoque")
    let quantidade = parseInt(prompt("Digite a quantidade em estoque: "))
    let minima = parseInt(prompt("Digite a quantidade minima de um produto: "))
    let maxima = parseInt(prompt("Digite a quantidade máxima de um produto: "))
    let media = (maxima+minima)/2

    if (quantidade >= media) {
        alert(`Não efetuar compra.`)
    } else {
        alert(`Efetuar compra.`)
    }
}