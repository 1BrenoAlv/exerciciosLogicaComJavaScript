function exercicioH() {
    alert("Graus Celsius e Graus Fahrenheit.")
    let graus = 10
    let grausF

    while (graus < 101) {
        grausF = (9 * graus + 160) / 5
        console.log(`${graus} °C ${grausF} °F`)
        graus+= 10
    }
}