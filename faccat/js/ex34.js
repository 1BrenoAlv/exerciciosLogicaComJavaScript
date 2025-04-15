function exercicio34(){
    alert("Complete a tabela.")
    let x = parseInt(prompt("Digite o valor de X: "))
    let y = parseInt(prompt("Digite o valor de Y: "))
    let z = x * y + 5
    if (z <= 0){
        alert(`X: ${x}  Y: ${y}  Z: ${z}  Resposta: A`)
    }else if (z <= 100){
        alert(`X: ${x}  Y: ${y}  Z: ${z}  Resposta: B`)
    }else{
        alert(`X: ${x}  Y: ${y}  Z: ${z}  Resposta: C`)
    }
}