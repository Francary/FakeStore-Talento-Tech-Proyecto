import express from 'express'
import { getAllProducts,getProductsById,createProducts,updateProdcts,deleteProducts, searchProducts } from '../controllers/products.controller.js'

const productsRouter = express.Router()

productsRouter.get('/products', getAllProducts)

productsRouter.get('/products/search' , searchProducts)

productsRouter.get('/products/:id' ,getProductsById)

productsRouter.post('/products' , createProducts)

productsRouter.put('/products/:id' , updateProdcts)

productsRouter.delete('/products/:id' , deleteProducts)


export{
    productsRouter
}