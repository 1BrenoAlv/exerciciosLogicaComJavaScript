function exercicioJ() {
    alert("Divisão com resultado inteiro.")
    let dividendo = parseFloat(prompt("Digite o dividendo:"));
    let divisor = parseFloat(prompt("Digite o divisor:"));
    let resto,quociente = 0

    if(divisor == 0){
        console.log("Não existe divisão por 0.")
    }else{
        resto = dividendo
        do {
            resto -= divisor
            quociente ++
        } while (resto >= divisor);
        console.log(`Resultado inteiro da divisão é ${quociente}`)
    }
}

