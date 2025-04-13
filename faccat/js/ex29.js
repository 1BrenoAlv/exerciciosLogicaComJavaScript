function exercicio29() {
    alert("Qual o maior?")
    let numero1 = parseInt(prompt("Digite o 1° número inteiro:(Não digite valores iguais!) "))
    let numero2 = parseInt(prompt("Digite o 2° número inteiro:(Não digite valores iguais!) "))
    let numero3 = parseInt(prompt("Digite o 3° número inteiro:(Não digite valores iguais!) "))
    let soma

    if (numero1>numero2 && numero1>numero3 && numero2>numero3) {
        soma = numero1 + numero2
        alert(`1° e 2° número somam: ${soma}`)
    } 
    else if (numero2>numero1 && numero2>numero3 && numero3>numero1){
        soma = numero2 + numero3
        alert(`2° e 3° número somam: ${soma}`)
    }
    else {
        soma = numero3 + numero1
        alert(`3° e 1° número somam: ${soma}`)
    }
}