import Head from 'next/head'
import { motion as m } from "framer-motion";
import { useState } from 'react'
export default function Home() {

  const [user, setUser] = useState({
    "name": "Ryan",
    "email": "rmillares@chapman.edu"

  })
  const testBool = false






  return (
    <div className= {((testBool) ? "bg-gray-800" : "bg-gray-200") + " flex flex-col items-center min-h-screen py-2"}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}>
        <Head>
          <title>Ryan Millares</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <main className="container mx-auto max-w-prose px-4 pt-12">
          <div className="spacer" />
          <div className="spacer" />
          <div className="spacer" />

          <div className="text-white">
            <h1>
              <span className="font-black text-5xl">Ryan Millares</span>
              <br />
              <span className="text-3xl text-green-300">Full-Stack Developer</span>
            </h1>
            <br />
            <h2 className="text-1xl">Chapman University</h2>
            <h2 className="text-1xl">Bachelor's of Science</h2>
            <h2 className="text-1xl">Majors: Computer Science and Data Analytics</h2>
            <h2 className="text-1xl">Minor: Game Development</h2>
            <h2 className="text-1xl">GPA: 3.6</h2>





          </div>

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
      </m.div>
    </div>

  )
}
