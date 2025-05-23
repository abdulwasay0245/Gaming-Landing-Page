import React from 'react'
import { vrCard } from './data/card'
import Image from 'next/image'
import { orbitron , poppins} from './fonts'
import Link from 'next/link'
const Card = () => {
  return (
      <div className='flex gap-6 item-center justify-center overflow-hidden'>
          {vrCard.map((index) => (
              <Link key={index.index} href={`/${index.id}`}>
              <div  className='space-y-4 hover:scale-110 duration-100'>
                  <Image
                      src={index.img}
                      alt={index.img}
                      height={543}
                      width={450}
                      ></Image>
                  <span className='space-y-6 font-medium  bg-gradient-to-br from-pink-500 to-blue-500 text-transparent bg-clip-text' style={orbitron.style}>{index.heading}</span>
                  <p style={poppins.style} className='mt-5'>{index.description }</p>
                  
              </div>
                      </Link>
          ))}
      </div>
  )
}

export default Card