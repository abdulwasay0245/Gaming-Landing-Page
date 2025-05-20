import React from 'react'
import Button from './Button'

const ProCard = () => {
  return (
    <div className="p-[2px] rounded-[2px] rounded-bl-4xl bg-gradient-to-r from-pink-500 to-blue-500">
  <div className="p-8 rounded-[2px] border-transparent rounded-bl-4xl bg-black/40 backdrop-blur-md">
    <div>
      <h1 className="text-xl font-bold">Pro Plan</h1>
      <h2 className="text-lg text-gray-600">$25.99</h2>
    </div>
    <div className="mt-4">
      <Button text="Unlock Access" />
    </div>
  </div>
</div>
  )
}

export default ProCard