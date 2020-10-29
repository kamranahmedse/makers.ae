import Head from 'next/head';
import DefaultLayout from '../layouts/default';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Hello world</h1>
    </DefaultLayout>
  );
}
