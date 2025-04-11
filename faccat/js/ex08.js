function exercicio8(){
    alert("Apuração de Votos")
    let votos = parseInt(prompt("Digite o total de votos: "))
    let validos = parseInt(prompt("Digite o total de votos validos: "))
    let brancos = parseInt(prompt("Digite o total de votos em branco: "))
    let nulos = parseInt(prompt("Digite o total de votos nulo: "))
    let apuracaoV = validos*votos/100
    let apuracaoB  = brancos*votos/100
    let apuracaoN  = nulos*votos/100
    alert("O total de votos é: "+votos)
    alert("Válidos: "+apuracaoV+"% "+"Branco: "+apuracaoB+"% "+"Nulos: "+apuracaoN+"%")
}