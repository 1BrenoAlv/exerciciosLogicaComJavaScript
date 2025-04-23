function exercicioB() {
    alert("Somatória dos Pares de 2 a 500.")
    let contador = 1
    let pares = 0

    do {
        if (contador % 2 == 0) {
            pares += contador
        }
        contador++
    } while (contador < 501)

    console.log(`A somatória é  ${pares}`)
}