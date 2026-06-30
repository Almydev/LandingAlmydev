const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export async function getClients() {
  const res = await fetch(`${API_URL}/clients`)
  if (!res.ok) throw new Error('Error al obtener clientes')
  return res.json()
}

export async function getClient(id) {
  const res = await fetch(`${API_URL}/clients/${id}`)
  if (!res.ok) throw new Error('Error al obtener el cliente')
  return res.json()
}

export async function createClient(data) {
  const res = await fetch(`${API_URL}/clients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Error al crear cliente')
  return res.json()
}

export async function updateClient(id, data) {
  const res = await fetch(`${API_URL}/clients/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Error al actualizar cliente')
  return res.json()
}

export async function deleteClient(id) {
  const res = await fetch(`${API_URL}/clients/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Error al eliminar cliente')
  return res.json()
}
