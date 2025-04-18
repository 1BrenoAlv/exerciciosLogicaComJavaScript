/*alert("Temporizador!")
let horaDigitada = parseInt(prompt("Digite as horas: "))
let minutosDigitada = parseInt(prompt("Digite os minutos: "))
let segundosDigitada = parseInt(prompt("Digite os segundos: "))

for (horaDigitada = horaDigitada; horaDigitada > -1; horaDigitada--) {
        for (minutosDigitado = minutosDigitado; minutosDigitado > -1; minutosDigitado--) {
            for (segundosDigitado = segundosDigitado; segundosDigitado > -1; segundosDigitado--) {
                console.log(`${horaDigitada} : ${minutosDigitado} : ${segundosDigitado}`)
            } segundosDigitado = 59

        } minutosDigitado = 59
    }*/

alert("Temporizador!")
let horaDigitada
let minutosDigitado
let segundosDigitado

horaDigitada = parseInt(prompt("Digite as horas: "))
minutosDigitado = parseInt(prompt("Digite os minutos: "))
segundosDigitado = parseInt(prompt("Digite os segundos: "))

if (horaDigitada < 24 && minutosDigitado < 60 && segundosDigitado < 60) {
    for (horaDigitada = horaDigitada; horaDigitada > -1; horaDigitada--) {
        for (minutosDigitado = minutosDigitado; minutosDigitado > -1; minutosDigitado--) {
            for (segundosDigitado = segundosDigitado; segundosDigitado > -1; segundosDigitado--) {
                console.log(`${horaDigitada} : ${minutosDigitado} : ${segundosDigitado}`)
            } segundosDigitado = 59

        } minutosDigitado = 59
    }
} else {
    do {
        alert("As horas vão de 0 à 23\nOs minutos vão de 0 à 59\nOs segundos vão de 0 à 59")
        horaDigitada = parseInt(prompt("Digite novamente as horas: "))
        minutosDigitado = parseInt(prompt("Digite novamente os minutos: "))
        segundosDigitado = parseInt(prompt("Digite novamente os segundos: "))
    } while (!(horaDigitada < 24 && minutosDigitado < 60 && segundosDigitado < 60))

for (horaDigitada = horaDigitada; horaDigitada > -1; horaDigitada--) {
    for (minutosDigitado = minutosDigitado; minutosDigitado > -1; minutosDigitado--) {
        for (segundosDigitado = segundosDigitado; segundosDigitado > -1; segundosDigitado--) {
            console.log(`${horaDigitada} : ${minutosDigitado} : ${segundosDigitado}`)
        } segundosDigitado = 59

    } minutosDigitado = 59
}
}
