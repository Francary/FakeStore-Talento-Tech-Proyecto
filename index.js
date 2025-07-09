import express from 'express'
import cors from 'cors'


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

const products = [
    { id: 1, name: 'Intel 9 Ultra', price: 100 },
    { id: 2, name: 'Tarjeta Madre', price: 200 },
    { id: 3, name: 'Fuente de Poder Modular', price: 300 }
]

app.get('/ping',(req, res) =>{
    res.send('/pong')
})

app.get('/',(req, res) =>{
    res.send('<h1>Hola Mundo desde MI API</h1>')
})

app.get('/products', (req, res) => {
    res.json(products)     
})

app.get('/products/search', (req , res ) => {
    const {name }  = req.query
    const filterProducts = products.filter((intem) => intem.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    // console.log(req.query);
     res.json(filterProducts)   
    
})

app.get('/products/:id' , (req , res ) =>{
    const {id} = req.params
    const product = products.find((item) => item.id == id)
    if (!product){
        res.status(404).json( {error:` Producto ${id} que solicitaste no existe`})
    }
    res.json(product)
    
})

app.post('/products' , (req , res ) =>{
    const { name ,price } = req.body

    const newProducts = {
        id: products.length + 1,
        name,
        price
    }
    products.push(newProducts)
    res.status(201).json(newProducts)
})

app.put('/products/:id' , (req , res ) => {
    const productId = parseInt(req.params.id, 10 )
    const productIndex = products.findIndex((item) => item.id === productId)
    if(productIndex === -1 ){
        return res.status(404).json({error: 'Producto no Encontrado'})
    }

    const {name , price} = req.body
    products[productIndex] = {id: productId , name, price}
    res.json(products[productIndex])
})


app.delete('/products/:id' , (req, res) => {
    const productId = parseInt(req.params.id, 10 )
    const productIndex = products.findIndex((item) => item.id === productId)
    if(productIndex === -1 ){
        return res.status(404).json({error: 'Producto no Encontrado'})
    }
    products.splice(productIndex, 1)
    res.status(204).send()

})





/*Middleware para majenar errores 404*/
app.use((req, res, next) =>{
    res.status(404).send('Ruta invalidad')
})


app.listen(PORT, ( ) => {
   console.log(`Servido iniciado correctamente en el Puerto http://localhost:${PORT}`)
    
})