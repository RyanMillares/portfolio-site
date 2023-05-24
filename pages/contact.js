import { useRouter } from "next/router";
import Head from 'next/head'
import { useState, useEffect } from 'react'
import useRouteUrlHistory from "./useTargetPage";
import { motion as m } from "framer-motion"

export default function Work({ pageProps, prevRoute, currentRoute }) {
    let cards = Array(4).fill("down")
    const flip = (index) => {
        cards[index] = "up"
      }
    useEffect(() => {

    }, [])
    
    return (
        <>
            <table>
                <tbody>
                    <tr>
                    {cards.map((card, index) => (
                            <td key = {index} onClick = {() => cards[index] = "up"}>
                            {card}
                          </td>
                        ))
                    }
    
                    </tr>
                </tbody>
            </table>
        </>
    )
}



