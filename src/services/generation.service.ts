import { ObjectId } from 'mongoose'
import Generations from '../models/generation.model'
import { Gen } from '../types/generation.type '
import boom from '@hapi/boom'

class GenerationService {
  async create(gen: Gen, userId: ObjectId) {
    const newGeneration = await Generations.create({
      ...gen,
      user: userId
    }).catch((error) => {
      console.log('Could not save pokemon', error)
    })
    const existingGeneration = await this.findById((newGeneration as any)._id)

    return existingGeneration.populate([{ path: 'user', strictPopulate: false }])
  }
    
  async findAll() {
    const generations = await Generations.find()
      .populate([{ path: 'user', strictPopulate: false }])
      .catch((error) => {
        console.log('Error while connecting to the DB', error)
      })

    if (!generations) {
      throw boom.notFound('There are not categories')
    }

    return generations
  }

  async findById(id: string) {
    const generation = await Generations.findById(id).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!generation) {
      throw boom.notFound('Generation not found')
    }

    return generation
  }

  async findByName(name: string) {
    const generation = await Generations.findOne({ name }).catch((error) => {
      console.log('Could not retrieve generation info', error)
    })

    if (!generation) {
      throw boom.notFound('Gen not found')
    }
  }
}

export default GenerationService