import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="relative  w-100">
      <Image layout="fill" objectFit="contain" src={"/tech/react.png"} alt="dark-background" />
    </div>
  )
}

export default Footer 
