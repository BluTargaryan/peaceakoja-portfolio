'use client'
import React, { useState, useRef , useEffect} from 'react'
import { Button } from './ui/button'
import PAButtonLink from './PAButtonLink'

interface ProjectDetails {
  name: string;
  img: string;
  github: string;
  site: string;
}

const ProjectsPreviewItem = ({name, img,github,site}:ProjectDetails) => {
const [selected, isSelected]  = useState(false)
const outsideClickRef = useRef<HTMLDivElement>(null);

const handleOutsideClick = (event:MouseEvent) => {
  if (outsideClickRef.current && !outsideClickRef.current.contains(event.target as HTMLElement)) {
    isSelected(false);
  }
};



useEffect(() => {
  document.addEventListener('click', handleOutsideClick);
  return () => {
    document.removeEventListener('click', handleOutsideClick);
  };
}, []);

    return (
      <div 
      ref={outsideClickRef} 
      onClick={() => isSelected(!selected)} 
      className={`w-full ${selected ? 'h-[200px]' : 'h-auto'} p-5 flex-grow border bg-customBlack rounded-2xl transition-all duration-300 ease-in-out cursor-pointer flex flex-col gap-6 items-end justify-end text-customWhite relative`}
  >
    <div
      className='absolute inset-0 bg-cover bg-center z-0 rounded-2xl transition-transform duration-300 ease-in-out'
      style={{ backgroundImage: `url(${img})` }}
    />
    
    {selected && (
      <>
        <div
          className='flex flex-col items-end gap-6
          absolute inset-0 bg-cover bg-center z-10 rounded-2xl transition-transform duration-300 ease-in-out bg-customBlack opacity-50'
        />
        <h3 className='text-3xl z-30 transition-opacity duration-300 ease-in-out'>{name}</h3>
        
        <div className='flex gap-4 z-30 transition-opacity duration-300 ease-in-out'>
          <PAButtonLink lnk="/projects" to="Project page" />
          <PAButtonLink lnk={github} to="Github" />
          <PAButtonLink lnk={site} to="Website" />
        </div>
      </>
    )}
  </div>
  )
}

export default ProjectsPreviewItem