import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
    const words = `Transforming Concepts into Seamless User Experiences`;
  return (
    <div className='pb-20 pt-36'> 
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic with Next.js</h2>
                <TextGenerateEffect words={words} className='text-center text-[40px] md:text-5xl lg:text-6xl' />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi I'm Niedjo Kuitche, a Fullstack Developer based in Cameroon</p>
                <a href="#about">
                    <button className="w-full gap-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-blue-200 transition-colors focus:outline-none md:w-60 md:mt-10">
                        <div className="">Show my work</div>
                        <FaLocationArrow />
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
