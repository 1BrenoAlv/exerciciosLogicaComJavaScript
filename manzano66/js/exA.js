function exercicioA() {
    alert("Calcular quadrado de 15 a 200")
    let i = 0
    let quadrado = 0
    for(i = 15; i < 201; i++){
        quadrado = i * i
        console.log(`O quadrado de ${i} é ${quadrado}`)
    }
}
