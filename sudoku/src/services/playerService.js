import { db } from "../firebaseConfig"
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  Timestamp,
  limit,
} from "firebase/firestore"

export async function createPuzzle({ title, body }) {
  const data = { title, body, date: Timestamp.now() }
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

export async function fetchScore() {
  const snapshot = await getDocs(
    query(collection(db, "players"), orderBy("date", "desc"), limit(20))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}
export async function updateScore(playerID){
  
}

export async function fetchPuzzle() {
    const snapshot = await getDocs(
      query(collection(db, "score"), orderBy("date", "desc"))
    )
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }