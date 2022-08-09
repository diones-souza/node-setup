import { Router } from 'express'
import { UserController } from '../controllers'
import { createUserValidator } from '../../validations'

const router = Router()

const userController = new UserController()

router.get('/users', userController.getItems)
router.get('/user/:id', userController.getItem)
router.post('/user', createUserValidator, userController.create)

export { router }
