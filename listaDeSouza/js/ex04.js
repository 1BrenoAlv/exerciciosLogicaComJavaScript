function exercicio4() {
    alert("Tabuada")
    let valor = parseInt(prompt("Digite um número inteiro:"))
    let contador = 0
    let multiplicado

    while (contador < 11) {
        multiplicado = valor * contador
        alert(`${valor} x ${contador} = ${multiplicado}`)   
        contador++
    }


}