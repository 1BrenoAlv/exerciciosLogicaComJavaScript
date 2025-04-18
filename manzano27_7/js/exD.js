function exercicioD(){
    alert("Calcular a quantidade de litros de combustível.")
    alert("O automóvel faz 12KM por litro")
    let tempo = parseFloat(prompt("Digite quantidae de tempo que levou para chegar (em minutos):"))
    let velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem: "))
    let distancia = tempo * velocidade
    let litrosUsados = distancia / 12
    
    alert(`Velocidade Média: ${velocidade} KMh`)
    alert(`Tempo Gasto: ${tempo} minutos`)
    alert(`Distacia Percorrida: ${distancia} KM`)
    alert(`Litros Usados: ${litrosUsados}L`)
}