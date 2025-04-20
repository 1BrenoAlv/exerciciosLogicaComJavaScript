function exercicioK() {
    alert("Aprentação de um valor caso for menor que três.");
    let num = parseFloat(prompt("Digite um número: "))
    
    do {
        num = parseFloat(prompt("Digite outro número: "))
    } while (!(num < 3.01));
    
    if (num < 3.01) {
        alert(`O valor digitado foi ${num}`)
    }
}