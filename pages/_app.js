import 'tailwindcss/tailwind.css'
import "../styles.css"
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useRouteUrlHistory from './useTargetPage';

let prevRoute
let currentRoute
function MyApp({ Component, pageProps, router }) {
  const newrouter = useRouter()
  currentRoute = newrouter.pathname
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      prevRoute = currentRoute
      currentRoute = url
      console.log(prevRoute, currentRoute)
    }
    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Navbar/>
      <AnimatePresence initial={false} mode={'wait'}>
        <Component className = "bg-gray-900" prevRoute={prevRoute} currentRoute={currentRoute} key={router.pathname} {...pageProps} />

      </AnimatePresence>

    </>

  )
}

export default MyApp
