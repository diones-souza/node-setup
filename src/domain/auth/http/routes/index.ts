import { Router } from 'express'
import { AuthController } from '../controllers/authController'
import { createAuthValidator } from '../../validations/authValidator'

const router = Router()

const authController = new AuthController()

router.post('/auth', createAuthValidator, authController.signIn)

export { router }
