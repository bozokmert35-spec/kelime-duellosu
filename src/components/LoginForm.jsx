import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function LoginForm() {
  const [email, setEmail] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) alert(error.message)
    else alert('Giriş linki e-posta adresine gönderildi!')
  }

  return (
    <div className="mb-4">
      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2">
        Giriş Yap
      </button>
    </div>
  )
}
