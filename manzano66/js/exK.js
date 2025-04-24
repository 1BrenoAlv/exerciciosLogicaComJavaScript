function exercicioK() {
    alert("Algoritmo de soma dos fatoriais ímpares de 1 a 10.")
    let soma = 0

    for (let numero = 1; numero < 11; numero += 2) {
        let fatorial = 1
        for (let i = 1; i <= numero; i++) {
            fatorial *= i
        }
        soma += fatorial
    }
    console.log(`Somatório dos fatoriais ímpares de 1 a 10: ${soma}`)
}