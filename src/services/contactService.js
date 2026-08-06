const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export async function sendContactMessage({ nombre, email, mensaje }) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, mensaje }),
  })
  if (!res.ok) throw new Error('Error al enviar el mensaje')
  return res.json()
}
