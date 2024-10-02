import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Client = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className="heading">
            Des mots gentils de
            <span className="text-purple"> clients satisfaits</span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10 mt-10">
            <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow'
            />
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                {/* {companies.map(({ id, img, name, nameImg}) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img src={img} alt={name} className='md:w-10 w-5' />
                        <img src={nameImg} alt={name} className='md:w-25 w-20' />
                    </div>
                ))} */}
                <div className="mt-10 text-3xl text-blue-700">CESMO</div>
                <div className="mt-10 text-3xl text-green-600">Madea EAT</div>
                <div className="mt-10 text-3xl text-red-600">horizon</div>
            </div>
        </div>
    </div>
  )
}

export default Client
