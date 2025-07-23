import { Router } from "express";
import { loginController } from "../controllers/auth.controller.js";
const loginRouter = Router()

loginRouter.post('/login', loginController)

export {
    loginRouter
}