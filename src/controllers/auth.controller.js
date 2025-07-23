import jwt from 'jsonwebtoken'
import {getAllUsersModels} from '../models/users.model.js'

const loginController = async (req, res) => {
    const { email, password } = req.body

    try {
        const users = await getAllUsersModels()
         
        const userFound = users.find(user => user.email === email && user.password === password)

        if (userFound) {
            const payload = { email }
            const options = { expiresIn: "1h" }
            const token = jwt.sign(payload, process.env.JWT_SECRET, options)
            return res.json({ token })
        } else {
            return res.sendStatus(401)
        }
    } catch (error) {
        console.error("Error al obtener usuarios:", error)
        return res.status(500).json({ error: "Error interno del servidor" })
    }
}


export {
    loginController
}