function exercicioD() {
    alert("Somatório de números pares!(De 1 à 500)")
    let i
    let soma = 0
    for(i = 1; i < 501; i++){
        if(i % 2 ==0){
            soma += i
        }
    }
    console.log(`O somatório de 1 à 500 é ${soma}`)
}