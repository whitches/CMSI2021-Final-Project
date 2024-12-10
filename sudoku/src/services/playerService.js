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
/*export async function fetchScore() {
  const snapshot = await getDocs(
    query(collection(db, "players"), orderBy("date", "desc"), limit(20))
  )
  console.log(snapshot.docs)
  console.log("hello")
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}*/

export async function fetchRecent() {
  const snapshot = await getDocs(
    query(collection(db, "players"), orderBy("playerId", "playerName"), limit(1))
  )
  return snapshot.docs
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