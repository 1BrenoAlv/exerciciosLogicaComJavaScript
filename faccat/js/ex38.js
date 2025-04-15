function exercicio38() {
    alert("Login!")
    let codigo = parseInt(prompt("Digite seu código de usuário (Contém 4 digitos) :"))
    let senha
    if (codigo != 1234) {
        alert(`Usuário inválido!`)
    }
    else {
        senha = parseInt(prompt("Digite sua senha: (Contém 4 digitos) "))
    }
    if (senha == 9999) {
        alert(`Acesso permitido`)
    }
    else{
        alert(`Senha incorreta`)
    }

}