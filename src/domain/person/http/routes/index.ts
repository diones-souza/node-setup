import { Router } from "express"
import { UserController } from "../controllers/userController"

const { createUserValidator } = require("../../validations/createUserValidator")
const router = Router()

const userController = new UserController()

router.get("/user/:id", userController.getItem)
router.post("/user", createUserValidator, userController.create)

export { router }