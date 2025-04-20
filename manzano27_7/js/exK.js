function exercicioK(){
    alert("Converter real em dólar.")
    let real = parseFloat(prompt("Digite a quantidade de real que deseja converter: "))
    let cotacao = parseFloat(prompt("Digite a cotação do dólar hoje:"))
    let dolar = real / cotacao
    
    alert(`Reais disponiveis: R$ ${real}\nCotação do dólar: R$ ${cotacao}\nDólar convertido: $ ${dolar}`)
}