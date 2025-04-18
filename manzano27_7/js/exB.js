function exercicioB(){
    alert("Transferir graus Fahrenheit para graus Celsius")
    let fahrenheit = parseInt(prompt("Digite uma temperatura em graus Fahrenheit: "))
    let celsius = (fahrenheit - 32) * 5/9
    alert(`${fahrenheit}°F em graus Fahrenheit é ${celsius}°C`)
}