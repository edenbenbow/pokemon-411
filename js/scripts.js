//Pokemon data
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

  //Pulls all Pokemon data

  function getAll() {
    return repository;
  }

  //Pokemon profile details

  function showDetails(pokemon) {
      console.log("Name: " +pokemon.name + " Height: " +pokemon.height + " Type: " +pokemon.types);
  }

  //Adds character item to list (w/button and event listener)

  function addListItem(pokemon) {
      let $pokemonList = document.querySelector('ul');
      let $listItem = document.createElement('li');
      let $button = document.createElement('button');
      $button.innerText = pokemon.name;
      $button.classList.add('menu-btn');
      $listItem.appendChild($button);
      $pokemonList.appendChild($listItem);
      $listItem.classList.add('menu-item');
      $button.addEventListener('click', function(event) {
          showDetails(pokemon);
      })
  }

  function add(pokemon) {
      if (typeof pokemon === "object") {
          repository.push(pokemon);
      }
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();


let $pokemonList = document.querySelector('ul');

pokemonRepository.getAll().forEach(function(item) {
    pokemonRepository.addListItem(item);
});
