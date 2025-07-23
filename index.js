import "dotenv/config"
import express from 'express'
import cors from 'cors'
import { productsRouter } from './src/routes/products.routes.js'
import { loginRouter } from "./src/routes/auth.routes.js"
import { usersRouter } from "./src/routes/users.routes.js"
import { auth } from "./src/middlewares/auth.middlewares.js"

const app = express()
const PORT = process.env.PORT 

/*Configuración básica: Permitir todos los orígenes*/
app.use(cors())

/*Configuración avanzada: Permitir dominios específicos*/
const corsOptions = {
    origin: ['https://fake-store-talento-tech-proyecto.vercel.app'],
    methods:['GET', 'POST', 'PUT', 'DELETE' ],
    allowedHearders:['Content-Type' , 'Authorization' ],
    credentials: true
}

app.use(cors(corsOptions))


/*  Middelware parar capturar req.body*/
app.use(express.json())


/* Rutas */

app.get('/',(req, res) =>{
    res.send('<h1>Hola Mundo desde MI API</h1>')
})

app.use('/api' , usersRouter)
app.use('/api', loginRouter)
app.use('/api' ,auth, productsRouter)

/*Middleware para majenar errores 404*/
app.use((req, res, next) =>{
    res.status(404).send('Ruta invalidad')
})

app.listen(PORT, ( ) => {
   console.log(`Servido iniciado correctamente en el Puerto http://localhost:${PORT}`) 
})