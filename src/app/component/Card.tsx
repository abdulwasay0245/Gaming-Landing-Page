import React from 'react'
import { vrCard } from './data/card'
import Image from 'next/image'
const Card = () => {
  return (
      <div className='flex gap-5 item-center'>
          {vrCard.map((index) => (
              <div key={index.index} className='flex'>
                  <Image
                      src={index.img}
                      alt={index.img}
                      height={240}
                      width={200}
                      ></Image>
              </div>
          ))}
      </div>
  )
}

export default Card