import { getFirestore } from 'firebase-admin/firestore'
import {initializeApp, getApps, cert} from 'firebase-admin/app'

const apps = getApps()

let app = undefined

if (!apps.length) {
  app  = initializeApp({
    credential: cert('./online-store-nuxt-3-3f405-firebase-adminsdk-qsjwy-0ef016c9ed.json')
  })
}

export const db = getFirestore(app)

