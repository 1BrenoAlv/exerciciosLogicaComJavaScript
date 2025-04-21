function exercicioB() {
    alert("Somatório de 1 a 100!")
    let contador = 1
    let num = 1
    
    while (contador < 101) {
        tabuada = num * contador
        num += contador
        contador++
    }
    console.log(`O total do somatório de 1 à 100 é ${num}`)
}