const products = [
    { id: 1, name: 'Intel 9 Ultra', price: 100 },
    { id: 2, name: 'Tarjeta Madre', price: 200 },
    { id: 3, name: 'Fuente de Poder Modular', price: 300 }
]

import {  getAllProductsModels,  getProductsByIdModels, createProductsModels, deleteProductsModels, } from '../models/products.model.js'

const getAllProducts = async (req, res) => {
    const products = await getAllProductsModels()
    res.status(200).json(products)     
}

const getProductsById = async (req , res ) =>{
    const {id} = req.params
    const product = await getProductsByIdModels(id)
    if (!product){
        res.status(404).json( {error:` Producto ${id} que solicitaste no existe`})
    }
    res.json(product)
    
}

const createProducts = (req , res ) =>{
    const { name ,price } = req.body
    const newProducts = createProductsModels(name, price)
    res.status(201).json(newProducts)
}


const updateProdcts = (req , res ) => {
    const productId = parseInt(req.params.id, 10 )
    const productIndex = products.findIndex((item) => item.id === productId)
    if(productIndex === -1 ){
        return res.status(404).json({error: 'Producto no Encontrado'})
    }

    const {name , price} = req.body
    products[productIndex] = {id: productId , name, price}
    res.json(products[productIndex])
}


const deleteProducts = (req, res) => {
    const id = parseInt(req.params.id, 10)
    const product = deleteProductsModels(id)
    if(!product){
        return res.status(404).json({error: 'Producto no Encontrado'})
    }
    
    res.status(204).json(`Producto Eliminado Exitosamente`)

}

const searchProducts = (req , res ) => {
    const {name }  = req.query
    const filterProducts = products.filter((intem) => intem.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    res.json(filterProducts)   
}

export {
    getAllProducts,
    getProductsById,
    createProducts,
    updateProdcts,
    deleteProducts,
    searchProducts

}