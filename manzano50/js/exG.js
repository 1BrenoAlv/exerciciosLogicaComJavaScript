function exercicioG() {
    alert("Algoritmo de soma dos fatoriais de números ímpares de 1 a 9.")
    let numero = 1
    let soma = 0
    do {
        let fatorial = 1
        let contador = 1
        do {
            fatorial *= contador
            contador++
        } while (contador <= numero)
        soma += fatorial
        numero += 2
    } while (numero <= 9)

    console.log(`Somatório dos fatoriais é ${soma}`)
}
