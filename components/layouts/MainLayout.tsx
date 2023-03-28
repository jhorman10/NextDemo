import Head from 'next/head';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = (props: LayoutProps) => {
  return (
    <div className={styles.MainLayout}>
      <Head>
        <title>Home - Jhorman</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div>{props.children}</div>
      </main>
    </div>
  );
};
