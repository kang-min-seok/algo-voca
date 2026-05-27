import { doc, writeBatch } from 'firebase/firestore'
import { db } from '@/services/firebase'
import { DEV_WORDS_DATASET } from '@/data/geminiDevData'
import { DOC_READING_WORDS_DATASET } from '@/data/geminiDocData'

const BATCH_SIZE = 400

export async function seedWords() {
  const allWords = [...DEV_WORDS_DATASET, ...DOC_READING_WORDS_DATASET]

  for (let i = 0; i < allWords.length; i += BATCH_SIZE) {
    const chunk = allWords.slice(i, i + BATCH_SIZE)
    const batch = writeBatch(db)

    for (const word of chunk) {
      batch.set(doc(db, 'words', word.id), word)
    }

    await batch.commit()
    console.log(`✅ ${i + chunk.length} / ${allWords.length} 완료`)
  }

  console.log('🎉 모든 단어 삽입 완료')
}
