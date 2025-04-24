function exercicioH() {
    alert("Calcular a área total de uma residência.")
    let continuar = "S"
    let areaTotal = 0
    let x,y,area,comodo

    do  {
      comodo = prompt("Digite o nome do cômodo:")
      x = parseFloat(prompt("Digite a largura do cômodo (em cm):"))
      y = parseFloat(prompt("Digite o comprimento do cômodo (em cm):"))
      area = x * y
      areaTotal += area
      console.log(`Nome: ${comodo}\nLargura: ${x} cm²\nComprimento: ${y} cm²\nÁrea do cômodo: ${area} m²\n`)
      continuar = prompt("Deseja continuar calculando a área dos cômodos? (S - N")
      continuar = continuar.toUpperCase()
    }while (continuar == "S")
    console.log(`Área total da residência: ${areaTotal} m²`)
}
