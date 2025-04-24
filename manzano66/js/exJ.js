function exercicioJ() {
    alert("Graus Celsius e Graus Fahrenheit.")
    let graus = 10
    let grausF

    for (let i = 1; graus < 101; i++) {
        grausF = (9 * graus + 160) / 5
        console.log(`${graus} °C ${grausF} °F`)
        graus+= 10
    }
}