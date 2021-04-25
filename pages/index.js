import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/guipolive')
    .then(response => setData(response))
    .then(response => console.log(response))
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>job-finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>oi</p>

    
    </div>
  )
}
