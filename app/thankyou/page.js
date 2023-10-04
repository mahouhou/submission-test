import styles from './page.module.css'

export default function Success() {
  return (
    <main className={styles.main}>
        <h1>Thank you!</h1>
        <p className={styles.p}>We have received your submission.</p>
    </main>
  )
}
