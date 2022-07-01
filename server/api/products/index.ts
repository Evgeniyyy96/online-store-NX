import { db } from '~/helpers/firebaseInit.js'

export default async (request, response) => {
    const productsSnap = await db.collection('products').get()
    return productsSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        }
    })
}
