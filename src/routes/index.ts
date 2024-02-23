import express from 'express'
import PokemonRouter from './pokemon.route'

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/pokemons', PokemonRouter)
}

export default routerApi