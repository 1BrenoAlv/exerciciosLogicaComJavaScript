function exercicio43() {
    alert("Prencher a tabela com números inteiros")
    let a = parseInt(prompt("Digite o valor de A:"))
    let b = parseInt(prompt("Digite o valor de B:"))
    let c = parseInt(prompt("Digite o valor de C:"))
    let mens

    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        if (a == b && b == c) {
            mens = "Triângulo Equilátero"
        } 
        else if (a == b || b == c || a == c) {
            mens = "Triângulo Isósceles"
        } 
        else {
            mens = "Triângulo Escaleno"
        }
    } 
    else {
        mens = "Não é um triângulo"
    }
    alert(`A: ${a}\nB: ${b}\nC: ${c}\nTipo: ${mens}`)
}