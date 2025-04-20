function exercicioG() {
    alert("Números divisíveis por 2 e 3.");
    let num1 = parseFloat(prompt("Digite o primeiro número: "))
    let num2 = parseFloat(prompt("Digite o segundo número:"))
    let num3 = parseFloat(prompt("Digite o terceiro número: "))
    let num4 = parseFloat(prompt("Digite o quarto valor: "))

    if (num1 % 2 == 0 && num1 % 3 == 0) {
        alert(`O primeiro valor é divisível!`)
    }
    if (num2 % 2 == 0 && num2 % 3 == 0) {
        alert(`O segundo valor é divisível!`)
    }
    if (num3 % 2 == 0 && num3 % 3 == 0) {
        alert(`O terceiro valor é divisível!`)
    }
    if (num4 % 2 == 0 && num4 % 3 == 0) {
        alert(`O quarto valor é divisível!`)
    }

}