import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Stats() {
  const [count, setCount] = useState(0)

  const fetchCount = async () => {
    const { data, error } = await supabase
      .from('words')
      .select('*', { count: 'exact' })

    if (data) setCount(data.length)
  }

  useEffect(() => { fetchCount() }, [])

  return (
    <div>
      <strong>Toplam kelime:</strong> {count}
    </div>
  )
}
