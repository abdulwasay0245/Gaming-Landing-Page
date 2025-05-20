
import React from 'react'

const Button = ({text}:{text:string}) => {
  return (
    <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-tr-xl rounded-bl-xl font-medium">
            {text}
          </button>
  )
}

export default Button