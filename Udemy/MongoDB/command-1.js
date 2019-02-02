db.persons.aggregate([
  { $match: { gender: 'female' } }
])
.pretty()