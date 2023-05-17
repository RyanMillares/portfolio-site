import Head from 'next/head'

import { motion as m } from "framer-motion";
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import useRouteUrlHistory from './useTargetPage';
export default function Home({pageProps, prevRoute, currentRoute}) {


  const [user, setUser] = useState({
    "name": "Ryan",
    "email": "rmillares@chapman.edu"

  })
  
  const testBool = true
  const nextPageName = useRouteUrlHistory()
  useEffect(() => {
    console.log(pageProps)
  })



  return (
    <div className= {((testBool) ? "bg-gray-800" : "bg-gray-200") + " flex flex-col items-center min-h-screen py-2"}>
      <m.div
        initial={{ x: (prevRoute == "/work" || prevRoute == "/projects" ? "-100%" : "100%"), opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit = {{ x: (currentRoute == "/work" || currentRoute == "/projects" ? "100%" : "-100%"), opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}>
        <Head>
          <title>Ryan Millares</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <main className="container mx-auto max-w-prose px-4 pt-12">
          <div className="spacer" />
          <div className="spacer" />
          <div className="spacer" />

          <div className={(testBool ? "text-white" : "text-black")}>
            <h1>
              <span className="font-black text-5xl">Ryan Millares</span>
              <br />
              <span className={(testBool ? "text-green-300" : "text-green-700")+ " text-3xl"}>Full-Stack Developer</span>
            </h1>
            <br />
            <h2 className="text-1xl">Chapman University</h2>
            <h2 className="text-1xl">Bachelor's of Science</h2>
            <h2 className="text-1xl">Majors: Computer Science and Data Analytics</h2>
            <h2 className="text-1xl">Minor: Game Development</h2>
            <h2 className="text-1xl">GPA: 3.6</h2>
            <h2 className = "text-1x;">Route: {nextPageName}</h2>





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
