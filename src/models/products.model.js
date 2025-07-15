import fs from 'fs'
import path from 'path'

const __dirname = import.meta.dirname

const dataPath = path.join(__dirname , '../data/products.json')


const getAllProductsModels = () => {
    const data = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
}

const getProductsByIdModels = (id) => {
    const products = getAllProductsModels()
    return products.find(item => item.id == id)
}

const createProductsModels = ( name , price) => {
    const products = getAllProductsModels()
    const newProducts = {
            id: products.length + 1 ,
            name,
            price
        }
    products.push(newProducts)     

    fs.writeFileSync(dataPath, JSON.stringify(products,null,2))
    return newProducts
}

const deleteProductsModels = (id) =>{
    const products = getAllProductsModels()
    const productIndex = products.findIndex(item => item.id === id)

    if(productIndex == -1 ){
        return null
    }else{
        const product = products.splice(productIndex, 1)
        fs.writeFileSync(dataPath , JSON.stringify(products , null , 2))
        return product
    }

}

export {
    getAllProductsModels,
    getProductsByIdModels,
    createProductsModels,
    deleteProductsModels,
}