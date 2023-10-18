

//Pegar a lista do Pokemon
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
//Pegar o card Do pokemon(card Principal)
const pokemonsCard = document.querySelectorAll('.pokemon-card')

//Usando um Foreach para percorrer a lista de pokemons
listaSelecaoPokemons.forEach(pokemon => {

    //Usando um evento click
    pokemon.addEventListener('click', () =>{

    //Pegando a classe .open lá no HTML e removendo essa classe
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

    //Pegando o Id dos pokemons (pelo id da lista e pelo id do card)
        const idPokemonSelecionado = pokemon.attributes.id.value //listagem dos pokemons
        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'

    //Adicionando o cartão princpipal do okemon para abrir
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

    //Fazendo a logica de trocar a cor vermelha para cada pokemon
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})