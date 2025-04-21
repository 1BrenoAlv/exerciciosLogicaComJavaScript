function exercicioC() {
    alert("Somatório de números pares entre 1 ate 500!")
    let contador = 1
    let pares = 0 
    
    while (contador < 501) {
        if(contador % 2 == 0){
        pares += contador
        }
        contador++
    }
    console.log(`O somatório dos valores pares de 1 até 500 é ${pares}`)
}