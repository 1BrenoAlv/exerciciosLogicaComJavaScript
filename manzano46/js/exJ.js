function exercicioJ() {
    alert("Somatório de números pares entre 50 à 70 e fazer média aritmética.")
    let contador = 50
    let divisao
    let soma
    let media
    while (contador < 71) {
        if (contador % 2 ==0){
            soma += contador
            divisao++
        }
        contador++
    }
    media = soma / divisao
    console.log(`O somatório dos números pares ficou ${soma}\nMédia dos números pares ficou ${media} `)
}