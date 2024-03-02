import React from 'react'
import Image from 'next/image' ; 
const PromotionCard = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center'>
      <div className="w-60 h-60 rounded relative">
        <Image  src={'/erlogowt.png'} fill alt="Logo"  priority={true} quality={100} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
      </div>
      <div>
        <p className='font-pop text-[37px] leading-[55.5px] text-center font-semibold'>Helping the talent!</p>
        <p className='font-pop text-[13.5px] leading-[20.25px] text-center font-semibold italic'>
            Make your job hunt easier with EasyReferral
        </p>
      </div>
    </div>
  )
}

export default PromotionCard ; 
