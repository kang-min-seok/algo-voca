import type { Timestamp } from "firebase/firestore";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { StudyAnswer, StudySession, Word } from "@/types";

function sessionsRef(uid: string) {
  return collection(db, "users", uid, "studySessions");
}

export async function saveStudySession(
  uid: string,
  answers: StudyAnswer[],
  words: Word[],
): Promise<string> {
  const known = answers.filter((a) => a.quality === 1).length;
  const total = answers.length;

  const enrichedAnswers = answers.map((a) => {
    const word = words.find((w) => w.id === a.wordId);
    return {
      wordId: a.wordId,
      quality: a.quality,
      sm2Quality: (a.quality === 1 ? 4 : 1) as 1 | 4,
      term: word?.term ?? "",
      definition: word?.definition ?? "",
    };
  });

  const docRef = await addDoc(sessionsRef(uid), {
    completedAt: serverTimestamp(),
    totalWords: total,
    knownWords: known,
    unknownWords: total - known,
    percent: Math.round((known / total) * 100),
    recommendedWordIds: words.map((w) => w.id),
    answers: enrichedAnswers,
  });

  return docRef.id;
}

export async function getStudySessions(
  uid: string,
  count = 10,
): Promise<StudySession[]> {
  const q = query(
    sessionsRef(uid),
    orderBy("completedAt", "desc"),
    limit(count),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      completedAt: (data.completedAt as Timestamp).toDate(),
      totalWords: data.totalWords,
      knownWords: data.knownWords,
      unknownWords: data.unknownWords,
      percent: data.percent,
      recommendedWordIds: data.recommendedWordIds ?? [],
      answers: data.answers,
    };
  });
}
