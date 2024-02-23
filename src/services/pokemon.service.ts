import Pokemons from '../models/pokemon.model'
import { Pokemon, PokemonModel } from '../types/pokemon.type'
import boom from '@hapi/boom'

class PokemonService {
  async create(pokemon: Pokemon) {
    const newPokemon = await Pokemons.create(pokemon).catch((error) => {
      console.log('Could not save pokemon', error)
    })

    return newPokemon
  }

  async findAll() {
    const pokemons = await Pokemons.find().catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!pokemons) {
      throw boom.notFound('There are not pokemons')
    }

    return pokemons
  }

  async findById(id: string) {
    const pokemon = await Pokemons.findById(id).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!pokemon) {
      throw boom.notFound('Pokemon not found')
    }

    return pokemon
  }

  async findByName(name: string) {
    const pokemon = await Pokemons.findOne({ name }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!pokemon) {
      throw boom.notFound('Pokemon not found')
    }
  }
}

export default PokemonService