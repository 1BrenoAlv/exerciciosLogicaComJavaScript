function exercicioI() {
    alert("Série de Fibonacci.")
    let numero1 = 1
    let numero2 = 1
    let i
    let fibonacci
    console.log(`${numero1}`)
    console.log(`${numero2}`)

    for (i = 3; i < 16; i++) {
        fibonacci = numero1 + numero2
        console.log(`${fibonacci} |`)
        numero1 = numero2
        numero2 = fibonacci
    }
}