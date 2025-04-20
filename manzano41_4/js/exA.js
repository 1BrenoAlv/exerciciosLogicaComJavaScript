function exercicioA() {
    alert("Calcular a diferença entre os dois valores inteiros.")
    let numeroA = parseInt(prompt("Digite o primeiro valor inteiro:"))
    let numeroB = parseInt(prompt("Digite o segundo valor inteiro:"))
    if (numeroA > numeroB) {
        alert(`A diferença entre o primeiro valor e o segundo é ${numeroA - numeroB}`)
    }
    else{
        alert(`A diferença entre o primeiro valor e o segundo é ${numeroB - numeroA}`)
    }
}
