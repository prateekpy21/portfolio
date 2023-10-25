// Skill Component
"use client";

import React from 'react'
import { skillsData } from '@/lib/data'
import SectionHeading from '@/components/section-heading'
import { useSectionInView } from '@/lib/hooks';
import { animate, motion } from 'framer-motion';

// Function to animate the list of skills such that the ycome by delay one after the 
// other
const fadeInAnimateVariance = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
}

const Skills = () => {
    const {ref} = useSectionInView("Skills");
  return (
    <section ref={ref} id='skills' 
    className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg 
            text-gray-800 '>
                {skillsData.map((
                    skill, index) => (
                <motion.li className='bg-white border border-black/[0.1] rounded-md 
                py-2 px-4 dark:bg-white/10 dark:text-white/80' key={index}
                variants={fadeInAnimateVariance}
                initial = "initial"
                whileInView="animate"
                viewport={{
                    once: true
                }}
                custom={index}
                >{skill}</motion.li>
                ))}
            </ul>
        
    </section>

  )
}

export default Skills