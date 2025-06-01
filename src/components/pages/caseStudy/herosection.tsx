import Image from 'next/image'
import React from 'react'

function Herosection() {
  return (
    <div className='h-fit w-full'><Image src={"/images/caseStudy.png"} alt='' height={647} width={1420} className='h-60 md:h-full w-full'  /></div>
  )
}

export default Herosection