function exercicioA(){
    alert("Transferir graus Celsius para graus Fahrenheit")
    let celsius = parseInt(prompt("Digite uma temperatura em graus Celsius:"))
    let fahrenheit = (9 * celsius + 160) / 5
    alert(`${celsius}°C em graus Fahrenheit é ${fahrenheit}°F`)
}