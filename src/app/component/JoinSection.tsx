'use client'
import React from 'react'
import Image from 'next/image'

const JoinSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center backdrop-blur-xl text-white" style={{ backgroundImage: "url('/headphone-bg.png')" }}>
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Join the ultimate <br />
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            gaming experience
          </span>
        </h1>
        <p className="mt-4 text-lg">Virtual is the new Reality</p>
        <button className="mt-6 px-6 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-blue-600 text-white font-semibold shadow-lg hover:opacity-90 transition-all">
          Play Now
        </button>
      </div>
    </section>
  )
}

export default JoinSection