function exercicio31(){
    alert("É triângulo ou não?")
    let hipotenusa = parseInt(prompt("Digite o valor da hipotenusa: "))
    let catetoOposto = parseInt(prompt("Digite o valor do cateto oposto: "))
    let catetoAdjacente = parseInt(prompt("Digite o valor do cateto adjacente: "))

    if (hipotenusa>catetoAdjacente && hipotenusa>catetoOposto){
        alert("É um triângulo!")
    }else{
        alert("Não é um triângulo!")
    }
}