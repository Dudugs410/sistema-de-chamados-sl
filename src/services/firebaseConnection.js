
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA-8CNgV5DCTEyY0JnKDebxmREx2zD9vxw',
  authDomain: 'sistema-de-chamados-sl.firebaseapp.com',
  projectId: 'sistema-de-chamados-sl',
  storageBucket: 'sistema-de-chamados-sl.appspot.com',
  messagingSenderId: '1048416168444',
  appId: '1:1048416168444:web:594f7a9ab955a7ae5e2a79',
  measurementId: 'G-FXTKNLRH7H'
}


const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }