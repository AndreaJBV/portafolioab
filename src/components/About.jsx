import React from 'react'
//countup
import CountUp from 'react-countup';
//Intersection observer
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
//image
import Image from '../assets/2.jpg'
import fondo from '../assets/6.jpg'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-row lg:gap-x-10'>
          <div className='flex flex-col items-center'>
            {/* img */}
          <motion.div variants={fadeIn('right',0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='hidden lg:flex flex-1 max-w-xs lg:max-w-[482px]'>
            <img className='' src={Image} alt="" />
          </motion.div>
          {/* stats */}
          <div className='flex'>
            <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex flex-col items-center'>
              <div  className='mb-2 text-[40px] font-primary text-gradient font-bold text-[cyan] '>
                {inView ? <CountUp start={0} end={28} duration={4}/> : null}
              </div>
              <div variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='font-primary text-sm tracking-[2px] text-[violet]'>
                Years old.
              </div>
            </motion.div>
          </div>
        </div>
          {/* text */}
          <div className='flex flex-col'>
            <br/>
            <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex-1'>
              <h2 className='h2 text-accent'>
                About me.
              </h2>
              <p className='h3 mb-4'>I am a student to certified tech developer at Digital House,<br/> 
                also, I am Bioengineering professional at University of Antioquia.
              </p>
              
              
              <p>
                I have basic knowledge in Kotlin, Java, Spring Boot, MySQL, JavaScript, <br/>
                React, CSS, HTML, HTML, Node.js, Flexbox, Postman, Swagger, agile methodologies <br/>
                such as Lean, Kanban and Scrum.
              </p>
              <br/>
              <p>
                My level of English is intermediate, also,I have skills such as flexibility,<br/>
                commitment, self-control, ease of learning, perseverance and teamwork.<br/>
                My experience has been in the Sophos and Ruta N mobile Bootcamp.
              </p>
              <br/>
            
              <div className='flex gap-x-8 items-center'>
                <a href="#" className='text-gradient btn-link text-[cyan]'>Click to home.</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About