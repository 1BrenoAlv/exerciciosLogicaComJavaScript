function exercicio9() {
    alert("Fatorizando")
    let num = parseInt(prompt("Digite um número: "))
    let fatorial = 1
    while (num > 0) {
        fatorial = fatorial * num
        num -= 1
    }
        alert(`O fatorial é ${fatorial}`)  
    
}