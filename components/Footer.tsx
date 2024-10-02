import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id='contact'>
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Prêt à faire passer <span className='text-purple'>votre</span> présence numérique au niveau supérieur ?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Contactez-moi dès aujourd’hui et discutons de la façon dont je peux vous aider à atteindre vos objectifs.</p>
            <a href="mailto:niedjokuitche@gmail.com">
                <MagicButton 
                    title="Contactez-moi"
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>
        <div className="flex mt-60 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright &copy; 2024 Niedjo Kuitche</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <a href={profile.link} key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                      <img src={profile.img} alt={profile.id.toString()} width={20} height={20}/>  
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer