import React from 'react';
//mottion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//image
import Image from '../assets/5.jpg'
import fondo from '../assets/6.jpg'
//icons
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiTwotoneMail} from "react-icons/ai"


const Contact = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center text-white' id='contact'>
      <div className="container flex flex-row items-center mx-auto">
        <div className='flex-col gap-y-8 lg:flex-row lg:items-right lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='leadig-[0.8] font-bold text-[cyan] leading-[0.8] lg:text-[50px]'>
              Get in touch
            </motion.h1>
          </div>
          <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Let's work <br /> together!</span>
          </motion.div>
          <motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/AndreaJBV">
              <AiFillGithub/> AndreaJBV
            </a>
            <a href="https://www.linkedin.com/in/andrea-bedoya-106290201/">
              <AiFillLinkedin/> LinkedInd
            </a>
            <a href="https://www.facebook.com/profile.php?id=100006738858941">
              <AiFillFacebook/> Facebook
            </a>
            <a href="https://www.instagram.com/andrea.bedoyav/">
              <AiFillInstagram/> andrea.bedoyav
            </a>
            <a href="#">
              <AiTwotoneMail/> ajuliethbvalencia@gmail.com
            </a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div className=''>
            <img className='fondo' src={fondo} alt="" />
        </motion.div>
        <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'} className='hidden lg:flex flex-1 max-w-xs lg:max-w-[482px]'>
            <img className='' src={Image} alt="" />
        </motion.div>
      </div>
    </section>

    
  )
}

export default Contact