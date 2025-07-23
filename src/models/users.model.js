import { db } from '../firebase/firebase.js'
import { collection, addDoc , getDocs } from 'firebase/firestore'
const usersCollection = collection(db , "users")

/* Consultar todos los usuarios a FireBase */

const getAllUsersModels = async () => {
   try {
    const snapshot = await getDocs(usersCollection)
    return snapshot.docs.map((doc) => ({id: doc.id , ...doc.data()}))
   } catch (error) {
    console.error(error)
   }
}

/* Crear un nuevo Usuario en FireBase */
const createUsersModels = async ( data) => {
 try {
  const docRef = await addDoc(usersCollection, data)
  return { id: docRef.id , ...data}
 } catch (error) {
    console.error(error)
 }
}

export {
     createUsersModels,
     getAllUsersModels
}