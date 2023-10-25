"use client";

// This is used to solve the problem of prop drilling that is caused because each section is differently spread out 
// and header is different section we could have used the typical prop drilling and proivding props to eact section 
// seperately however it might have resulted in more management of each propers and carefully passing them


import React, {useState, createContext, Dispatch,useContext} from 'react';
import { SectionName } from '@/lib/customtypes';

// Defination for bringing each aleady defined section part in our file

// type SectionName = (typeof links) [number]["name"]

// Defining the props for childeren type
type ActiveSectionProviderProps = {
    children: React.ReactNode;
  };

// Do we now have the access of Active section to Header no so to solve this problem we need to modif our code
/**
 *  Create an active Section Context to pass the children and the header both as the childeren.
 * Once we have access to we pass childeren as the props and value as an option consisting of field 
 * current active section and setter function for the active section we need to update each time the 
 * header points to new section.
 *
 */
interface ActiveSectionContextType {
    activeSection: SectionName,
    setActiveSection: Dispatch<React.SetStateAction<SectionName>>
    timeofLastClick: number;
    setTimeOfLastClick: Dispatch<React.SetStateAction<number>>
}
export const ActiveSectionContext = createContext<ActiveSectionContextType| null>(null);
const ActiveSectionProivider = ({children}:ActiveSectionProviderProps) => {
    //Manage the states from here 
    // we need to define and let know our usetate that it can have any of the six available string types i.e. Home,About, etc.
    // To make things work we defined our earlier used link defination of each header and pass that to our useState
    // The below code is similar to this
    // const [activeSection, setActiveSection] = useState<"Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact">

    const [activeSection,setActiveSection] = useState<SectionName>("Home");
    // As we have a problem when we scroll the sections changes however if we click then it should point to the current section 
    // and disable the scroll view option for sometime
    const [timeofLastClick,setTimeOfLastClick] = useState(0);
  return( 
  <ActiveSectionContext.Provider 
  value={{
    activeSection,
    setActiveSection,
    timeofLastClick,
    setTimeOfLastClick}}>
    {children}</ActiveSectionContext.Provider>)
}

export default ActiveSectionProivider

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSection must be used within an ActiveSectionProvider"
        );
    }
    return context;
}