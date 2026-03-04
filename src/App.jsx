import React from 'react'
import { supabase } from './supabaseClient'
import LoginForm from './components/LoginForm'
import WordForm from './components/WordForm'
import Quiz from './components/Quiz'
import Stats from './components/Stats'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Kelime Duellosu</h1>
      <LoginForm />
      <WordForm />
      <Quiz />
      <Stats />
    </div>
  )
}

export default App
