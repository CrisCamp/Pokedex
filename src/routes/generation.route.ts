import express from 'express'
import { Gen } from '../types/generation.type '
import { JwtRequestType } from '../types/user.type'
import passport from 'passport'
import GenerationService from '../services/generation.service'
import { ObjectId } from 'mongoose'

const router = express.Router()
const service = new GenerationService()

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: JwtRequestType, res) => {
    // const sub = req.user.sub
    const {
      user: { sub }
    } = req
    const generation: Gen = req.body
    const newPokemon = await service.create(
      generation, 
      sub as unknown as ObjectId
    )

    res.status(201).json(newPokemon)
  }
)

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: JwtRequestType, res, next) => {
    try {
      const { user } = req
      console.log(user)
      const gens = await service.findAll()
      res.status(200).json(gens)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: JwtRequestType, res, next) => {
    try {
      const { user } = req
      console.log(user)
      const gens = await service.findAll()
      res.status(200).json(gens)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const gen = await service.findById(req.params.id)
      res.status(200).json(gen)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const gen = await service.findById(req.query.name as string)
      res.status(200).json(gen)
    } catch (error) {
      next(error)
    }
  }
)

export default router