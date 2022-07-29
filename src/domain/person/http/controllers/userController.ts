import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { UserService } from '../../services/userService'

const userService = new UserService()

export class UserController {
  async getItems(request: Request, response: Response) {
    userService
      .getItems(request)
      .then(result => {
        return response.json(result)
      })
      .catch(error => {
        return response.json(error)
      })
  }

  async getItem(request: Request, response: Response) {
    userService
      .getItem(request)
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

    userService
      .create(request)
      .then(result => {
        return response.json(result)
      })
      .catch(error => {
        return response.json(error)
      })
  }
}
