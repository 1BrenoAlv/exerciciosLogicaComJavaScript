function exercicioD() {
    alert("Números ímpares entre 0 e 20!")
    let contador = 0 
    
    while (contador < 21) {
        if(contador % 2 == 1){
        console.log(`Ímpar: ${contador}`)
        }
        contador++
    }
}