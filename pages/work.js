import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import useRouteUrlHistory from "./usePreviousPage";

export default function Work({pageProps, prevRoute, currentRoute}) {


    return (
        <>
            <p>Work</p>
            <p>{prevRoute}</p>
        </>
    );
}
