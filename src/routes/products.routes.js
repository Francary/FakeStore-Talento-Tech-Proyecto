import express from 'express'

const productsRouter = express.Router()

productsRouter.get('/products', (req , res) =>{

    res.send('Listado de Productos')
})

productsRouter.get('/products/:id' , (req , res) => {
    res.send(`Producto con id ${req.params.id}` )
})

productsRouter.post('/products' , (req , res) => {
    res.send(`Producto Creado`)
})

export{
    productsRouter
}