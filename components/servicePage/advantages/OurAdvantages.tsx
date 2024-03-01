import { adCards } from '@/constants'
import Image from 'next/image'
import React from 'react'

const OurAdvantages = () => {
  return (
    <section className="w-full flex flex-col gap-10 mb-10 md:pb-28 xl:px-16">
    <div className="w-full flex flex-col gap-10">
      <div>
        <h1 className="floral-reg text-2xl md:text-5xl font-semibold">
        Unlock The Advantages
        </h1>
      </div>

 
       <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
        {adCards.map((card, idx) => (
          <div className='card-wrapper ad-cards relative flex flex-col py-10 rounded px-5' key={idx}>
           <div className='absolute right-5'>
            <Image src={card.img} alt='' width={100} height={100}/>
           </div>

            <div className='flex flex-col mt-10'>
            <h4>{card.title}</h4>
            <p className='font-thin'>{card.desc}</p>
            </div>
          

          </div>
        ))}
       </div>
    </div>
  </section>
  )
}

export default OurAdvantages