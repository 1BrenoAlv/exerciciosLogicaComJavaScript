function exercicioH() {
    alert("Potência")
    let i
    let base = parseInt(prompt("Digite o valor da base"))
    let expoente = parseInt(prompt("Digite o valor do expoente"))
    let potencia = 1
    for(i = 1; i <= expoente; i++){
        potencia *= base
    }
    console.log(`${base} elevado a ${expoente} é igual a ${potencia}`)
}