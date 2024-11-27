import Image from 'next/image'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>Proyecto Armonía</div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/alcaldiadda/proyecto-armonia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Información
        </a>
      </footer>
    </div>
  )
}
