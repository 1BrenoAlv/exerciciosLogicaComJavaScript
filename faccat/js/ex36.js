function exercicio36() {
    alert("Coloque a idade diferente para dois homens e duas mulheres e soma-las.")
    let primeiroH = parseInt(prompt("Digite a idade do primeiro homem: "))
    let segundoH = parseInt(prompt("Digite a idade do segundo homem: "))
    let primeiraM = parseInt(prompt("Digite a idade da primeira mulher: "))
    let segundaM = parseInt(prompt("Digite a idade da segundo mulher: "))
    let homemV = parseInt
    let homemN = parseInt
    let mulherV = parseInt
    let mulherN = parseInt
    let soma = parseInt
    let produto = parseInt

    if (primeiroH > segundoH) {
        homemV == primeiroH
        homemN == segundoH
    }
    else {
        homemV == segundoH
        homemN == primeiroH
    }
    if (primeiraM > segundaM) {
        mulherV == primeiraM
        mulherN == segundaM
    }
    else {
        mulherV == segundaM
        mulherN == primeiraM
    }

    soma = homemV + mulherN
    produto = homemN * mulherV
    alert(soma)
    alert(produto)
}