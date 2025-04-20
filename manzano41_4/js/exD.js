function exercicioD() {
    alert("Média Escolar com Exame de Recuperação.")
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite a quarta nota: "));
let exame;
let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    alert("Aluno Aprovado!! | Nota: " + media.toFixed(2));
}
else{
    alert("Sua nota é " + media.toFixed(2) + " | Você precisa fazer um exame de recuperação.");
    exame = parseFloat(prompt("Digite sua nota do exame de recuperação: "));
    exame = (media + exame) / 2
    if (exame >= 5){
        alert("Aluno Aprovado com a Recuperação!! | Nota: " + exame.toFixed(2));
    }
    else{
        alert("Aluno Reprovado!! | Nota: " + exame.toFixed(2));
    }
}
}