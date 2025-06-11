'use client'

import React from 'react'
import { FaCode, FaLaptopCode, FaServer, FaToolbox } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  cardHover
} from '@/utils/animations'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
>
        About Me
      </motion.h1>

      {/* details */}
      
      <motion.section 
        className="mb-16"
        {...fadeInUp}>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
          I am currently a Computer Science student. I love playing video games as well as technology in general. I also loved the idea of building something from scratch and making it work. It allows me to build something that may help or simplify a task.
        </p>
      </motion.section>

      {/* skills */}
      <motion.section className='mb-16' {...fadeIn}
        transition={{ delay: 0.2 }}>
        <motion.h2 className='section-title' {...fadeInUp}>Skills</motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

          {/* cards */}
          <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md' variants={fadeInUp}
            {...cardHover}>
            <FaCode className='h-8 w-8 text-primary mb-4'/>
              <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
              <ul className="text-secondary space-y-2">
                <li>Python</li>
                <li>Java</li>
                <li>C / C++</li>
                <li>PHP</li>
              </ul>
          </motion.div>

          <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md' variants={fadeInUp}
            {...cardHover}>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4'/>
              <h3 className="text-xl font-semibold mb-2">Front-End</h3>
              <ul className="text-secondary space-y-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React / Next.js</li>
              </ul>
          </motion.div>

          <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md' variants={fadeInUp}
            {...cardHover}>
            <FaServer className='h-8 w-8 text-primary mb-4'/>
              <h3 className="text-xl font-semibold mb-2">Back-End</h3>
              <ul className="text-secondary space-y-2">
                <li>MySQL</li>
                <li>Mongodb</li>
                <li>Amazon Dynamodb</li>
              </ul>
          </motion.div>

          <motion.div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md' variants={fadeInUp}
            {...cardHover}>
            <FaToolbox className='h-8 w-8 text-primary mb-4'/>
              <h3 className="text-xl font-semibold mb-2">Other Tools</h3>
              <ul className="text-secondary space-y-2">
                <li>Flutter</li>
                <li>OpenCV</li>
                <li>Android Studio</li>
              </ul>
          </motion.div>


        </div>
      </motion.section>
      
      </div>
  )
}

export default About;