import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [previousPageName, setPreviousPageName] = useState("");

    useEffect(() => {
        const previousPage = sessionStorage.getItem("previousPage");
        if (previousPage) {
            setPreviousPageName(previousPage);
        }
        sessionStorage.setItem("previousPage", router.asPath.split("/").pop());
    }, [router.asPath]);

    return (
        <nav className="bg-gray-900 text-white py-3 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full">
            <ul className="container mx-auto flex justify-center gap-10">
                <Link href="/">
                    <li className="cursor-pointer">Home</li>
                </Link>
                <Link href="/work">
                    <li className="cursor-pointer">Work</li>
                </Link>
                <Link href="/projects">
                    <li className="cursor-pointer">Projects</li>
                </Link>
                <Link href="/contact">
                    <li className="cursor-pointer">Contact</li>
                </Link>
            </ul>
        </nav>
    );
}
