import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex justify-center'>
      <div className='text-white text-3xl text-center font-bold w-[80%] mt-40'>
        If you are interested, read <Link href="/about" target='_blank' className="text-blue-400 hover:underline">about</Link> and <Link href="/contact" target='_blank' className="text-blue-400 hover:underline">contact</Link> us! 
      </div>
    </div>
  )
}

export default Footer