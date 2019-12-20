const pokemonRepository = (function(){
    const repository = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let $modalContainer = document.querySelector('#modal-container');
    let $pokemonList = document.querySelector('ul');

  //Pulls all Pokemon data

  function getAll() {
    return repository;
  }

  //Pokemon profile details

  function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function(){
          showModal(pokemon);
      });
  }

  //Adds character item to list (w/button and event listener)

  function addListItem(pokemon) {
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
        if (typeof pokemon === 'object') {
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
            item.types = '';
            Object.values(details.types).forEach(function (item2){
                item.types += (item.types.length !== 0?', ':'') + item2.type.name;
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showModal(pokemon) {

      //Clear all existing modal content
      $modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let modalCloseButton = document.createElement('button');
        modalCloseButton.classList.add('modal-close');
        modalCloseButton.innerText = 'Close';
        modalCloseButton.addEventListener('click', hideModal);

        let modalDetails = document.createElement('p');
        modalDetails.innerText = 'They are ' + pokemon.height/10 + ' meters tall!';
        modalDetails.classList.add('modalSubDetails');

        let modalName = document.createElement('h2');
        modalName.innerText = pokemon.name;
        modalName.classList.add('modal-title');

        let modalImg = document.createElement('Img');
        modalImg.src = pokemon.imageUrl;
        modalImg.classList.add('modal-img');

        let modalSubDetails = document.createElement('p');
        modalSubDetails.innerText = 'Types: ' + pokemon.types;
        modalSubDetails.classList.add('modalSubDetails');

        modal.appendChild(modalCloseButton);
        modal.appendChild(modalName);
        modal.appendChild(modalImg);
        modal.appendChild(modalDetails);
        modal.appendChild(modalSubDetails);
        $modalContainer.appendChild(modal);

        $modalContainer.classList.add('is-visible');
    }

    function hideModal() {
      $modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
        });

    $modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === $modalContainer) {
            hideModal();
        }
    });


    return {
      add: add,
      addListItem: addListItem,
      getAll: getAll,
      showDetails: showDetails,
      loadList: loadList,
      loadDetails: loadDetails,
      showModal: showModal,
      hideModal: hideModal
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokeList) {
        pokemonRepository.addListItem(pokeList);
    });
});