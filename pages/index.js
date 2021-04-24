import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
    <Head>
      <title>Accounts List | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>lsadsafasf</p>
      <p  className={styles.text}>lsadsafasf</p>
      <Link href="/accounts" ><a className={styles.btn}>Accounts</a></Link>
    </div>
    </>
  )
}
