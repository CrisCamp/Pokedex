import express from 'express'
import { Pokemon } from '../types/pokemon.type'
import PokemonService from '../services/pokemon.service'
import passport from 'passport'
import { JwtRequestType } from '../types/user.type'
import { ObjectId } from 'mongoose'

const router = express.Router()
const service = new PokemonService()

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: JwtRequestType, res) => {
    // const sub = req.user.sub
    const {
      user: { sub }
    } = req
    const pokemon: Pokemon = req.body
    const newPokemon = await service.create(
      pokemon,
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
      const pokemons = await service.findAll()
      res.status(200).json(pokemons)
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
      const pokemon = await service.findById(req.params.id)
      res.status(200).json(pokemon)
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
      const pokemon = await service.findById(req.query.name as string)
      res.status(200).json(pokemon)
    } catch (error) {
      next(error)
    }
  }
)

export default router