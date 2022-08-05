import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import PrimaryLayout from '../components/Layout/primary/PrimaryLayout';
import SidebarLayout from '../components/Layout/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = (page: any) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
