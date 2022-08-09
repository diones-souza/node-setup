import { body } from 'express-validator'

const createAuthValidator = [
  body('name').isLength({ min: 5 }),
  body('email').isEmail()
]

export { createAuthValidator }
