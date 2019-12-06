const repository = [
  {
    name: 'Bellossom',
    height: .41,
    types: ['grass']
  },
  {
    name: 'Parasect',
    height: .99,
    types: ['bug', 'grass']
  },
  {
    name: 'Pichu',
    height: .30,
    types: ['electric']
  },
  {
    name: 'Sealeo',
    height: 1.09,
    types: ['ice', 'water']
  }
];


repository.forEach(function(item) {
  object.keys(item).forEach(function(key) {
    console.log(key + ": " + item[key]);
  });
});




   