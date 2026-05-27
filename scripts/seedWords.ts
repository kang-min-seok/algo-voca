import { config } from 'dotenv'
config({ path: '.env.local' })

import { initializeApp } from 'firebase/app'
import { getFirestore, doc, writeBatch } from 'firebase/firestore'
import { DEV_WORDS_DATASET } from '../src/data/geminiDevData.js'
import { DOC_READING_WORDS_DATASET } from '../src/data/geminiDocData.js'

const app = initializeApp({
  apiKey:            process.env.VITE_FIREBASE_API_KEY!,
  authDomain:        process.env.VITE_FIREBASE_AUTH_DOMAIN!,
  projectId:         process.env.VITE_FIREBASE_PROJECT_ID!,
  storageBucket:     process.env.VITE_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
  appId:             process.env.VITE_FIREBASE_APP_ID!,
})

const db = getFirestore(app)
const BATCH_SIZE = 400

async function seedWords() {
  const allWords = [...DEV_WORDS_DATASET, ...DOC_READING_WORDS_DATASET]

  for (let i = 0; i < allWords.length; i += BATCH_SIZE) {
    const chunk = allWords.slice(i, i + BATCH_SIZE)
    const batch = writeBatch(db)

    for (const word of chunk) {
      batch.set(doc(db, 'words', word.id), word)
    }

    await batch.commit()
    console.log(`완료: ${i + chunk.length} / ${allWords.length}`)
  }

  console.log('모든 단어 삽입 완료')
  process.exit(0)
}

seedWords().catch((err) => {
  console.error(err)
  process.exit(1)
})
