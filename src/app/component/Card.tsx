import React from 'react'
import { vrCard } from './data/card'
import Image from 'next/image'
import { orbitron , poppins} from './fonts'
const Card = () => {
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
                  <span className='space-y-6 font-medium  bg-gradient-to-br from-pink-500 to-blue-500 text-transparent bg-clip-text' style={orbitron.style}>{index.heading}</span>
                  <p style={poppins.style} className='mt-5'>{index.description }</p>
                  
              </div>
          ))}
      </div>
  )
}

export default Card