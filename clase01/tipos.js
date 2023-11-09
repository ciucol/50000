people = [
  { id: 1, name: 'Mate', isStudent: true },
  { id: 2, name: 'Titin', isStudent: false },
  { id: 3, name: 'Benja', isStudent: false },
]

person = people.find(p => p.id === 1)

console.log(person)
