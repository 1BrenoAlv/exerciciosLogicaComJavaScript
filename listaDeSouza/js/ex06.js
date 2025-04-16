function exercicio6() {
    alert("Calcular média")
    let num = parseInt(prompt("Digite uma nota:(0-10) "))
    let contador = 0
    let soma = 0
    let media

    while (num > -1 && num < 11) {
        soma += num
        contador++
       num = parseInt(prompt("Digite outra nota:(0-10) "))
    }
    if(contador>0){
        media = soma / contador
        alert(`Você digitou ${contador} notas.\nA média é ${media}`)  
    }
    else{
        alert("Notas inválidas")
    }
}