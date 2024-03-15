import type { Model } from 'mongoose'
import { Gen } from './generation.type '

export type Pokemon = {
  id?: string
  name: string
  type: string
  weight: string
  height: string
  generation: Gen
}

export type PokemonModel = Model<Pokemon>