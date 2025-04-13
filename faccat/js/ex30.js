function exercicio30() {
    alert("Ordem Crescente")
    let numero1 = parseInt(prompt("Digite o 1° número inteiro:(Não digite valores iguais!) "))
    let numero2 = parseInt(prompt("Digite o 2° número inteiro:(Não digite valores iguais!) "))
    let numero3 = parseInt(prompt("Digite o 3° número inteiro:(Não digite valores iguais!) "))
    let soma

    if (numero1 < numero2 && numero2 < numero3) {
        alert(`A ordem crescente ficou: ${numero1} | ${numero2} | ${numero3}`)
    } 
    else if (numero1 < numero3 && numero3 < numero2) {
        alert(`A ordem crescente ficou: ${numero1} | ${numero3} | ${numero2}`)
    } 
    else if (numero2 < numero1 && numero1 < numero3) {
        alert(`A ordem crescente ficou: ${numero2} | ${numero1} | ${numero3}`)
    } 
    else if (numero2 < numero3 && numero3 < numero1) {
        alert(`A ordem crescente ficou: ${numero2} | ${numero3} | ${numero1}`)
    } 
    else if (numero3 < numero1 && numero1 < numero2) {
        alert(`A ordem crescente ficou: ${numero3} | ${numero1} | ${numero2}`)
    } 
    else if (numero3 < numero2 && numero2 < numero1) {
        alert(`A ordem crescente ficou: ${numero3} | ${numero2} | ${numero1}`)
    } 
    else {
        alert("Erro: os valores não devem ser iguais.")
    }
}