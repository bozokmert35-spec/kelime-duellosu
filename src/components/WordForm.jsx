import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function WordForm() {
  const [language1, setLanguage1] = useState('')
  const [language2, setLanguage2] = useState('')
  const [word1, setWord1] = useState('')
  const [word2, setWord2] = useState('')

  const handleAddWord = async () => {
    const { error } = await supabase.from('words').insert([
      { language1, language2, word1, word2, user_id: supabase.auth.user()?.id }
    ])
    if (error) alert(error.message)
    else alert('Kelime eklendi!')
  }

  return (
    <div className="mb-4">
      <input placeholder="Dil 1" value={language1} onChange={e => setLanguage1(e.target.value)} className="border p-1 mr-1"/>
      <input placeholder="Dil 2" value={language2} onChange={e => setLanguage2(e.target.value)} className="border p-1 mr-1"/>
      <input placeholder="Kelime 1" value={word1} onChange={e => setWord1(e.target.value)} className="border p-1 mr-1"/>
      <input placeholder="Kelime 2" value={word2} onChange={e => setWord2(e.target.value)} className="border p-1 mr-1"/>
      <button onClick={handleAddWord} className="bg-green-500 text-white p-1">Ekle</button>
    </div>
  )
}
