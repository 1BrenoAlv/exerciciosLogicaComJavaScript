function exercicio20_01() {
    alert("Ordem Decrescente.")
    let numero1 = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número(não pode ser igual ao anterior): "))
    
    if (numero1 == numero2) {
        alert(`Número Iguais`)
    }
    else if (numero1 < numero2){
        alert(`Números digitados em ordem decrescente ficou: ${numero2} | ${numero1}`)
    }
    else{
        alert(`Números digitados em ordem decrescentee ficou: ${numero1} | ${numero2}`)
    }
}