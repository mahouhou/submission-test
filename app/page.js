import styles from './page.module.css'
import Form from './forms/project-form/project-form'

export default function Home() {
  return (
    <main className={styles.main}>
      <Form />
    </main>
  )
}
