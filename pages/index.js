import Head from 'next/head'
import {api} from '../services/api'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const response = await api.get('/users/guipolive');
    console.log(response.data);
  }

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
