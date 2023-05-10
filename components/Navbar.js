import Link from "next/link";

export default function Navbar() {
    return (
        <nav className = "bg-gray-800 p-2 textx-2xl font-medium">
            <ul className = " text-white flex flex-control justify-center gap-10">
                <Link href = "/">
                    <li>Home</li>
                </Link>
                <Link href = "/work">
                    <li>Work</li>
                </Link>
                <Link href = "/projects">
                    <li>Projects</li>
                </Link>
                <Link href = "/contact">
                    <li>Contact</li>
                </Link>
                

            </ul>
        </nav>
    )
}