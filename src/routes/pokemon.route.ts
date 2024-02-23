import express from 'express'
import { Pokemon } from '../types/pokemon.type'
import PokemonService from '../services/pokemon.service'

const router = express.Router()
const service = new PokemonService()

router.post('/', async (req, res) => {
  const pokemon: Pokemon = req.body
  const newPokemon = await service.create(pokemon)

  res.status(201).json(newPokemon)
})

router.get('/', async (req, res, next) => {
  try {
    const pokemons = await service.findAll()
    res.status(200).json(pokemons)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const pokemon = await service.findById(req.params.id)
    res.status(200).json(pokemon)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const pokemon = await service.findById(req.query.name as string)
    res.status(200).json(pokemon)
  } catch (error) {
    next(error)
  }
})

export default router