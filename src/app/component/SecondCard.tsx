import React from 'react'
import secondCard from './data/secondCard';
import Image from 'next/image'
import { orbitron} from './fonts'
import { FaStar } from "react-icons/fa";
const SecondCard = () => {
  return (
      <div className='flex gap-6 item-center justify-center overflow-hidden'>
          {secondCard.map((index) => (
              <div key={index.index} className='space-y-4 hover:scale-110 duration-100 overflow-hidden'>
                  <Image
                      src={index.img}
                      alt={index.img}
                      height={543}
                      width={450}
                  ></Image>
                  <span className='space-y-6 font-medium  text-xl ' style={orbitron.style}>{index.name}</span>
                 
                  <div className='flex gap-2'>
                      {Array.from({ length: 5 }).map((_,i) => (
                          <FaStar key={i} className='text-[#FDC185] h-[28px] w-[24px]' />
                      ))}
                    </div>
                  
              </div>
          ))}
      </div>
  )
}

export default SecondCard