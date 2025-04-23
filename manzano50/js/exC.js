function exercicioC() {
    alert("Todos os Números Divisíveis por 4 entre 1 a 200.")
    let contador = 1

    do {
        if (contador % 4 == 0) {
            console.log(`${contador}`)   
        }
        contador++
    } while (contador < 201)

}