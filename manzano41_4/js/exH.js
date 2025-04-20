function exercicioH() {
    alert("Identificar o maior e menor número");
    let num1 = parseFloat(prompt("Digite o primeiro número: "))
    let num2 = parseFloat(prompt("Digite o segundo número:"))
    let num3 = parseFloat(prompt("Digite o terceiro número: "))
    let num4 = parseFloat(prompt("Digite o quarto número: "))
    let num5 = parseFloat(prompt("Digite o quinto número: "))
    let maior = num1
    let menor = num1

    if (num2 > maior) {
        maior = num2
    }
    if (num3 > maior){
        maior = num3
    }
    if (num4 > maior){
        maior = num4
    }
    if (num5 > maior){
        maior = num5
    }
    if (num2 < menor) {
        menor = num2
    }
    if (num3 < menor){
        menor = num3
    }
    if (num4 < menor){
        menor = num4
    }
    if (num5 < menor){
        menor = num5
    }

    alert(`O maior valor é ${maior} e o menor é ${menor}`)
}