import { Schema, model } from 'mongoose'
import { Pokemon, PokemonModel } from '../types/pokemon.type'

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
  }
})

export default model('Pokemon', Pokemons)
