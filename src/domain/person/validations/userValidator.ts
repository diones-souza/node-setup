import { body } from 'express-validator'

const createUserValidator = [
  body('name').isLength({ min: 5 }),
  body('username').isLength({ min: 5 }),
  body('password').isLength({ min: 8 })
]

export { createUserValidator }
