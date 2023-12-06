import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/mui'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Home Page</h1>
      </main>
    </>
  )
}
