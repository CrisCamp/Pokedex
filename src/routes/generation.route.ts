import express from 'express'
import { Generation } from '../types/generation.type'
import GenerationService from '../services/generation.service'
import passport from 'passport'
import { UserRequestType } from '../types/user.type'
import boom from '@hapi/boom'

const router = express.Router()
const service = new GenerationService()

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: UserRequestType, res, next) => {
    try {
      if (req.query.generation) {
        const { generation } = req.query
        const generations = await service.findByGeneration(
          generation as string
        )
        return res.status(200).json(generations)
      }
      if (req.query.id) {
        const { id } = req.query
        const generation = await service.findById(id as string)
        return res.status(200).json(generation)
      }
      const generations = await service.findAll()
      res.status(200).json(generations)
    } catch (error) {
      console.error('Error:', error)
      next(boom.boomify(error))
    }
  }
)

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const generation: Generation = req.body
      const newGeneration = await service.create(generation)
      res.status(201).json(newGeneration)
    } catch (error) {
      console.error('Error:', error)
      next(boom.boomify(error))
    }
  }
)

export default router