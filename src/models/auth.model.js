/* NO LO ESTOY USANDO */

// import jwt from 'jsonwebtoken'

// const loginModel = async (req,res) =>{
//   const {email, password} = await req.body
//   try {
//     if(email== "admin@admin.com" && password == "admin123"){
//         const payload = {email, password}
//         const expira = { expiresIn: "1h"}
//         const token = jwt.sign(payload, process.env.JWT_SECRET , expira)
//         res.json({token})
//   }} catch (error) {
//     return res.sendStatus(401)
//   }    
// }

// export {
//     loginModel
// }