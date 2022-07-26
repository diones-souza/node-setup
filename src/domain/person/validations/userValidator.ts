import { body } from 'express-validator'

const createUserValidator = [
    body("name").isLength({ min: 5 }),
    body("email").isEmail()
]

export { createUserValidator }