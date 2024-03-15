import { Schema, model } from 'mongoose'
// import { Gen, GenerationModel, GenerationMethods } from '../types/generation.type '
import { Gen, GenerationModel } from '../types/generation.type '
import { USER_REFERENCE } from './user.model'
export const GENERATION_POKEMON_REFERENCE = 'Generation'

// const Generations = new Schema<Gen, GenerationModel, GenerationMethods>({
const Generations = new Schema<Gen, GenerationModel>({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: USER_REFERENCE
  }
})

// Generations.methods.toClient = function () {
//   return {
//     id: this._id as unknown as string,
//     name: this.name
//   }
// }

export default model(GENERATION_POKEMON_REFERENCE, Generations)