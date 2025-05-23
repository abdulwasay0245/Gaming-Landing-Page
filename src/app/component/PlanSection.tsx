import React from 'react'
import { orbitron, podkova } from './fonts'
import ProPlansCard from './ProCard'
const PlanSection = () => {
  return (
      <div  className='min-h-screen p-24   flex flex-col gap-28 items-center justify-center '  style={{ background: 'radial-gradient(ellipse at center, #000000, #1f2937, #6b21a8)' }} >
          <div className='text-center space-y-3' >
              <h1 style={orbitron.style} className='text-3xl' >Level of <span  className='  bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text'>VR Experience</span></h1>
              <p style={podkova.style} className='font-extralight '>Upgrade your VR levels with new features </p>
          </div>
          
          <div className='flex gap-10'>
          <span className='mt-[120px]'><ProPlansCard /></span>
          <span className='mb-2'><ProPlansCard /></span>
          <span className='mt-[120px]'><ProPlansCard /></span>
          </div>

      </div>
  )
}

export default PlanSection