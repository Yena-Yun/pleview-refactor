import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Head>
        <title>Pleview: Please Review My Code</title>
        <link rel='icon' href='/images/logo.png' />
      </Head>

      <main className='flex w-full min-h-screen flex-col items-center justify-center bg-slate-400'>
        <div className='mt-6 px-20 flex flex-wrap items-center justify-between gap-4 sm:w-full'>
          <a
            href='https://nextjs.org/learn'
            className='mt-6 w-96 h-80 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
            <p className='mt-4 text-xl'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='mt-6 w-96 h-80 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
            <p className='mt-4 text-xl'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='mt-6 w-96 h-80 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
            <p className='mt-4 text-xl'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
