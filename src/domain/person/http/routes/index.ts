import { Router } from "express"
import { UserController } from "../controllers/userController"

const { createUserValidator } = require("../../validations/userValidator")
const router = Router()

const userController = new UserController()

router.get("/users", userController.getItems)
router.get("/user/:id", userController.getItem)
router.post("/user", createUserValidator, userController.create)

export { router }