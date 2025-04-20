function exercicioExtraC(){
    alert("Apuração de 3 cantidatos.")
    let votosA = parseInt(prompt("Digite a quantidade de votos válidos para o primeiro candidato: "))
    let votosB = parseInt(prompt("Digite a quantidade de votos válidos para o segundo candidato:"))
    let votosC = parseInt(prompt("Digite a quantidade de votos válidos para o terceiro candidato:"))
    let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos:"))
    let votosBrancos = parseInt(prompt("Digite a quantidade de votos em brancos:"))
    let totalEleitores = votosA + votosB + votosC + votosNulos + votosBrancos
    let percValidos = (votosA+votosB+votosC) * 100 / totalEleitores
    let percA = votosA * 100 / totalEleitores
    let percB = votosB * 100 / totalEleitores
    let percC = votosC * 100 / totalEleitores
    let percNulos = votosNulos * 100 / totalEleitores
    let percBrancos = votosBrancos * 100 / totalEleitores

    alert(`Total de eleitores ${totalEleitores} pessoas\nPercentual de votos válidos ${percValidos.toFixed(2)}%\nPercentual de votos para o primeiro candidato ${percA.toFixed(2)}%\nPercentual de votos para o segundo candidato ${percB.toFixed(2)}%\nPercentual de votos para o terceiro candidato ${percC.toFixed(2)}%\nPercentual de votos nulos ${percNulos.toFixed(2)}%\nPercentual de votos em branco ${percBrancos.toFixed(2)}%`)
}