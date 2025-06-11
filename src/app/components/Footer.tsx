import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800'>
        <div className='container max-w-7xl mx-auto px-4 py-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                
                <div className='mb-4 md:mb-0'>
                    <Link href="/" className='text-xl font-bold text-primary'>JParas</Link>
                    <p className='text-sm text-secondary mt-2'>{new Date().getFullYear()} JParas</p>
                </div>

                {/* icons */}
                <div className='flex space-x-6'>
                {/* GitHub Link */}
                <Link href="https://github.com/yohanparas" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-duration-300'>
                    <FaGithub/>
                </Link>

                {/* LinkedIn Link */}
                <Link href="https://linkedin.com/in/joseph-yohan-paras" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-duration-300'>
                    <FaLinkedin/>
                </Link>
            </div>


            </div>
        </div>
    </footer>
  )
}

export default Footer