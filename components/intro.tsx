'use client';

import Image from 'next/image'
import React,{useEffect} from 'react'
import {motion} from 'framer-motion';
import Link from 'next/link'
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare} from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/api/contextApi/active-section-context';


const Intro = () => {
  const threshold = 0.1
  const { ref } = useSectionInView("Home", threshold);
  const {setActiveSection,setTimeOfLastClick} = useActiveSectionContext();

  // The below code is extracted and refactor to a custom hook
  // const {ref, inView } = useInView({
  //   threshold: 0.1
  // });
  // const {setActiveSection,timeofLastClick} = useActiveSectionContext() 

  // useEffect(() => {
  //   if (inView && Date.now() - timeofLastClick > 1000) {
  //     setActiveSection("Home")
  //   }
  
  // }, [inView,setActiveSection,timeofLastClick])  
  return (
    <section ref={ref}
     className='mb-28 max-w-[70rem] text-justify sm:mb-0 scroll-mt-[100rem]'
    id = "home">
    <div className='flex items-center justify-center'>
    <div className='relative'>
        {/* To make the image have animation we are creating this div to wrap the images here. we cannot directly put the 
        motion on the Image component which is part of next.js. This is one way around.*/}
        <motion.div
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{
            type:'tween',
            duration: 0.2,
        }}
        >
        <Image src="/static/images/profileimage.jpg" alt='Prateek Pandey' 
        width="192" height="192" quality= "95" 
        priority={true}
        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
        </motion.div>
        <motion.span className='absolute  bottom-0 right-2 text-3xl'
        initial= {{opacity: 0, scale:0}}
        animate= {{opacity:1,scale:1}}
        transition={{
            type: 'spring',
            bounce: 0.5,
            delay: 0.1,
            duration: 0.7
        }}> 👋</motion.span>
    </div>
    </div>
    <motion.h1 className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl'
    initial={{ opacity:0, y: 100 }}
    animate ={{ opacity:1, y: 0 }}>
        <span className="font-bold"> Hello, I'm Prateek.</span>{" "}
        I'm a {" "}
        <span className="font-bold">full-stack developer </span>
        <span className="italic font-mono"> with passion for learning & developing web applications.</span> {""}
        <span className="italic font-mono"> I enjoy creating sites & apps.</span>{""}
        I have an overall experience of {""}
        <span className="font-bold">1.4 years. </span>
        My frontend stack comprises of {""}
        <span className="underline font-extradark italic"> React, Redux, Next.js</span>
         <span> for backend</span> {""}
        <span className="underline font-extradark italic"> Node.js, Express, MongoDB.</span> {""}
    </motion.h1>

    <motion.div className='flex flex-col sm:flex-row justify-center items-center gap-2 px-4 font-medium text-lg'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1,
    }}>
        
        <Link href='#contact'
        className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
        transition hover:-translate-x-2 '
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}>
            Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>

        <a className='group bg-white text-slate-900 hover:text-gray-950 px-7 py-3 flex items-center 
        gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-50 active:scale-105
        transition cursor-pointer dark:bg-white/10' href='./static/downloads/PrateekPandey_CV.pdf' download={true}> Download CV 
        <HiDownload className='opacity-60 group-hover:translate-y-1 transition hover:text-gray-950'/>
        </a>

        <a className='bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center 
        gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] 
        hover:bg-gray-50 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'
        href='https://www.linkedin.com/in/prateek-pandey-61539184/' target='_blank'> <BsLinkedin/>
            
        </a>
        <a className='bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center 
        gap-2  text-[1.4rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-50 
        active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' href='https://github.com/prateekpy21' 
        target='_blank'> <FaGithubSquare/>
            
        </a>
        <a>
            
        </a>
    </motion.div>
    
    </section>

  )
}

export default Intro