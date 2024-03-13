import Generations from '../models/generation.model'
import { Generation, GenerationModel } from '../types/generation.type'
import boom from '@hapi/boom'

class GenerationService {
  async create(generation: Generation) {
    try {
      const newGeneration = await Generations.create(generation)
      return newGeneration
    } catch (error) {
      console.log('No se guardo la generacion', error)
      throw boom.badImplementation('Error al guardar la generacion')
    }
  }

  async findAll() {
    try {
      const generations = await Generations.find()
      if (!generations || generations.length === 0) {
        throw boom.notFound('No se encontraron las generaciones')
      }
      return generations
    } catch (error) {
      console.log('Error al conectarse a la base de datos', error)
      throw boom.badImplementation('Error al buscar las generaciones')
    }
  }

  async findById(id: string) {
    try {
      const generation = await Generations.findById(id)
      if (!generation) {
        throw boom.notFound(`No se encontró la generacion con id ${id}`)
      }
      return generation
    } catch (error) {
      console.log(`Error al buscar la generacion por id ${id}`, error)
      throw boom.notFound(`No se encontró la generacion con id ${id}`)
    }
  }

  async findByGeneration(generation: string) {
    try {
      const generations = await Generations.find({
        generation: generation
      })
      if (!generations || generations.length === 0) {
        throw boom.notFound(`No se encontro la generacion ${generation}`)
      }
      return generations
    } catch (error) {
      console.log(
        `Error al buscar la generacion por su tipo ${generation}`,
        error
      )
      throw boom.notFound(`No se encontro la generacion${generation}`)
    }
  }
}

export default GenerationService