function exercicioE(){
    alert("Calcular valor da prestação de atraso.")
    let valor = parseFloat(prompt("Digite o valor:"))
    let taxa = parseFloat(prompt("Digite a taxa: "))
    let tempo = parseFloat(prompt("Digite o  tempo de atraso:"))
    let prestacao = valor + (valor * taxa / 100)* tempo
    
    alert(`Valor da prestação de atraso é: ${prestacao}`)
}