import {  getAllProductsModels,  getProductsByIdModels, createProductsModels, deleteProductsModels, updateProductsModels, searchProductsModels, } from '../models/products.model.js'

/*Funciona*/
const getAllProducts = async (req, res) => {
    const products = await getAllProductsModels()
    res.status(200).json(products)     
}

/*Funciona*/
const getProductsById = async (req , res ) =>{
    const {id} = req.params
    const product = await getProductsByIdModels(id)
    if (!product){
        res.status(404).json( {error:` Producto ${id} que solicitaste no existe`})
    }
    res.json(product)
}

/*Funciona*/
const createProducts = async (req , res ) =>{
    const { name ,price , description , categoria} = req.body
    const newProducts = await createProductsModels({name, price, description , categoria})
    res.status(201).json(newProducts)
}

/*Funciona*/
const deleteProducts = async (req, res) => {
    const id = req.params.id
    const product = await deleteProductsModels(id)   
    if(!product){
        return res.status(404).json({error: 'Producto no Encontrado'})
    }
    res.status(200).json(product)

}

/*Funciona*/
const updateProdcts = async (req , res ) => {
    const id = req.params.id
    const data = req.body
    const product = await updateProductsModels(id , data)
    if(!product){
        return res.status(404).json({error: 'Producto no Encontrado'})
    }
    res.status(200).json(product)
}

const searchProducts = (req , res ) => {
    const {name} = req.query 
     const search = searchProductsModels(name)
      res.json(search)
}

export {
    getAllProducts,
    getProductsById,
    createProducts,
    updateProdcts,
    deleteProducts,
    searchProducts

}