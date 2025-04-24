function exercicioG() {
    alert("Potência de 3.")
    let i
    let numero = 3
    let potencia = 1
    for(i = 1; i < 16; i++){
        potencia *= numero
        console.log(`${numero} elevado a ${i} é igual a ${potencia}`)
    }
}