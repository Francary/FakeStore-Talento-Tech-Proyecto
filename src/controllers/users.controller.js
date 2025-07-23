import bcrypt  from 'bcrypt'
import { createUsersModels, getAllUsersModels } from "../models/users.model.js";

/*Funciona*/
const getAllUsers = async (req, res) => {
    const users = await getAllUsersModels()
    res.status(200).json(users)
}

/*Funciona*/
const createUsers = async (req , res) =>{
    const {email , password , isAdmin} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const newUsers = await createUsersModels({
        email,
        password: hashedPassword,
        isAdmin,
    })
    res.status(201).json(newUsers)

}

export {
    createUsers,
    getAllUsers
}

