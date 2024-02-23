import type { Model } from 'mongoose'

export type Pokemon = {
  id?: string
  name: string
  type: string
  weight: string
  height: string
}

export type PokemonModel = Model<Pokemon>