function exercicioJ(){
    alert("Converter dólar para real.")
    let dolar = parseFloat(prompt("Digite a quantidade de dólar que deseja converter: "))
    let cotacao = parseFloat(prompt("Digite a cotação do dólar hoje:"))
    let real = dolar * cotacao
    
    alert(`Dólar disponiveis: $ ${dolar}\nCotação do dólar: R$${cotacao}\nReal convertido: R$${real}`)
}