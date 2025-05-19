import React from 'react'
import { vrCard } from './data/card'
import Image from 'next/image'
const Card = () => {
  return (
      <>
          {vrCard.map((index) => (
              <div key={index.index}>
                  <Image
                      src={index.img}
                      alt={index.img}
                      height={240}
                      width={200}
                      ></Image>
              </div>
          ))}
      </>
  )
}

export default Card