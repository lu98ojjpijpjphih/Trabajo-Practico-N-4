let numeros = []

for (let indice = 0; indice < 5; indice = indice +1) {
    let numeros = Number(prompt("Ingresa un numero"))
    numeros.push(numeros)
}


for (let indice = 0; indice < numeros.length; indice = indice +1) {
    if (numeros[indice] > 20) {
        numeros[indice] *= 2
    }
}


for (let indice = 0; indice < numeros.length; indice = indice +1){ 
      if (numeros [indice] % 2 == 0 ){   
          numeros [indice] *= 3
      }
}

console.log(numeros)