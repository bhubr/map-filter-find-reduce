const prenoms = ['Alain', 'Jean-Philippe', 'Marie', 'Jeanne', 'Marie-Jeanne']

const prenomsLongueurSuperieurs10 = prenoms.filter(
  prenom => prenom.length > 10
)

const prenomsCommencentParJ = prenoms.filter(
  prenom => prenom.startsWith('J')
)

const prenomsContenantJean = prenoms.filter(
  prenom => prenom.includes('Jean')
)

console.log('Tous les prénoms\n', prenoms)
console.log('\nPrénoms avec + de 10 caractères\n', prenomsLongueurSuperieurs10)
console.log('\nPrénoms commençant par J\n', prenomsCommencentParJ)
console.log('\nPrénoms contenant Jean\n', prenomsContenantJean)
