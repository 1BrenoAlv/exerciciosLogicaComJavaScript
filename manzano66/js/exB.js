function exercicioB() {
    alert("tabuada!(multiplicar de 1 até 10)")
    let i
    let numero = parseInt(prompt("Digite um número"))
    let mult
    for(i = 1; i < 11; i++){
        mult = numero * i
        console.log(`${numero} x ${i} = ${mult}`)
    }
}