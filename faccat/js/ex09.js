function exercicio9(){
    alert("Reajuste Salárial")
    let salarioAtual = parseInt(prompt("Digite seu salário atual: "))
    let reajuste = parseInt(prompt("Digite a porcentagem de reajuste: "))
    reajuste = reajuste*salarioAtual/100
    alert("O salário com reajuste é: R$"+(salarioAtual+reajuste))
}