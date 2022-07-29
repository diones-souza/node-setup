import { Request } from 'express'
import { UserRepository } from '../repositories/userRepository'

const userRepository = new UserRepository()
export class UserService {
  async getItems(request: Request) {
    const { name, email } = request.body
    const where = {
      name,
      email
    }

    return userRepository.getItems(where)
  }

  async getItem(request: Request) {
    const { id } = request.params
    const where = {
      id: parseInt(id, 10)
    }

    return userRepository.getItem(where)
  }

  async create(request: Request) {
    const { name, email } = request.body
    const data = {
      name,
      email
    }

    return userRepository.create(data)
  }
}
