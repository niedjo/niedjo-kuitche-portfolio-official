import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProject = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className="heading">
            Une petite sélection de {' '}
            <span className="text-purple">projets récents</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]" key={id}>
                    <PinContainer title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                <img src='/bg.png' alt='bg-img'/>
                            </div>
                                <img src={img} alt={title} className='absolute z-10 bottom-0 w-full h-full rounded-xl'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base'>{title}</h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
                        <div className="flex items-center justify-between mt-7 my-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={icon} style={{transform : `translateX(-${5 * index * 2}px)`}} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Consulter le site en direct</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9' />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProject