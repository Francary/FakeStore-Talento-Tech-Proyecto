import { loginModel } from "../models/auth.model.js"

const loginController = async (req, res) => {
    const { email, password } = req.body

    try {
        const token = await loginModel(email, password)
        return res.json({ token })


    } catch (error) {
       if (
      error.message === 'Usuario no encontrado' ||
      error.message === 'Contraseña Incorrecta'
    ) {
      return res.status(401).json({ error: error.message })
    }
    return res.status(500).json({ error: 'Error interno del servidor' })
    }
}


export {
    loginController
}