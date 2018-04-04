const films = [
  { nom: 'Star Wars Episode IV', annee: 1977, genre: 'SF' },
  { nom: 'Star Wars Episode V', annee: 1980, genre: 'SF' },
  { nom: 'Star Wars Episode VI', annee: 1983, genre: 'SF' },
  { nom: 'Matrix', annee: 1999, genre: 'SF' },
  { nom: 'Charlotte aux fraises', annee: 2006, genre: 'Animation' }
]

// FIND
const episode5find = films.find(
  film => film.nom === 'Star Wars Episode V'
)
const episode5filter = films.filter(
  film => film.nom === 'Star Wars Episode V'
)
const starWars = films.find(
  film => film.nom.startsWith('Star Wars')
)
console.log('find nom === "Star Wars Episode V"\n', episode5find)
console.log('\nfilter nom === "Star Wars Episode V"\n', episode5filter)
console.log('\nfind nom commence avec "Star Wars"\n', starWars)

const terminator = films.find(
  film => film.nom === 'Terminator'
)
const terminatorFilter = films.filter(
  film => film.nom === 'Terminator'
)
console.log('\nfind nom === "Terminator"\n', terminator)
console.log('\nfilter nom === "Terminator"\n', terminatorFilter)

// reduce
