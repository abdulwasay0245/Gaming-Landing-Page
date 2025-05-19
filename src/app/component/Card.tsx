import React from 'react'
import { vrCard } from './data/card'
import Image from 'next/image'
const Card = () => {
  return (
      <div className='flex gap-6 item-center justify-center'>
          {vrCard.map((index) => (
              <div key={index.index} className='flex'>
                  <Image
                      src={index.img}
                      alt={index.img}
                      height={543}
                      width={450}
                      ></Image>
              </div>
          ))}
      </div>
  )
}

export default Card