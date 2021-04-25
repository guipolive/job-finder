import Head from 'next/head'
import {api} from '../services/api'
import { useEffect, useState } from 'react'

import Issue from '../components/Issue'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const response = await api.get('/repos/frontendbr/vagas/issues');
    console.log(response.data);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>job-finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Issue />
    </div>
  )
}
