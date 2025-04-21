function exercicioE() {
    alert("Resultados das potências de 3!")
    let contador = 0 
    let resultado = 1
    
    while (contador < 16) {
        console.log(`3 ^ ${contador} = ${resultado}`)
        resultado *= 3
        contador++
    }
}