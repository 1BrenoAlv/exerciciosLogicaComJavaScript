function exercicioE() {
    alert("Algoritmo de soma dos fatoriais de 1 a 15.")
    let contador = 1
    let fatorial, numero, receba
    let mult = 0
    do {
        numero = parseInt(prompt(`Digite o ${contador}º valor`))
        fatorial = 1
        receba = 1
        do {
            fatorial *= receba
            receba++
        } while (receba <= numero)
        mult += fatorial
        contador++
    } while (contador <= 15)
    console.log(`Somatório dos fatoriais dos 15 valores ${mult}`)
}