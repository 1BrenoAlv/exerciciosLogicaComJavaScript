function exercicio7() {
    alert("Adivinhe o  Número!")
    let num = parseInt(prompt("Digite um número:(0-10) "))

    while (num > -1 && num < 11 && num !=  7) {
       num = parseInt(prompt("Digite outro número:(0-10) "))
    }
    if(num == 7){
        alert(`ACERTOU!`)  
    }
}