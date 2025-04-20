function exercicioE() {
    alert("Média Escolar com Exame de Recuperação.");
    let a = parseInt(prompt("Digite valor de A: "));
    if (a <= 0) {
        alert("Digite outro valor de A(Não pode ser igual a zero)");
        a = parseInt(prompt("Digite outro valor de A: "));
    }
    let b = parseInt(prompt("Digite valor de B: "));
    let c = parseInt(prompt("Digite valor de C: "));
    let delta = b ** 2 - 4 * a * c;
    let x1;
    let x2;

    if (delta < 0) {
        alert("Equação sem raízes reais!");
    }
    else if (delta > 0) {
        x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
        x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
        alert("O valor da primeira raíz é " + x1.toFixed(2));
        alert("O valor da segunda raíz é " + x2.toFixed(2));
    }
    else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        alert("O valor da raíz é " + x1.toFixed(2));
    }

}