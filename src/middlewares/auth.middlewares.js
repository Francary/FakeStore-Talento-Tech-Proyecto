import jwt from 'jsonwebtoken'

const auth = ( req , res, next ) => {
    // const token = req.headers["authorization"]?.split(" ")[1]  // Como lo explicaron en clases
    const token = req.headers["authorization"]
    
    if(!token) return res.sendStatus(401)

        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if(err)  return res.sendStatus(403)
                next()
        })
}

export{
    auth
}