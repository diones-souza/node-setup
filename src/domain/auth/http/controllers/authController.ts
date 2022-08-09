import { Request, Response } from 'express'
// import { validationResult } from 'express-validator'
import { AuthService } from '../../services/authService'

const authService = new AuthService()

export class AuthController {
  async signIn(request: Request, response: Response) {
    authService
      .signIn(request.body)
      .then(result => {
        return response.json(result)
      })
      .catch(error => {
        return response.json(error)
      })
  }
}
