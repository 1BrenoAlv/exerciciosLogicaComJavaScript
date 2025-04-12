function exercicio18() {
    alert("Maior Valor Digitado.")
    let numero1 = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número(não pode ser igual ao anterior): "))
    
    if (numero1 == numero2) {
        alert(`Número Iguais`)
    }
    else if (numero1 > numero2){
        alert(`${numero1} é o maior número`)
    }
    else{
        alert(`${numero2} é o maior número`) 
    }
}