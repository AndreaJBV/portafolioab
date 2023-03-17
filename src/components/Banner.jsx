import React from 'react'
//images
import Image from '../assets/1.jpg'
import fondo from '../assets/6.jpg'
//icons
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai"
//type animation
import { TypeAnimation } from 'react-type-animation'
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center text-white' id='home'>
      <div className="container flex flex-col items-center mx-auto">
        <div className='flex-col gap-y-8 lg:flex-row lg:items-right lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-white leadig-[0.8] font-bold leading-[0.8] lg:text-[50px]'>
              ANDREA <span>BEDOYA </span>
            </motion.h1>
          </div>
          <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer', 2000,
              'Bioenginner', 2000
              ]} 
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Hello, welcome to my portfolio...
          </motion.p>
        </div>
        {/* image */}
        
        <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'} className='hidden lg:flex flex-1 max-w-xs lg:max-w-[420px]'>
            <img className='' src={Image} alt="" />
        </motion.div>
      </div>
    </section>
  )
}

export default Banner