import { Schema, model } from 'mongoose'
import { Pokemon, PokemonModel } from '../types/pokemon.type'
import { GENERATION_POKEMON_REFERENCE } from './generation.model'
export const POKEMON_REFERENCE = 'Pokemon'

const Pokemons = new Schema<Pokemon, PokemonModel>({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  weight: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  height: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  generation: {
    type: Schema.Types.ObjectId,
    ref: GENERATION_POKEMON_REFERENCE
  }
})

// export default model('Pokemon', Pokemons)
export default model(POKEMON_REFERENCE, Pokemons)
