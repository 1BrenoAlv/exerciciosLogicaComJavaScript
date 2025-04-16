function exercicio3() {
    alert("Somador de Números Positivos\nNúmeros negativos param a execução!")
    let valor = 0
    let final = 0

    while (valor >= 0) {
        valor = parseInt(prompt("Digite um número inteiro:"))
    
        if (valor > 0) {
            final += valor
        } 
        else if (valor < 0) {
            alert(`O valor da soma foi ${final}`)
        }
    }


}