import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { UserService } from '../../services'

const userService = new UserService()

export class UserController {
  async getItems(request: Request, response: Response) {
    const { name, username } = request.body

    userService
      .getItems({ name, username })
      .then(result => {
        return response.json(result)
      })
      .catch(error => {
        return response.json(error)
      })
  }

  async getItem(request: Request, response: Response) {
    const { id } = request.params

    userService
      .getItem(parseInt(id, 10))
      .then(result => {
        return response.json(result)
      })
      .catch(error => {
        return response.json(error)
      })
  }

  async create(request: Request, response: Response) {
    const erros = validationResult(request)
    if (!erros.isEmpty()) {
      return response.status(400).json({ erros: erros.array() })
    }

    const { name, username, password } = request.body

    userService
      .create({ name, username, password })
      .then(result => {
        return response.json(result)
      })
      .catch(error => {
        return response.json(error)
      })
  }
}
