import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const __dirname = import.meta.dirname

const dataPath = path.join(__dirname , '../data/users.json')

const getAllUsers = () => {
    const data = fs.readFileSync(dataPath, 'utf-8')
       
    return JSON.parse(data)
}


const loginController =  (req , res) =>{

    const {email, password} = req.body
    const users= getAllUsers()  
    const userFound = users.find(user => user.email === email && user.password === password)
    
    if(userFound){
        const payload = {email}
        const expira = { expiresIn: "1h"}
        const token = jwt.sign(payload, process.env.JWT_SECRET , expira)
        return res.json({token})
    }else{
        return res.sendStatus(401)
    }
}

export {
    loginController
}