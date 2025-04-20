function exercicioI() {
    alert("Dizer se é par ou impar.");
    let num = parseFloat(prompt("Digite um número: "))
    
    if (num % 2 == 0) {
        alert("É Par!")
    }
    else{
        alert("É Ímpar!")
    }
}