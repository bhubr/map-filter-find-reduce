const prenoms = ['Alain', 'Jean-Philippe', 'Marie', 'Jeanne']
const prenomsAvecLongueur = prenoms.map(
  prenom => `${prenom} (${prenom.length})`
//  prenom => prenom + '(' + prenom.length + ')'
)
console.log('\nPrenoms\n', prenoms)
console.log('\nPrenoms avec longueur entre ()\n', prenomsAvecLongueur)
