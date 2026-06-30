import { useClients } from '../hooks/useClients'
import styles from './ClientsPage.module.css'

export default function ClientsPage() {
  const { clients, loading, error } = useClients()

  if (loading) return <div className={styles.wrapper}><p className={styles.status}>Cargando clientes...</p></div>
  if (error) return <div className={styles.wrapper}><p className={styles.status}>Error: {error.message}</p></div>

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Clientes</h1>
      <p className={styles.count}>{clients.length} cliente(s) registrado(s)</p>
      <div className={styles.grid}>
        {clients.map((c) => (
          <div key={c.id} className={styles.card}>
            <h3 className={styles.name}>{c.name}</h3>
            <p className={styles.email}>{c.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
