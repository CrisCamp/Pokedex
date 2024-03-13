import { Schema, model } from 'mongoose'
import { Generation, GenerationModel } from '../types/generation.type'
export const GENERATION_POKEMON_REFERENCE = 'Generations'

const Generations = new Schema<Generation, GenerationModel>({
  generation: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  }
})

export default model(GENERATION_POKEMON_REFERENCE, Generations)