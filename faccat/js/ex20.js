function exercicio20() {
    alert("Ordem Crescente.")
    let numero1 = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número(não pode ser igual ao anterior): "))
    
    if (numero1 == numero2) {
        alert(`Número Iguais`)
    }
    else if (numero1 < numero2){
        alert(`Números digitados em ordem crescente ficou: ${numero1} | ${numero2}`)
    }
    else{
        alert(`Números digitados em ordem crescente ficou: ${numero2} | ${numero1}`)
    }
}