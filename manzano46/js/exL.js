function exercicioL() {
    alert("Valores positivos.")
    let numero = parseInt(prompt("Digite um número positivo(número negativo para encerrar):"))
    let maior, menor
    if (numero < 0) {
        console.log("Nenhum valor positivo foi informado.")
    } else {
        maior = numero
        menor = numero
        while (numero > -1) {
            if (numero > maior) {
                maior = numero
            } if (numero < menor) {
                menor = numero
            }
            numero = parseInt(prompt("Digite um número positivo(número negativo para encerrar):"))
        }
        console.log(`Maior valor digitado: ${maior}\nMenor valor digitado: ${menor}`)
    }
}