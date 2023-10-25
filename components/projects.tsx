// This is a project section so we will add once we hvae projects for now it will be designed 
"use client";
import React from 'react'
import SectionHeading from '@/components/section-heading'
// import { projectsData } from '@/lib/data'
// import Project from './project'
import { useSectionInView } from '@/lib/hooks';


const Projects = () => {
  const threshold = 0.5
  const {ref} = useSectionInView("Projects",threshold);
  
  // const {ref, inView } = useInView({
  //   threshold: 0.5
  // });
  // const {setActiveSection,timeofLastClick} = useActiveSectionContext() 

  // useEffect(() => {
  //   if (inView && Date.now() - timeofLastClick > 1000) {
  //     setActiveSection("Projects")
  //   }
  
  // }, [inView,setActiveSection,timeofLastClick])  
    
  return (
    <section ref={ref} id ="projects" className='scroll-mt-32 mb-28'>
        <SectionHeading>Projects</SectionHeading>
        <div>
          Coming Soon....
            {/* {projectsData.map((project,index)=> (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))} */}
        </div>


    </section>

    
  )
}

export default Projects