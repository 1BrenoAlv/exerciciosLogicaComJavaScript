function exercicio7(){
    alert("Contar sua idade em dias")
    let ano = parseInt(prompt("Digite sua idade em anos: "))
    let meses = parseInt(prompt("Digite sua idade em meses: "))
    let dias = parseInt(prompt("Digite sua idade em dias: "))
    let calculo = ano * 365 + meses * 30 + dias
    alert("Sua idade em dias é " + calculo)
}