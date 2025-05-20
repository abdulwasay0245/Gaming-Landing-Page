import React from 'react'
import { vrCard } from './data/card'
import Image from 'next/image'
import { orbitron, poppins } from './fonts'
import { FaStar } from "react-icons/fa";
const SecondCard = () => {
  return (
      <div className='flex gap-6 item-center justify-center overflow-hidden'>
          {vrCard.map((index) => (
              <div key={index.index} className='space-y-4'>
                  <Image
                      src={index.img}
                      alt={index.img}
                      height={543}
                      width={450}
                  ></Image>
                  <span className='space-y-6 font-medium   ' style={orbitron.style}>{index.heading}</span>
                 
                  <div className='flex'>
                      {Array.from({ length: 5 }).map((_,i) => (
                          <FaStar key={i} className='text-[#FDC185]' />
                      ))}
                    </div>
                  
              </div>
          ))}
      </div>
  )
}

export default SecondCard