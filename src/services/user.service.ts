import Users from '../models/user.model'
import { User, UserModel } from '../types/user.type'
import boom from '@hapi/boom'
import bcrypt from 'bcrypt'

class UserService {
  async create(user: User) {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    const newUser = await Users.create({
      ...user,
      password: hashedPassword
    }).catch((error) => {
      console.log('Usuario No guardado', error)
    })

    if (!newUser) {
      throw boom.badRequest('Usuario No creado')
    }

    return newUser
  }

  async findByEmail(email: string) {
    const user = await Users.findOne({ email }).catch((error) => {
      console.log('No se recupero la info del usuario', error)
    })

    if (!user) {
      throw boom.notFound('Usuario no encontrado')
    }

    return user
  }
}

export default UserService