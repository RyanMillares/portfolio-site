import Head from 'next/head'
import MainInfo from '../components/MainInfo'
import History from '../components/History'
import Input from '../components/Input'
import { useState } from 'react'
export default function Home() {

  const [user, setUser] = useState({
    "name": "Ryan",
    "email": "rmillares@chapman.edu"

  })

  




  return (
    <div className="bg-gray-800 flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Ryan Millares</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="container mx-auto max-w-prose px-4 pt-12">
      <div className="spacer" />
      <div className="spacer" />
      <div className="spacer" />

        <MainInfo

            ></MainInfo>
        

        <div className="spacer" />
        <div className="spacer" />
       




      </main>
      <style jsx>
        {`
          .spacer {
            height: 20px;
          }
          `}
      </style>
    </div>
  )
}
