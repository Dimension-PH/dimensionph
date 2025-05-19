'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 left-0 z-99">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center">
                <Image src={"/Dimension-PH.png"} alt="Logo" height={50} width={50} />
                <h1 className="text-3xl font-bold bg-gradient-to-tr from-green-700 to-lime-400 bg-clip-text text-transparent">Dimension-PH</h1>
            </div>
            <nav className="hidden lg:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-green-700 font-medium">Home</Link>
                <Link href="/announcement" className="text-gray-600 hover:text-green-700 font-medium">Announcements</Link>
                <Link href="/about" className="text-gray-600 hover:text-green-700 font-medium">About Us</Link>
                <Link href="/testimonials" className="text-gray-600 hover:text-green-700 font-medium">Testimonials</Link>
                <Link href="/contacts" className="text-gray-600 hover:text-green-700 font-medium">Contact</Link>
            </nav>
            <div className="lg:hidden">
                <button className="text-gray-600 focus:outline-none" onClick={() => setOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            <div className="hidden lg:block">
                <button className="bg-gradient-to-tr from-green-700 to-lime-400 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition duration-300" onClick={()=> window.location.href = "/apply"}>
                    Apply Now
                </button>
            </div>
        </div>

        {
            isOpen && 

            <nav className="flex flex-col lg:hidden items-center text-lg space-y-4 pb-4">
                <Link href="/" className="text-gray-600 hover:text-green-700 font-medium">Home</Link>
                <Link href="/announcement" className="text-gray-600 hover:text-green-700 font-medium">Announcements</Link>
                <Link href="/about" className="text-gray-600 hover:text-green-700 font-medium">About Us</Link>
                <Link href="/testimonials" className="text-gray-600 hover:text-green-700 font-medium">Testimonials</Link>
                <Link href="/contacts" className="text-gray-600 hover:text-green-700 font-medium">Contact</Link>
            </nav>
        }
    </header>
    )
}