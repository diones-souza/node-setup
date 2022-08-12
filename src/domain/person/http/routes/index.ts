import { Router } from 'express'
import { UserController } from '../controllers'
import { createUserValidator } from '../../validations'
import { ensureAuth } from '../../../../middlewares/ensureAuth'

const router = Router()

const userController = new UserController()

router.get('/users', ensureAuth, userController.getItems)
router.get('/user/:id', ensureAuth, userController.getItem)
router.post('/user', createUserValidator, userController.create)

export { router }
