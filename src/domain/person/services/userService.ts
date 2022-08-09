import { Request } from 'express'
import { UserRepository } from '../repositories'
import { hash } from 'bcryptjs'

const userRepository = new UserRepository()

interface User {
  name: string
  username: string
  password: string
}

interface Filter {
  name: string
  username: string
}

export class UserService {
  async getItems(filter: Filter) {
    const where = {
      ...filter
    }

    return userRepository.getItems(where)
  }

  async getItem(id: number) {
    const where = {
      id
    }

    return userRepository.getItem(where)
  }

  async create(user: User) {
    const { name, username, password } = user

    const passwordHash = await hash(password, 8)

    const data = {
      name,
      username,
      password: passwordHash
    }

    return userRepository.create(data)
  }
}
