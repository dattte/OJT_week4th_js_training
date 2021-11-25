const listPokemonSelect = []

const renderPokemon = pokemons => {
  const boxPokemon = document.querySelector('.box-pokemon')
  const pokemonList = boxPokemon.querySelector('.pokemon-list_list')
  const row = pokemonList.querySelector('.row')
  pokemons.map(pokemon => {
    row.innerHTML += `
      <li class="pokemon_item col-3">
        <img src="../imgs/pokemon/${pokemon.name.toLowerCase()}.png"
          id-data="${pokemon.id}"
          onclick="showInfoPokemon(event, ${pokemon.id})"
          class="pokemon_img">
      </li>`
  })
}

const showInfoPokemon = (e, id) => {
  const parentTarget = e.target.parentElement
  const pokemonInfo = document.querySelector('.pokemon-show')
  const pokemonList = document.querySelector('.pokemon-list_list')
  const pokimonListItem = pokemonList.querySelectorAll('.pokemon_item')
  pokimonListItem.forEach(item => item.classList.remove('-active'))

  parentTarget.classList.toggle('-active')
  pokemons.forEach(pokemon => {
    if (pokemon.id === id) {
    pokemonInfo.innerHTML = `
      <div class="pokemon-show_img">
        <img src="../imgs/pokemon/${pokemon.name.toLowerCase()}.png" id-data="${pokemon.id}" alt="pokemon_show">
      </div>
      <h2 class="pokemon-show_name">${pokemon.name}</h2>
      <div class="pokemon-show_box-hp">
        <span class="pokemon-show_box-hp -text">HP</span>
        <span class="pokemon-show_box-hp -number">${pokemon.hp}</span>
        <span class="pokemon-show_box-hp -background">
          <span class="pokemon-show_box-hp -background-long" style="width: ${pokemon.hp}px"></span>
        </span>
      </div>
      <div class="pokemon-show_box-atk">
        <span class="pokemon-show_box-atk -text">AFK</span>
        <span class="pokemon-show_box-atk -number">${pokemon.atk}</span>
        <span class="pokemon-show_box-atk -background">
            <span class="pokemon-show_box-atk -background-long" style="width: ${pokemon.atk}px"></span>
        </span>
      </div>
      <button type="button"
        class="btn btn-secondary add-pokemon"
        onclick="addPokemon(event, ${pokemon.id})">ADD</button>
      <span class="messeage-full-select">You have select 5 Pokemon</span>`
    }
  })

  const messageNote = document.querySelector('.messeage-full-select')
  if (listPokemonSelect.length === 5) {
    messageNote.style.opacity = '1'
  }
}

const handleOverlay = id => {
  const boxListPokemon = document.querySelector('.pokemon-list_list')
  const listPokemon = boxListPokemon.querySelectorAll('.pokemon_item')
  listPokemon.forEach(item => {
    const idData = item.children[0].getAttribute('id-data')
    if (id === Number(idData)) {
      item.classList.add('overlay')
    }
  })
}

const addPokemon = (e, id) => {
  if (listPokemonSelect.length < 5) {
    handleOverlay(id)
    pokemons.forEach(pokemon => {
      if (pokemon.id === id) {
        listPokemonSelect.push(pokemon)
      }
    })
    e.target.setAttribute('disabled', 'disabled')
    renderShowPokemon(listPokemonSelect)
  } else {
    confirm('Chỉ có thể chọn tối ta 5 Pokemon')
  }
}

const renderShowPokemon = listPokemonSelect => {
  const listShowPokemon = document.querySelectorAll('.pokemon-select_item')
  listPokemonSelect.forEach((pokemonSelect, index) => {
    for (let i = 0; i < listShowPokemon.length; i++) {
      if (i === index) {
        listShowPokemon[i].innerHTML = `
          <div class="box-select">
            <span class="icon-close"
              onclick="closePokemon(${pokemonSelect.id})">
                <i class="fas fa-times"></i>
            </span>
            <img src="../imgs/pokemon/${pokemonSelect.name.toLowerCase()}.png"
            alt="" id-data="${pokemonSelect.id}"
            class="pokemon-select_img">
          </div>`
      }
    }
  })
}

const closePokemon = i => {
  const listShowPokemon = document.querySelectorAll('.pokemon-select_item')
  listShowPokemon.forEach(ele => {
    ele.innerHTML = ''
    listPokemonSelect.forEach((pokemonSelect, index) => {
      if (pokemonSelect.id === i) {
        listPokemonSelect.splice(index, 1)
      }
    })
  })
  const messageNote = document.querySelector('.messeage-full-select')
  if (listPokemonSelect.length < 5) {
    messageNote.style.opacity = '0'
  }
  payEventAtClose(i)
  renderShowPokemon(listPokemonSelect)
}

// khi xóa pokemon được select thì trả các event add click cho pokemon
const payEventAtClose = i => {
  const boxListPokemon = document.querySelector('.pokemon-list_list')
  const listPokemon = boxListPokemon.querySelectorAll('.pokemon_item')
  const boxShow = document.querySelector('.pokemon-show')
  const btn = boxShow.querySelector('.add-pokemon')

  listPokemon.forEach(item => {
    const id = item.children[0].getAttribute('id-data')
    if (i === Number(id)) {
      item.classList.remove('overlay')
      btn.removeAttribute('disabled')
    }
  })
}

window.onload = () => {
  const fixTitleSelect = e => e.target.setAttribute('contentEditable', 'true')
  document.querySelector('.pokemon-select_heading.-edit').addEventListener('dblclick', fixTitleSelect)
  renderPokemon(pokemons)
}
