import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KevMan - Strata Management</title>
        <meta name="description" content="Need manage? Come to KevMan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>KevMan</span>
        </h1>

        <p className={styles.description}>
          Need manage? Come to KevMan
        </p>

        <div className={styles.logo}>
          <Image src="/logo.png" alt="KevMan Logo" width={100} height={100} />
        </div>

        <div>
          <Image
            src="public\architecture-buildings-business-city-5ccb68fb6f8353704197a9b34ae1749b.jpg"
            alt="Building Background"
            layout="fill"
            objectFit="cover"
            className={styles.backgroundImage}
          />
          <div className={styles.overlay}>
            <h2>Need manage? Come to KevMan</h2>
          </div>
        </div>
      </main>
    </div>
  );
} 