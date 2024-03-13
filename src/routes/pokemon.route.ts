import express from 'express'
import { Pokemon } from '../types/pokemon.type'
import PokemonService from '../services/pokemon.service'
import passport from 'passport'
import { UserRequestType } from '../types/user.type'
import { ObjectId } from 'mongoose'
import boom from '@hapi/boom'

const router = express.Router()
const service = new PokemonService()

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: UserRequestType, res, next) => {
    try {
      if (req.query.name) {
        const { name } = req.query
        const pokemons = await service.findByName(name as string)
        return res.status(200).json(pokemons)
      }

      if (req.query.type) {
        const { type } = req.query
        const pokemons = await service.findByType(type as string)
        return res.status(200).json(pokemons)
      }

      if (req.query.weight) {
        const { weight } = req.query
        const pokemons = await service.findByWeight(weight as string)
        return res.status(200).json(pokemons)
      }
      
      if (req.query.height) {
        const { height } = req.query
        const pokemons = await service.findByHeight(height as string)
        return res.status(200).json(pokemons)
      }   

      if (req.query.id) {
        const { id } = req.query
        const pokemon = await service.findById(id as string)
        return res.status(200).json(pokemon)
      }

      if (req.query.generation) {
        const { generation } = req.query
        const pokemons = await service.findByGenerationName(generation as string)
        return res.status(200).json(pokemons)
      }

      if (req.query.generationid) {
        const { generationid } = req.query
        const pokemons = await service.findByGenerationId(generationid as string)
        return res.status(200).json(pokemons)
      }

      const pokemons = await service.findAll()
      res.status(200).json(pokemons)
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
      const pokemon: Pokemon = req.body
      const newPokemon = await service.create(pokemon)
      res.status(201).json(newPokemon)
    } catch (error) {
      console.error('Error:', error)
      next(boom.boomify(error))
    }
  }
)

export default router