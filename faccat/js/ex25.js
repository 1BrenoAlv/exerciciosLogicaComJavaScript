function exercicio25() {
    alert("Saldo bancário positivo ou negativo.")
    let conta = parseInt(prompt("Digite o número da conta:(4 digitos) "))
    let saldo = parseFloat(prompt("Digite seu saldo bancário: "))
    let credito = parseFloat(prompt("Digite seu crédito bancário: "))
    let debito = parseFloat(prompt("Digite seu débito bancário: "))
    let saldoAtual = saldo-debito+credito

    if (saldoAtual >= 0) {
        alert(`Conta: ${conta}\nSaldo: ${saldo}\nDébito: ${debito}\nCrédito: ${credito}\nSaldo Positivo!`)
    } else {
        alert(`Conta: ${conta}\nSaldo: R$ ${saldo}\nDébito: R$ ${debito}\nCrédito: R$ ${credito}\nSaldo Negativo!`)
    }
}