import React from 'react'
//Icon
import { BsArrowUpRight } from 'react-icons/bs';
import { SiAndroid, SiKotlin, SiJavascript,SiCss3, SiHtml5, SiMysql, SiPostman, SiReact, SiVite, SiSpringboot, SiSwagger, SiVirtualbox,SiVisualstudiocode, SiIntellijidea } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { MdEngineering } from "react-icons/md";
//mottion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//image
import Image from '../assets/3.jpg'


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='flex flex-row lg:gap-x-40'>
          <motion.div variants={fadeIn('right',0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
            <div>
              <h2 className='h2 to-accent mb-6 text-[purple]'>What I do?</h2>
              <h3 className='h3 max-w-[450px] mb-6'>
                I am a passionate student and developer, I have a great desire to continue learning and working.
              </h3>
            </div>
              {/* image */}
            <motion.div variants={fadeIn('right',0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='hidden lg:flex flex-1 max-w-xs'>
              <img className='' src={Image} alt="" />
            </motion.div>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left',0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
          <div className='border-b border-white/20 h-[100px] mb-[40px] flex' >
              <div className='max-w-[420px]'>
                <h4 className='text-[20px] tracking-winder font-primary font-semibold mb-2'>Frontend Developer</h4>
                <p className='font-secondary leading-tight'>
                  I can develop the visual part of your website,<br />
                  using tools like react and javaScript. <br />
                </p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a href="#" className='text-gradient text-[cyan]'>Tools</a>
                <div className='flex flex-row flex-1 items-end'>
                  <div>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiJavascript/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiCss3/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiHtml5/></a>
                  </div>
                  <div>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiReact/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiVite/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiVisualstudiocode/> </a>
                  </div>
                </div>
              </div>
          </div>
          <div className='border-b border-white/20 h-[100px] mb-[40px] flex' >
              <div className='max-w-[420px]'>
                <h4 className='text-[20px] tracking-winder font-primary font-semibold mb-2'>Backend Developer</h4>
                <p className='font-secondary leading-tight'>
                  I can use design patterns, which allows to maintain <br />
                  the business logic, using tools like springBoot in Java.<br />
                
                </p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a href="#" className='text-gradient text-[cyan]'>Tools</a>
                <div className='flex flex-row flex-1 items-end'>
                  <div>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><DiJava/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiMysql/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiPostman/></a>
                  </div>
                  <div>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiSpringboot/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiSwagger/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiIntellijidea/> </a>
                  </div>
                </div>
              </div>
          </div>
          <div className='border-b border-white/20 h-[100px] mb-[40px] flex' >
              <div className='max-w-[420px]'>
                <h4 className='text-[20px] tracking-winder font-primary font-semibold mb-2'>Android Developer</h4>
                <p className='font-secondary leading-tight'>
                  The fastest tool to develop android mobile applications<br />
                  in Kotlin, which I implement for these projects. <br />
                </p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a href="#" className='text-gradient text-[cyan]'>Tools</a>
                <div className='flex flex-row flex-1 items-end'>
                  <div>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiKotlin/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiAndroid/></a>
                    
                  </div>
                  <div>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiSwagger/></a>
                    <a href="#" className='btn mb-[4px] flex justify-center items-center'><SiPostman/></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b border-white/20 h-[100px] mb-[40px] flex' >
              <div className='max-w-[420px]'>
                <h4 className='text-[20px] tracking-winder font-primary font-semibold mb-2'>Bioengineering</h4>
                <p className='font-secondary leading-tight'>
                  I can use engineering to provide solutions <br />
                  in the area of medicine and biology. <br />
                </p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a href="#" className='text-gradient text-[cyan]'>Tools</a>
                <a href="#" className='btn mb-[4px] flex justify-center items-center'><MdEngineering/></a>
              </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services