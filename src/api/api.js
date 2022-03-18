import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore'
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage'

const Config = {
  apiKey: 'AIzaSyDXPkIZokdyDVD-XPKLUTfoP5tml4qlKs8',
  authDomain: 'ratemypocket-65bb9.firebaseapp.com',
  projectId: 'ratemypocket-65bb9',
  storageBucket: 'ratemypocket-65bb9.appspot.com',
  messagingSenderId: '270587031204',
  appId: '1:270587031204:web:a9cd5e96afe3d1ef560031',
  measurementId: 'G-H2N3TNKTLH',
}

// Initialize Firebase, storage and firestore
const app = initializeApp(Config)
const db = getFirestore(app)
const storage = getStorage()
const storageRef = ref(storage)
const dataRef = collection(db, 'institutions')

// Function to upload file in the storage of firebase and return the url of file
export const uploadFile = async (file) => {
  const imagesRef = ref(storageRef, `images/${file?.name}`)
  const r = await uploadBytes(imagesRef, file)
  if (r) {
    // Create a reference from a Google Cloud Storage URI
    const fileURL = await getDownloadURL(imagesRef)
    // return the file URL uploaded
    return fileURL
  }
}

// Add a new institution
export const addNewInstitution = async (data) => {
  const itemCollection = doc(dataRef)
  await setDoc(doc(db, 'institutions', itemCollection.id), {
    id: itemCollection.id,
    ...data,
  })
}

// Delete institution
export const deleteInstitution = async (docId) => {
  await deleteDoc(doc(db, 'institutions', docId))
}

// Get all institutions
export const getInstitutions = async () => {
  let data = []
  const req = await getDocs(dataRef)
  req.docs.map((i) => data.push(i.data()))
  return data
}

// Update institution
export const updateInstitution = async (docId, data) => {
  const docRef = doc(db, 'institutions', docId)
  await updateDoc(docRef, { ...data })
}
