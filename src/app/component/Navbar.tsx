import React from 'react'
import { poppins } from './fonts'
const Navbar = () => {
  return (
   
      <>
     <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-transparent">
     <div className="flex items-center gap-2">
       <img src="/LOGO.png" alt="VRR Logo" className="w-10 h-10" />
       <span className="text-xl font-bold">VRR</span>
     </div>
     <ul className="hidden md:flex gap-20 text-sm font-medium">
       <li className="hover:text-pink-400 cursor-pointer">Home</li>
       <li className="hover:text-pink-400 cursor-pointer">About us</li>
       <li className="hover:text-pink-400 cursor-pointer">Game</li>
       <li className="hover:text-pink-400 cursor-pointer">Contact</li>
     </ul>
     <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full text-white text-sm font-medium">
       Sign up
     </button>
    </nav>
    </>
  )
}

export default Navbar