function exercicioI(){
    alert("Somar dois números e o resultados fazer ao quadrado.")
    let a = parseFloat(prompt("Digite o primeiro valor: "))
    let b = parseFloat(prompt("Digite o segundo valor:"))
    let diferenca = a - b
    let final = diferenca**2
    
    alert(`A diferença do primeiro número para o segundo é ${final}`)
}