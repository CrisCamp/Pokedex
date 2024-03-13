import type { Model } from 'mongoose'

export type Generation = {
  id?: string
  generation: string
}

export type GenerationModel = Model<Generation>