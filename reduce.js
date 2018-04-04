// reduce

const nombres = [1, 2, 3, 4]

const somme = nombres.reduce(
  (accumulateur, nombre) => accumulateur + nombre,
  0
)

console.log('Nombres', nombres, '\nSomme:', somme, '\n')

const isEven = nombre => nombre % 2 === 0

// true && true && true => true
// true && false && true => false

const isAllEven = nombres =>
  nombres.reduce(
    (accumulateur, nombre) => isEven(nombre) && accumulateur,
    true
  )

console.log(isAllEven([2, 4, 6]))
console.log(isAllEven([2, 3, 4, 6, 7]))

const beatles = ['John', 'Paul', 'Ringo', 'George']
const beatlesChaine = beatles.reduce(
  (accumulateur, prenom) => `${accumulateur}* ${prenom}\n`,
  ''
)
const beatlesListe = beatles.reduce(
  (accumulateur, prenom) => `${accumulateur}<li>${prenom}</li>\n`,
  ''
)
console.log(beatles)
console.log(beatlesChaine)
console.log(`<ul>${beatlesListe}</ul>`)


const films = [
  { nom: 'Star Wars Episode IV', annee: 1977, genre: 'SF' },
  { nom: 'Star Wars Episode V', annee: 1980, genre: 'SF' },
  { nom: 'Star Wars Episode VI', annee: 1983, genre: 'SF' },
  { nom: 'Matrix', annee: 1999, genre: 'SF' },
  { nom: 'Charlotte aux fraises', annee: 2006, genre: 'Animation' }
]

const listeFilms = films.reduce(
  (accumulateur, film) =>
    `${accumulateur}<li>${film.nom} (${film.annee})</li>\n`,
  ''
)
console.log(listeFilms)