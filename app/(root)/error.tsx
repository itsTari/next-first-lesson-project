'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    console.error(error) // Log the error
  }, [error])

  return (
    <div>
      <h2 className='text-3xl text-red-700'>Something went wrong!</h2>
      <button onClick={() => reset()} className='bg-white text-slate-900'>Try again</button>
    </div>
  )
}