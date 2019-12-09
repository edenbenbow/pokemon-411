const pokemonRepository = (function(){
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

  function getAll() {
    return repository;
  }

  function add(pokemon) {
    if (typeof pokemon === "object"){
      repository.push(pokemon);
    }
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function (item) {
    console.log(item)
    if (item.height > 1) {
        document.write(item.name + ', height: ' + item.height + ' - WOW! That\'s big! <hr />')
    } else {
        document.write(item.name + ', height: ' + item.height + '<hr />')
    }
})





   