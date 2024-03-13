import express from 'express'
import PokemonRouter from './pokemon.route'
import UserRouter from './user.route'
import AuthRouter from './auth.route'
import GenerationRouter from './generation.route'

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/pokemons', PokemonRouter)
  router.use('/users', UserRouter)
  router.use('/auth', AuthRouter)
  router.use('/generation', GenerationRouter)
}

export default routerApi