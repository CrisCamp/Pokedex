import { ObjectId } from 'mongoose'
import Pokemons from '../models/pokemon.model'
import { Pokemon } from '../types/pokemon.type'
import boom from '@hapi/boom'

class PokemonService {
  async create(pokemon: Pokemon, genId: ObjectId) {
      const newPokemon = await Pokemons.create({
        ...pokemon,
        gen: genId
      }).catch((error) => {
        console.log('Could not save pokemon', error)
      })
      const existingPokemon = await this.findById((newPokemon as any)._id)

      return existingPokemon.populate([{ path: 'user', strictPopulate: false }])
    }

  async findAll() {
    const pokemons = await Pokemons.find()
      .populate([{ path: 'user', strictPopulate: false }])
        .catch((error) => {
        console.log('Error while connecting to the DB', error)
      })

    if (!pokemons) {
      throw boom.notFound('There are not categories')
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

  async findByType(type: string) {
    const pokemon = await Pokemons.findOne({ type }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!pokemon) {
      throw boom.notFound('Pokemon not found')
    }
  }

  async findByWeight(weight: string) {
    const pokemon = await Pokemons.findOne({ weight }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!pokemon) {
      throw boom.notFound('Pokemon not found')
    }
  }

  async findByHeight(height: string) {
    const pokemon = await Pokemons.findOne({ height }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!pokemon) {
      throw boom.notFound('Pokemon not found')
    }
  }

}

export default PokemonService