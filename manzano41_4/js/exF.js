function exercicioF() {
    alert("Ordem crescente.");
    let a = parseFloat(prompt("Digite o primeiro número: "))
    let b = parseFloat(prompt("Digite o segundo número:"))
    let c = parseFloat(prompt("Digite o terceiro número: "))

    if (a <= b && b <= c) {
        alert(`Em ordem crescente: ${a} | ${b} | ${c}`)
        }
    else if (a <= c && c <= b) {
        alert(`Em ordem crescente: ${a} | ${c} | ${b}`)
    }
    else if (b <= a && a <= c) {
        alert(`Em ordem crescente: ${b} | ${a} | ${c}`)
    }
    else if (b <= c && c <= a) {
        alert(`Em ordem crescente: ${b} | ${c} | ${a}`)
    }
    else if (c <= a && a <= b) {
        alert(`Em ordem crescente: ${c} | ${a} | ${b}`)
    }
    else {
        alert(`Em ordem crescente: ${c} | ${b} | ${a}`)
    }

}