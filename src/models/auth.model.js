import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {getAllUsersModels} from '../models/users.model.js'

const loginModel = async (email , password) => {
    const users = await getAllUsersModels()
     
    const userFound = users.find(user => user.email === email)
        if(!userFound){
            throw new Error ('Usuario no encontrado')
        }

        const passwordMatch = await bcrypt.compare(password, userFound.password)

        if(!passwordMatch){
            throw new Error ('Contraseña Incorrecta')
        }
            const payload = { 
                id: userFound.id,
                email: userFound.email,
                isAdmin: userFound.isAdmin
              }
            const options = { expiresIn: "1h" }
            const token = jwt.sign(payload, process.env.JWT_SECRET, options)
            return token
          
}

export {
    loginModel
}