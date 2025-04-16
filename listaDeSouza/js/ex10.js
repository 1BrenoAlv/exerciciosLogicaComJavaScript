function exercicio10() {
    alert("Senha Correta!")
    let senha = parseInt(prompt("Digite sua senha: (4 digitos) "))

    while (senha != 4433) {
        alert("Senha Inválida!")
        senha = parseInt(prompt("Digite sua senha novamente: (4 digitos) "))
    }
    if(senha == 4433){   
    alert(`Senha Correta!`)  
    } 
}