function exercicio42() {
    alert("Sistema para saber se está apto a se aposentar.")
    let codigo = parseInt(prompt("Digite seu código (mín. 4 digitos):"))
    let anoN = parseInt(prompt("Digite o ano de seu nascimento:"))
    let anoI = parseInt(prompt("Digite o ano que ingressou na empresa:"))
    let anoAtual = parseInt(prompt("Digite o ano atual:"))
   
    idade = anoAtual - anoN
    idadeE = anoAtual - anoI
    alert(`Código: ${codigo}\nIdade: ${idade}\nAnos de empresa: ${idadeE}`)

    if (idade > 64 || idadeE > 29 || idade > 59 || idadeE > 24) {
        alert("Requerer aposentadoria")
    }
    else{
        alert("Não Requerer")
    }
}