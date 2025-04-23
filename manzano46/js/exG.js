function exercicioG() {
    alert("Série de Fibonacci.")
    let numero1 = 1
    let numero2 = 1
    let contador = 3
    let fibonacci
    console.log(`${numero1} |`)
    console.log(`${numero2} |`)

    while (contador < 16) {
        fibonacci = numero1 + numero2
        console.log(`${fibonacci} |`)
        numero1 = numero2
        numero2 = fibonacci
        contador++
    }
}