let repository = [
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

for (let i = 0; i < repository.length; i++) {
  if (repository[i].height <= 1.0) {
    document.write(`${repository[i].name} (height: ${repository[i].height})<br>`);
  } else {
    document.write(`${repository[i].name} (height: ${repository[i].height}) - Wow, that\'s   big!<br>`);
}

}



   