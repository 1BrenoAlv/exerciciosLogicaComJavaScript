function exercicioD() {
    alert("Somatório de números de grãos de trigos.")
    let contador = 1
    let trigo = 1
    let total = 0

    do {
        trigo *= 2
        total += trigo
        contador++
    } while (contador < 65)
    console.log(total)
}