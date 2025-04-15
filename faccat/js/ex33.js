function exercicio33(){
    alert("Dizer qual número é maior,menor ou igual!.")
    let numero1 = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número: "))

    if (numero1 == numero2){
        alert(`Números Iguais!`)
    }else if (numero1 > numero2){
        alert(`Primeiro é maior`)
    }else{
        alert(`Segundo maior!`) 
    }
}