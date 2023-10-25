// Taking the principle of DRY we are almost repeaeating ourself in sectionview as it performs the same function in
// all of the Navigation bar Sections. So we create a custom hook to refactor the code and make a single function.

import { useActiveSectionContext } from "@/api/contextApi/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./customtypes";


// As this hook works the same as before inside the fuction by taking in the different section and returnign 
// the ref and other required ones
export function useSectionInView(sectionName: SectionName,threshold = 0.75) {
    const {ref, inView } = useInView({
        threshold
      });
      const {setActiveSection,timeofLastClick} = useActiveSectionContext() 
    
      useEffect(() => {
        if (inView && Date.now() - timeofLastClick > 1000) {
          setActiveSection(sectionName)
        }
        
      
      }, [inView,setActiveSection,timeofLastClick])

      return ({
        ref,
    })
}