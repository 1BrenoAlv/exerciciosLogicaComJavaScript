function exercicioF(){
    alert("Calcular valor da prestação de atraso.")
    let a = parseFloat(prompt("Digite o primeiro valor:"))
    let b = parseFloat(prompt("Digite o segundo valor: "))
    let a1 = a
    a = b
    b = a1
    
    alert(`Valor de a agora é ${a} e o valor de b agora é ${b}`)
}