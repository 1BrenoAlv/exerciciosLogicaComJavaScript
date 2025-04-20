function exercicioH(){
    alert("Calcular volume de uma caixa retangular")
    let comprimento = parseFloat(prompt("Digite o valor do comprimento: "))
    let largura = parseFloat(prompt("Digite o valor da largura:"))
    let altura = parseFloat(prompt("Digite o valor da altura: "))
    let volume = comprimento + largura * altura
    
    alert(`O volume da caixa é ${volume} cm²`)
}