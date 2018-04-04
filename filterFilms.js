const films = [
  { nom: 'Star Wars Episode IV', annee: 1977, genre: 'SF' },
  { nom: 'Star Wars Episode V', annee: 1980, genre: 'SF' },
  { nom: 'Star Wars Episode VI', annee: 1983, genre: 'SF' },
  { nom: 'Matrix', annee: 1999, genre: 'SF' },
  { nom: 'Charlotte aux fraises', annee: 2006, genre: 'Animation' }
]
const filmsSF = films.filter(
  film => film.genre === 'SF'
)
const filmsStarWars = films.filter(
  film => film.nom.startsWith('Star Wars')
)
const filmsRecents = films.filter(
  film => film.annee > 2000
)
console.log('\nTous les films\n', films)
console.log('\nFilms de SF seulement\n', filmsSF)
console.log('\nTrilogie originale Star Wars\n', filmsStarWars)
console.log('\nFilms récents (après 2000)\n', filmsRecents)
