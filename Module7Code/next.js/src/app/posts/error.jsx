'use client'
import { useEffect } from 'react'

// Next.js includes built-in support for Error Boundaries.
// Creating an error handler is as simple as creating a file called error.js (or jsx).
// Any runtime errors that occur will render the closest error component for that route,
// instead of crashing the application.
// When this fallback error component is active, layouts above the error boundary
// maintain their state and remain interactive, and the error component can attempt
// to recover from the error.

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>
        Try again
      </button>
      <p style={{marginTop: '10px', fontSize: '0.9em', color: '#666'}}>
        Test error handling by visiting /posts/500
      </p>
    </div>
  )
}
