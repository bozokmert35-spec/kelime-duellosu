import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function Quiz() {
  const [word, setWord] = useState(null)
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')

  const getRandomWord = async () => {
    const { data, error } = await supabase
      .from('words')
      .select('*')
      .order('id', { ascending: false })
      .limit(1)

    if (data && data.length > 0) setWord(data[0])
  }

  useEffect(() => { getRandomWord() }, [])

  const checkAnswer = () => {
    if (!word) return
    if (answer.toLowerCase() === word.word2.toLowerCase()) {
      setMessage('Doğru!')
    } else {
      setMessage('Yanlış! Doğru cevap: ' + word.word2)
    }
  }

  return (
    <div className="mb-4">
      {word ? (
        <>
          <div>{word.word1} ({word.language1})</div>
          <input value={answer} onChange={e => setAnswer(e.target.value)} className="border p-1 mr-1"/>
          <button onClick={checkAnswer} className="bg-yellow-500 text-white p-1">Kontrol</button>
          <div>{message}</div>
          <button onClick={getRandomWord} className="mt-2 bg-blue-500 text-white p-1">Yeni Soru</button>
        </>
      ) : (
        <div>Kelime yok.</div>
      )}
    </div>
  )
}
