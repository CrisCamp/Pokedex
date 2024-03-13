import type { Model } from 'mongoose'
import { Generation } from './generation.type'

export type Pokemon = {
  id?: string
  name: string
  type: string
  weight: string
  height: string
  generation: Generation
}

export type PokemonModel = Model<Pokemon>