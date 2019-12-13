const pokemonRepository = (function(){
    const repository = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Pulls all Pokemon data

  function getAll() {
    return repository;
  }

  //Pokemon profile details

  function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function(){
          console.log(pokemon);
      })
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


  function loadList() {
      return fetch(apiUrl).then(function (response) {
          return response.json(); //This returns a promise
      }).then(function (json) {
          json.results.forEach(function (item) {
              let pokemon = {
                  name: item.name,
                  detailsUrl: item.url
              };
              add(pokemon);
          });
      }).catch(function (e) {
          console.error(e);
      })
    }

    function add(pokemon) {
        if (typeof pokemon === "object") {
            repository.push(pokemon);
        }
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = Object.keys(details.types);
        }).catch(function (e) {
            console.error(e);
        });
    }

    return {
      add: add,
      addListItem: addListItem,
      getAll: getAll,
      showDetails: showDetails,
      loadList: loadList,
      loadDetails: loadDetails
    };
})();


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});