import React from 'react'
import { vrCard } from './data/card'
import Image from 'next/image'
import { orbitron } from './fonts'
const Card = () => {
  return (
      <div className='flex gap-6 item-center justify-center'>
          {vrCard.map((index) => (
              <div key={index.index} className=''>
                  <Image
                      src={index.img}
                      alt={index.img}
                      height={543}
                      width={450}
                  ></Image>
                  <span className='bg-gradient-to-br from-pink-500 to-blue-500 text-transparent bg-clip-text' style={orbitron.style}>{index.heading}</span>
                  <p>{index.description }</p>
                  
              </div>
          ))}
      </div>
  )
}

export default Card