import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { AuthService } from '../../services/authService'

const authService = new AuthService()

export class AuthController {
  async signIn(request: Request, response: Response) {
    const erros = validationResult(request)
    if (!erros.isEmpty()) {
      return response.status(400).json({ erros: erros.array() })
    }

    const { username, password } = request.body

    authService
      .signIn({ username, password })
      .then(result => {
        return response.json(result)
      })
      .catch(error => {
        return response.json({
          status: 'Error',
          message: error.message
        })
      })
  }
}
