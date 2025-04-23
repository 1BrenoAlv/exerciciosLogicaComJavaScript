function exercicioA() {
    alert("Quadrados de 15 a 200.")
    let contador = 15
    let total = 0
    
    do {
        total = contador * contador
        console.log(`${contador}² = ${total}`)
        contador++
      }while (contador < 201)   
}