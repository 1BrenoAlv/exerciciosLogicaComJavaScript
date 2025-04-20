function exercicioB() {
    alert("Módulo de um valor.")
    let valor = parseInt(prompt("Digite um valor inteiro:"))
    
    if (valor > -1) {
        alert(`O módulo desse valor é ${valor}`)
    }
    else{
        alert(`O módulo desse valor é ${valor * -1}`)
    }
}
