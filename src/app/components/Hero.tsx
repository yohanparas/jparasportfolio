'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
            <div className='flex flex-col items-center mb-4'>
                <motion.div 
                    className='flex justify-center items-center mb-4'
                    {...scaleIn}
                    transition={{ delay: 0.2 }}
                ><Image src="/profile.avif" alt='Profile Picture' width={100} height={100} 
                className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'/>
                </motion.div>
                {/* profile picture */}
                
            </div>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}>
                Hi, I&#39;m <motion.span 
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >Joseph!</motion.span></motion.h1>

            <motion.p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            >Developer</motion.p>

            {/* Buttons */}
            <div className='flex justify-center space-x-4 mb-8'>
                {/* GitHub Link */}
                <Link href="https://github.com/yohanparas" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-duration-300'>
                    <FaGithub/>
                </Link>

                {/* LinkedIn Link */}
                <Link href="https://linkedin.com/in/joseph-yohan-paras" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-duration-300'>
                    <FaLinkedin/>
                </Link>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-4'>
                <Link href="/projects" className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3
                rounded-lg hover:bg-primary/70 transition-colors'>View Projects</Link>

                <Link href="/about" className='bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3
                rounded-lg hover:text-gray-800 hover:bg-gray-300 transition-colors'>About Me</Link>
            </div>

        </div>
    </section>
  )
}

export default Hero