function exercicioI() {
    alert("Somatório de dez valores e fazer média aritmética.")
    let numero1 = parseInt(prompt("Digite um número"))
    let contador = 1
    let numero2
    let media
    while (contador < 10) {
        numero2 = parseInt(prompt("Digite outro número"))
        numero1 += numero2
        contador++
    }
    media = numero1 / 10
    console.log(`O somatório dos números ficou ${numero1}\nMédia dos números ficou ${media} `)
}