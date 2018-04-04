// filter filtre les éléments d'un tableau en utilisant une fonction
const nombresEntiers = [4, 6 ,9, 11 ,16, 23, 28]

const isEven = nombre => nombre % 2 === 0
const nombresPairs = nombresEntiers.filter(isEven)
const nombresImpairs = nombresEntiers.filter(
  nombre => ! isEven(nombre)
)
const nombresSuperieurs10 = nombresEntiers.filter(
  nombre => nombre > 10
)
console.log('Tous les nombres', nombresEntiers)
console.log('Nombres pairs seulement', nombresPairs)
console.log('Nombres impairs seulement', nombresImpairs)
console.log('Nombres supérieurs à 10', nombresSuperieurs10)
