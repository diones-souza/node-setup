import { body } from 'express-validator'

const userValidator = [
    body("email").isEmail()
]

export { userValidator }