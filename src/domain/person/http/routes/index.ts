import { Router } from "express"
import { UserController } from "../controllers/userController"

const { userValidator } = require("../../validations/userValidator")
const router = Router()

const userController = new UserController()

router.post("/user", userController.create)
router.get("/user/:id", userValidator, userController.getItem)

export { router }