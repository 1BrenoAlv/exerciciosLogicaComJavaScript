alert("Temporizador!")
let horaDigitada = parseInt(prompt("Digite as horas: "))
let minutosDigitada = parseInt(prompt("Digite os minutos: "))
let segundosDigitada = parseInt(prompt("Digite os segundos: "))

for (let horas = horaDigitada; horas > -1; horas--) {
    for (let minutos = minutosDigitada; minutos > -1; minutos--) {
        for (let segundos = segundosDigitada; segundos > -1; segundos--) {
            console.log(`${horas} : ${minutos} : ${segundos}`)           
        }segundosDigitada = 59
             
    }minutosDigitada = 59   
}