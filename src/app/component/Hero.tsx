        /* eslint-disable @next/next/no-img-element */
import React from 'react'
import { orbitron } from './fonts'
import Button from './Button'


const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white font-sans">
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6 mt-32 ml-14 text-center lg:text-left">
        
        <h2 className={`text-6xl font-medium leading-tight ${orbitron.className}`}>
          Let Your Mind <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Explore VR Game
          </span>
        </h2>
        <p className="text-gray-300 max-w-md">
          Whether you are a casual player or a competitive pro, we have got you covered with everything from action-packed blockbusters to hidden indie gems.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <Button text = "Get Started"></Button>
          <button className="flex items-center gap-2 border border-gray-400 px-6 py-2 rounded-full">
            <span className="text-xl">▶</span> See Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
          <img className='animation-fade-in' src="/hero-image.png" alt="Girl with VR" />
      </div>
    </div>

   
  </div>
  )
}

export default Hero