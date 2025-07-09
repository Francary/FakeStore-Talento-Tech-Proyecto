import express from 'express'
import cors from 'cors'
import { productsRouter } from './src/routes/products.routes.js'

const app = express()

/*Configuración básica: Permitir todos los orígenes*/
app.use(cors())

/*Configuración avanzada: Permitir dominios específicos*/

const corsOptions = {
    origin: ['https://example.com', 'https://anotherdomain.com'],
    methods:['GET', 'POST', 'PUT', 'DELETE' ],
    allowedHearders:['Content-Type' , 'Authorization' ],
    credentials: true
}
app.use(cors(corsOptions))
/*  Middelware parar capturar req.body*/

app.use(express.json())

const PORT = 3000

app.get('/',(req, res) =>{
    res.send('<h1>Hola Mundo desde MI API</h1>')
})


app.use('/api', productsRouter)

/*Middleware para majenar errores 404*/
app.use((req, res, next) =>{
    res.status(404).send('Ruta invalidad')
})

app.listen(PORT, ( ) => {
   console.log(`Servido iniciado correctamente en el Puerto http://localhost:${PORT}`) 
})