import React from 'react'
import Button from './Button'
import { orbitron, podkova, poppins } from './fonts'
import { GiCheckMark } from "react-icons/gi";

const ProCard = () => {
  return (
      <div className=' border-2 border-pink-500 p-8 rounded-[2px] rounded-bl-4xl  '>
          <div className='bg-transparent text-center flex flex-col gap-2 justify-self-start'>
              <h1 style={orbitron.style} className='text-2xl'>Pro Plan</h1>
              <h2 style={poppins.style} className='text-2xl font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text'>$25.99</h2>
          </div>
          <div>
              <div className='flex flex-col gap-4'>
                  {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className='flex'>
                          <GiCheckMark  className='font-black' />
                          <p>asssssssssssssssssssssssssssssssss</p>
                      </div>
                      
                 ))}
              </div>
              <Button text="Unlock Access"></Button>
          </div>
   </div>
  )
}

export default ProCard