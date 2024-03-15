import type { Model } from 'mongoose'
import type { Request } from 'express'
import { ObjectId } from 'mongoose'
import { User } from './user.type'

// export type Gen = ToClientUser & {
//   createdAt?: Date
//   lastModified?: Date
// }

// export type UserRequestType = Request & {
//   generation: Gen
// }

// export type JwtRequestType = Request & {
//   generation: {
//     sub: ObjectId
//   }
// }

// export type ToClientUser = {
//   id?: string
//   name: string
//   user: User
// }

// export type GenerationMethods = {
//   toClient: () => ToClientUser
// }

// export type GenerationModel = Model<Gen, {}, GenerationMethods>

export type Gen = {
  id?: string
  name: string
  user: User
}

export type GenerationModel = Model<Gen, {}>
