function exercicio13(){
    alert("Calcular média.")
    let numero1 = parseFloat(prompt("Digite o 1° número: "))
    let numero2 = parseFloat(prompt("Digite o 2° número: "))
    let numero3 = parseFloat(prompt("Digite o 3° número: "))
    let media = (numero1*2+numero2*3+numero3*5)/10
    alert(`A média é ${media}.`)
}