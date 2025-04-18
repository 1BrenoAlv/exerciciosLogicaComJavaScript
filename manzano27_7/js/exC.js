function exercicioC(){
    alert("Calcular volume de uma lata de óleo")
    let raio = parseFloat(prompt("Digite o valor do raio: "))
    let altura = parseFloat(prompt("Digite o valor da altura: "))
    let volume = Math.PI * (raio**2 * altura)
    
    alert(`Volume da lata de óleo é ${volume.toFixed(2)}`)
}