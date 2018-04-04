// map est une méthode qui applique un traitement (via une fonction)
// à tous les éléments d'un tableau

const nombresEntiers = [7, 12, 21]

const nombresDoubles = nombresEntiers.map(
  nombre => 2 * nombre
)

const nombresAugmentes = nombresEntiers.map(
  nombre => nombre + 10
)

console.log(nombresEntiers)
console.log(nombresDoubles)
console.log(nombresAugmentes)
