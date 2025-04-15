function exercicio32(){
    alert("Placa de um partida de Futebol.")
    let timeA = (prompt("Digite o nome do time da casa: "))
    let golsA = parseInt(prompt("Digite quantos gols eles fizeram: "))
    let timeB = (prompt("Digite o nome do time visitante: "))
    let golsB = parseInt(prompt("Digite quantos gols eles fizeram: "))

    if (golsA == golsB){
        alert(`Partida terminou empatada!`)
    }else if (golsA>golsB){
        alert(`A equipe ${timeA} ganhou a partida!`)
    }else{
        alert(`A equipe ${timeB} ganhou a partida!`) 
    }
}