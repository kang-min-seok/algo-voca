import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext'
import AuthProvider from '@/features/auth/AuthProvider'
import ProtectedRoute from '@/components/ui/ProtectedRoute'
import LandingPage from '@/pages/LandingPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/features/auth/LoginPage'
import SignupPage from '@/features/auth/SignupPage'
import StudyPage from '@/features/flashcard/StudyPage'
import ResultPage from '@/features/flashcard/ResultPage'
import OnboardingPage from '@/features/auth/OnboardingPage'

function AppShell() {
  const { dark } = useTheme()
  const theme = dark ? 'dark' : 'light'

  return (
    <div id="stage" data-theme={theme}>
      <div className="app" data-theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/onboarding"
                element={
                  <ProtectedRoute>
                    <OnboardingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/study"
                element={
                  <ProtectedRoute>
                    <StudyPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/result"
                element={
                  <ProtectedRoute>
                    <ResultPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}
