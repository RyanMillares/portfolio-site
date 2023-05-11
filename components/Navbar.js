import Link from "next/link";

export default function Navbar() {
    return (
        <nav className = "bg-gray-800 text-white py-3 sticky top-0 z-50">
            <ul className = "container mx-auto flex justify-center gap-10">
                <Link href = "/">
                    <li className = "cursor-pointer">Home</li>
                </Link>
                <Link href = "/work">
                    <li className = "cursor-pointer">Work</li>
                </Link>
                <Link href = "/projects">
                    <li className = "cursor-pointer">Projects</li>
                </Link>
                <Link href = "/contact">
                    <li className = "cursor-pointer">Contact</li>
                </Link>
                

            </ul>
        </nav>
    )
}