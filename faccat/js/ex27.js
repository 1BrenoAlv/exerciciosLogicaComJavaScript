function exercicio27() {
    alert("Dizer se o número é negativo,positivo ou igual a zero.")
    let numero = parseInt(prompt("Digite um número inteiro: "))

    if (numero == 0) {
        alert(`Igual a zero.`)
    } 
    else if (numero>0){
        alert(`Número Positivo.`)
    }
    else {
        alert(`Número Negativo.`)
    }
}

