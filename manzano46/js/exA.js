function exercicioA() {
    alert("Calcular tabuada de um número.")
    let num = parseInt(prompt("Digite um número: "))
    let tabuada
    let contador = 1
    while (contador < 11) {
        tabuada = num * contador
        console.log(num + " x " + contador + " = " + tabuada)
        contador++
    }
}