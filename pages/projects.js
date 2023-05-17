import Head from 'next/head'
import { motion as m } from "framer-motion"
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import useRouteUrlHistory from './usePreviousPage';



export default function Projects({pageProps, prevRoute, currentRoute}) {
    const previousPageName = "test"
    useEffect(() => {
        console.log(previousPageName)
      })
    return (
        <>
            <div className="bg-gray-800 flex flex-col items-center min-h-screen py-2">
                <m.div initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
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
                                <span className="font-black text-5xl">Project Text</span>
                                <br />
                                <span className="text-3xl text-green-300">Stuff</span>
                            </h1>
                            <br />
                            <h2 className="text-1xl">eeee</h2>
                            <h2 className = "text-1x;">Route: {previousPageName}</h2>



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
        </>
    )
}