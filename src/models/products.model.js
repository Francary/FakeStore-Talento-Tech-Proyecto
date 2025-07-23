import { db } from '../firebase/firebase.js'
import { collection , getDoc, getDocs , doc , addDoc, deleteDoc , setDoc} from 'firebase/firestore'

const productsCollection = collection(db , "products")


/* Consulta todos los productos a FireBase */
const getAllProductsModels = async () => {
   try {
    const snapshot = await getDocs(productsCollection)
    return snapshot.docs.map((doc) => ({id: doc.id , ...doc.data()}))
   } catch (error) {
    console.error(error)
   }
}

/* Consulta un producto por ID a FireBase */
const getProductsByIdModels = async (id) => {
    try {
        const productRef = doc(productsCollection, id)
        const snapshot = await getDoc(productRef)
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data()} : null;
    } catch (error) {
        console.error(error)
    } 
}

/* Crear un nuevo producto en FireBase */
const createProductsModels = async ( data) => {
 try {
  const docRef = await addDoc(productsCollection, data)
  return { id: docRef.id , ...data}
 } catch (error) {
    console.error(error)
 }
}

/* Eliminar un producto en FireBase*/
const deleteProductsModels = async (id) => {
try {
    const productRef = doc(productsCollection, id)
    const snapshot = await getDoc(productRef)

    if(!snapshot.exists()){
        return false
    }

    await deleteDoc(productRef)
    return true
} catch (error) {
    console.error(error)
}
}

/* Editar un producto en FireBase*/
const updateProductsModels = async ( id , data) => {
    try {
        const productRef = doc(productsCollection , id)
        const snapshot = await getDoc(productRef)
        if(!snapshot.exists()){
            return false
        }
        await setDoc(productRef, data)
        return {id , ...data}
    } catch (error) {
       console.error(error) 
    }
}


const searchProductsModels =  (name) => {
    const products = getAllProductsModels()
    
     const filterProducts = products.filter((item) => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    
    return filterProducts  
}

export {
    getAllProductsModels,
    getProductsByIdModels,
    createProductsModels,
    deleteProductsModels,
    updateProductsModels,

    searchProductsModels
}