'use client'
import React,{useEffect} from 'react'
import Button from './Button'
import { orbitron } from './fonts'
import AOS from 'aos'
import 'aos/dist/aos.css';
const JoinSection = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      })
    },[])
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center backdrop-blur-xl text-white" style={{ backgroundImage: "url('/headphone-bg.png')" }}>
      <div data-aos = "fade-right " className="text-center px-4">
        <h1  className="text-4xl md:text-5xl font-bold leading-tight" style={orbitron.style}>
          Join the ultimate <br />
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            gaming experience
          </span>
        </h1>
        <p className="mt-4 text-lg">Virtual is the new Reality</p>
       <Button text="Play Now"></Button>
      </div>
    </section>
  )
}

export default JoinSection