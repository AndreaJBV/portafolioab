import React from 'react';
//mottion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//image
import Image from '../assets/work1.png'
import Image2 from '../assets/work2.jpg'
const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className=' flex flex-row lg:gap-x-20'>
          <motion.div variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex-1 flex flex-col items-center gap-y-4 mb-0 lg:mb-6'>
            {/* Text */}
            <div className=''>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>
              <p>
                The application consists of creating a start or login, in order to manage the documentation, 
                displaying a menu where you can send the information required for the document to a server, 
                view the response, and obtain a map with the location of the corresponding offices, additionally, 
                it is possible to change the English or Spanish language and the night or day mode of the application.
                For the realization of the code, the MVVM architecture was used, in andorid studio with kotlin.
              </p>
              <a href="https://github.com/AndreaJBV/AppSophosBedoyaAndrea" className='btn btn-sm w-9 h-9 mb-[100px] items-center'>View project</a>
            </div>
            {/* Image */}
            <div className=' work1 group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              {/* overloy */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Image} alt="" />
              {/* pretitle */}
              <div className='absolute -botton-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-[cyan] font-semibold'>Android mobile App</span> 
              </div>
              {/* title */}
              <div className='absolute -botton-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-gradient text-[white] font-semibold'>Project Title: </span> App Sophos.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className=' flex flex-row lg:gap-x-20'>
          <motion.div variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex-1 flex flex-col items-center gap-y-4 mb-0 lg:mb-6'>
            {/* Text */}
            <div className=''>
              <h2 className='h2 leading-tight text-accent'>
                <br />
                <br />
              </h2>
              <p>
              Pet Place is a website that offers a reservation service for daycare centers and 
              hotels for pets in various locations in Colombia, offering selected 
              accommodation options and additional services to meet the individual needs of 
              each animal. I played back end and database focused roles, but also had the 
              opportunity to get involved in front end development.
              </p>
              <br />
              <a href="https://github.com/AndreaJBV/PetPlace.git" className='btn btn-sm w-9 h-9 mb-[100px] items-center'>View project</a>
            </div>
            {/* Image */}
            <div className=' work1 group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              {/* overloy */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Image2} alt="" />
              {/* pretitle */}
              <div className='absolute -botton-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-[cyan] font-semibold'>Web page</span> 
              </div>
              {/* title */}
              <div className='absolute -botton-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-gradient text-[white] font-semibold'>Project Title: </span> Pet place.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work