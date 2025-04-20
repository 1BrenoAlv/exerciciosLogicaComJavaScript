function exercicioL() {
    alert("Aprentação de um valor caso for menor que três.");
    let nome = prompt("Digite seu nome: ")
    let sexo = prompt("Digite seu sexo(M - F):")
    sexo = sexo.toUpperCase();
    
    if (sexo = "M") {
        alert(`Ilmo Sr. ${nome}`)
    }
    else{
        alert(`Ilma Sra. ${nome}`)
    }
}