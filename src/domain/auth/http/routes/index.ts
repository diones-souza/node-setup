import { Router } from 'express'
import { AuthController } from '../controllers/authController'

const router = Router()

const authController = new AuthController()

router.post('/auth', authController.signIn)

export { router }
