"use client"

import React from 'react'
import {motion} from 'framer-motion'
import SectionHeading from '@/components/section-heading'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const { ref } = useSectionInView("About");
  // This is to get the view it return True or False if the section is in view
  // const {ref, inView } = useInView({
  //   threshold: 0.75
  // });
  // const {setActiveSection,timeofLastClick} = useActiveSectionContext() 

  // useEffect(() => {
  //   if (inView && Date.now() - timeofLastClick > 1000) {
  //     setActiveSection("About")
  //   }
  
  // }, [inView,setActiveSection,timeofLastClick])
  
  return (
    <motion.section
      ref={ref}
      className="max-w-[70rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After post-graduating with a degree in{" "}
        <span className="font-medium">Information Technology</span>, I followed my 
        passion for programming. I started working as an Application Specialist for Birch Street System in May, 2022.{" "}
        Also, to keep myself always ready and updated and to quench my thirst for learning I enrolled in a{" "}
        <span className='font-bold'>Scaler full-stack web development program</span> so that{" "}
        <span className="font-medium">I can broaden my knowledge and vision with industrial level expert learning environment</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="italic">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        are{" "}<span className="font-medium">React, Next.js, Node.js, and MongoDB</span>.
        I am also familiar with <span className='font-medium'>TypeScript, Python, AWS, Linux, GIT and Express.</span> I am always looking to learn new technologies. 
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a <span className='font-medium italic'>Software
        Developer</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, reading new tech articles and talking with friends. I also, enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently learning about{" "}
        <span className="font-medium">Django, Elastic Search and Reddis</span>.
      </p>
    </motion.section>
  )
}

export default About