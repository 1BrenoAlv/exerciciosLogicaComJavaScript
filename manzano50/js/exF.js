function exercicioF() {
    alert("Número sucessivo(digite um número negativo para parar).")
    let contador = 1
    let sucessor, numero, somatorio = 0
    let media = 0
    do {
        numero = parseInt(prompt(`Digite um número`))
        sucessor = numero + 1
        somatorio += sucessor
        console.log(`Sucessor de ${numero} é ${sucessor}`)
        if(numero < 0){
            media = somatorio / contador
            console.log(`O somatório ficou ${somatorio}\nA média ficou: ${media.toFixed(2)}`)
        }
        contador++
    } while (numero > 0)
}