import React from 'react'
import { poppins } from './fonts'
import Button from './Button'
import Image from 'next/image'
const Navbar = () => {
  return (
   
      <>
     <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-transparent">
     <div className="flex sticky items-center gap-2">
       <Image src="/LOGO.png" alt='s' width={40} height={40}></Image>
       <span className="text-xl font-bold">VRR</span>
     </div>
     <ul className="hidden md:flex gap-20 text-sm font-medium" style={poppins.style}>
       <li className="hover:text-pink-400 cursor-pointer">Home</li>
       <li className="hover:text-pink-400 cursor-pointer">About us</li>
       <li className="hover:text-pink-400 cursor-pointer">Game</li>
       <li className="hover:text-pink-400 cursor-pointer">Contact</li>
     </ul>
     <Button text="Sign up" />
    </nav>
    </>
  )
}

export default Navbar