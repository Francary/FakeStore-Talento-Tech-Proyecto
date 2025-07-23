import express from 'express'
import { createUsers, getAllUsers } from '../controllers/users.controller.js';

const usersRouter = express.Router()

usersRouter.get('/users' , getAllUsers)
usersRouter.post('/users' , createUsers)


export {
    usersRouter
}