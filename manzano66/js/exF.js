function exercicioF() {
    alert("Números divisíveis por 4 (menor que 200)")
    let i
    for(i = 1; i < 201; i++){
        if(i % 4 == 0){
            console.log(`${i}`)
        }
    }
}