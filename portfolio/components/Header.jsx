import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Header = () => {
  return (
    <div 
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
        <motion.div
        einitial = {{scale: 0}}
        whileInViw={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        >
           <Image 
           className='rounded-full w-32' 
           src={assets.profile_img} 
           alt=''/> 
        </motion.div >
        <motion.h3 
        initial = {{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hi! I'am William Mark
            <Image className='w-6' src={assets.hand_icon} alt=''/>
            </motion.h3>
            <motion.h1 
            initial = {{y: -30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}
            className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            frontend web developer based in Australia.</motion.h1>
            <motion.p 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
            className='max-w-2xl mx-auto font-Ovo'>
              I am a frontend developer form Sydeney, Australia with 3 years of experience
              in multiple companies like Micosoft, Telsa and Apple.
            </motion.p>
             <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
               <motion.a
                initial = {{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1}}
                className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
                 href="#contact">Contact me 
                 <Image 
                 className='w-4'
                 src={assets.right_arrow_white}
                 alt=''/></motion.a>
               <motion.a 
               initial = {{y: 30, opacity: 0}}
               whileInView={{y: 0, opacity: 1}}
               transition={{duration: 0.6, delay: 1.2}}
               className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
               href="/sample-resume.pdf" download>
                My resume 
                <Image 
                className='w-4' src={assets.download_icon} 
                alt=''/>
                </motion.a>
             </div>
    </div>
  )
}

export default Header;