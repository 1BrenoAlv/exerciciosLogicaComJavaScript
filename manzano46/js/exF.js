function exercicioF() {
    alert("Potência!")
    let base = parseInt(prompt("Digite valor da base:"))
    let expoente = parseInt(prompt("Digite valor do expoente:"))
    let resultado = 1
    let contador = 1
    
    while (contador <= expoente) {
        resultado *= base
        contador++
    }
    console.log(`${base} elevado a ${expoente} é igual a ${resultado}`)
}