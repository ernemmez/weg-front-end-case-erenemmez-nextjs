import Head from 'next/head'
import styles from '../sass/Home.module.sass'
import Link from 'next/link'


const Home = () => {
    return (
    <div className={styles.container}>
      <Head>
        <title>Eren Emmez | WEG Front End Case</title>
        <meta name="description" content="Bu proje Eren Emmez tarafından WEG Front End Developer Case için hazırlanmıştır" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <Link href="/voting">Employee of the Month</Link> Vote
        </h1>
        <p className={styles.description}>Click the green text and vote!</p>
      </main>
    </div>
  )
}
export default Home;