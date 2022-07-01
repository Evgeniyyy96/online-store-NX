import { db } from '~/helpers/firebaseInit.js'

export default async (request, response) => {
    const doc = await db.collection('products').doc(request.context.params.id).get()
    return doc.exists
        ? { uuid: doc.id, ...doc.data() }
        : {}
}
