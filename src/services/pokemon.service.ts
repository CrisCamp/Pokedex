import Pokemons from '../models/pokemon.model'
import { Pokemon, PokemonModel } from '../types/pokemon.type'
import boom from '@hapi/boom'
import Generations from '../models/generation.model'

class PokemonService {
  async create(pokemon: Pokemon) {
    try {
      const gen = await Generations.findById(pokemon.generation)
      if (!gen) {
        throw boom.notFound(
          `No se encontró la generacion con id ${pokemon.generation}`
        )
      }
      pokemon.generation = gen
      const newPokemon = await Pokemons.create(pokemon)
      return newPokemon
    } catch (error) {
      console.log('No se guardo el pokemon', error)
      throw boom.badImplementation('Error al guardar el pokemon')
    }
  }

  async findAll() {
    try {
      const pokemons = await Pokemons.find().populate('generation')
      if (!pokemons || pokemons.length === 0) {
        throw boom.notFound('No se encontraron pokemons')
      }
      return pokemons
    } catch (error) {
      console.log('Error al conectarse a la base de datos', error)
      throw boom.badImplementation('Error al buscar pokemons')
    }
  }

  async findById(id: string) {
    try {
      const pokemon = await Pokemons.findById(id).populate('generation')
      if (!pokemon) {
        throw boom.notFound(`No se encontró un pokemon con id ${id}`)
      }
      return pokemon
    } catch (error) {
      console.log(`Error al buscar pokemon por id ${id}`, error)
      throw boom.notFound(`No se encontró un pokemon con id ${id}`)
    }
  }

  async findByName(name: string) {
    try {
      const pokemons = await Pokemons.find({ name: name }).populate('generation')
      if (!pokemons || pokemons.length === 0) {
        throw boom.notFound(`No se encontro pokemon con el nombre ${name}`)
      }
      return pokemons
    } catch (error) {
      console.log(`Error al buscar el pokemon por nombre ${name}`, error)
      throw boom.notFound(`No se encontro el pokemon con el nombre ${name}`)
    }
  }

  async findByType(type: string) {
    try {
      const pokemons = await Pokemons.find({ type: type }).populate('generation')
      if (!pokemons || pokemons.length === 0) {
        throw boom.notFound(`No se encontro pokemon por el tipo ${type}`)
      }
      return pokemons
    } catch (error) {
      console.log(`Error al buscar el pokemon por nombre ${type}`, error)
      throw boom.notFound(`No se encontro el pokemon por el tipo ${type}`)
    }
  }

  async findByWeight(weight: string) {
    try {
      const pokemons = await Pokemons.find({ weight: weight }).populate('generation')
      if (!pokemons || pokemons.length === 0) {
        throw boom.notFound(`No se encontro pokemon por el peso ${weight}`)
      }
      return pokemons
    } catch (error) {
      console.log(`Error al buscar el pokemon por nombre ${weight}`, error)
      throw boom.notFound(`No se encontro el pokemon por el peso ${weight}`)
    }
  }

  async findByHeight(height: string) {
    try {
      const pokemons = await Pokemons.find({ height: height }).populate('generation')
      if (!pokemons || pokemons.length === 0) {
        throw boom.notFound(`No se encontro pokemon por la altura ${height}`)
      }
      return pokemons
    } catch (error) {
      console.log(`Error al buscar el pokemon por nombre ${height}`, error)
      throw boom.notFound(`No se encontro el pokemon por la altura ${height}`)
    }
  }

  async findByGenerationId(generationId: string) {
    try {
      const pokemons = await Pokemons.find({
        generation: generationId
      }).populate('generation')
      if (!pokemons || pokemons.length === 0) {
        throw boom.notFound(
          `No se encontro pokemon con la generacion de id ${generationId}`
        )
      }
      return pokemons
    } catch (error) {
      console.log(
        `Error al buscar el pokemon por id la generacion ${generationId}`,
        error
      )
      throw boom.notFound(
        `No se encontro el pokemon con la generacion de id ${generationId}`
      )
    }
  }

  async findByGenerationName(generation: string) {
    try {
      const gen = await Generations.findOne({
        generation: generation
      })
      if (!gen) {
        throw boom.notFound(
          `No se encontró la generacion con el nombre ${generation}`
        )
      }
      const pokemons = await Pokemons.find({
        generation: gen._id
      }).populate('generation')
      if (!pokemons || pokemons.length === 0) {
        throw boom.notFound(
          `No se encontro el pokemon con la generacion ${generation}`
        )
      }
      return pokemons
    } catch (error) {
      console.log(
        `Error al buscar el pokemon por su generacion ${generation}`,
        error
      )
      throw boom.notFound(
        `No se encontro el pokemon con la generacion ${generation}`
      )
    }
  }
}

export default PokemonService