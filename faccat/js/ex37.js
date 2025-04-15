function exercicio37() {
    alert("Calcular compras de frutas!")
    let morango = parseInt(prompt("Digite a quantidade de morango em kg: "))
    let maca = parseInt(prompt("Digite a quantidade de maça em kg: "))
    let totalKg

    if (totalKg > 8) {
        maca = maca * 1.50
        morango = morango * 2.20
        totalKg = morango + maca
        totalKg = totalKg + totalKg * 10 / 100
        alert(`O total é:  R$ ${totalKg.toFixed(2)}`)
    }
    else if (totalKg > 5 && totalKg < 8) {
        maca = maca * 1.50
        morango = morango * 2.20
        totalKg = morango + maca
        alert(`O total é:  R$ ${totalKg.toFixed(2)}`)
    }
    else {
        maca = maca * 1.80
        morango = morango * 2.50
        totalKg = morango + maca
        alert(`O total é:  R$ ${totalKg.toFixed(2)}`)
    }
}