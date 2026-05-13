import { useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GithubAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  type User,
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '@/services/firebase'
import type { JobRole } from '@/types'
import { AuthContext } from './AuthContext'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
  }, [])

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const signup = async (email: string, password: string, jobRole: JobRole) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, 'users', credential.user.uid), {
      uid: credential.user.uid,
      jobRole,
      createdAt: new Date(),
    })
  }

  const loginWithGithub = async (): Promise<{ isNewUser: boolean }> => {
    const provider = new GithubAuthProvider()
    const credential = await signInWithPopup(auth, provider)
    const info = getAdditionalUserInfo(credential)
    return { isNewUser: info?.isNewUser ?? false }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, loginWithGithub, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
