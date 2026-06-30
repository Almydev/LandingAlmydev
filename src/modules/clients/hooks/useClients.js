import { useState, useEffect } from 'react'
import { getClients } from '../services/clientService'

export function useClients() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getClients()
      .then(setClients)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { clients, loading, error }
}
