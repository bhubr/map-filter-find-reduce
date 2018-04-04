
const films = [
  { nom: 'Star Wars Episode IV', annee: 1977, genre: 'SF' },
  { nom: 'Star Wars Episode V', annee: 1980, genre: 'SF' },
  { nom: 'Star Wars Episode VI', annee: 1983, genre: 'SF' },
  { nom: 'Matrix', annee: 1999, genre: 'SF' },
  { nom: 'Charlotte aux fraises', annee: 2006, genre: 'Animation' }
]

const nomsFilms = films.map(film => film.nom)
const anneesFilms = films.map(film => film.annee)
console.log('\nTableau de films\n', films)
console.log('\nNoms des films\n', nomsFilms)
console.log('\nAnnées de sortie des films\n', anneesFilms)
