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
    onClick={()=>isSelected(!selected)} 
    className={`h-full  ${selected?'w-[654px]':''} p-5 flex-grow border bg-customBlack rounded-2xl transition-all cursor-pointer flex flex-col gap-6 items-end justify-end text-customWhite relative`}
    >
<div
      className='absolute inset-0 bg-cover bg-center z-0 rounded-2xl transition-transform duration-300 group-hover:scale-110'
      style={{ backgroundImage: `url(${img})` }}
      />
      
{
  selected && <>
  
      <div
      className='absolute inset-0 bg-cover bg-center z-10 rounded-2xl transition-transform duration-300 group-hover:scale-110 bg-customBlack opacity-50' 
      />
  <h3 className='text-5xl z-30'>{name}</h3>
  
<div className='flex gap-4 z-30'>
<PAButtonLink
lnk="/projects"
to="Project page"
/>
<PAButtonLink
lnk={github}
to="Github"
/>
<PAButtonLink
lnk={site}
to="Website"
/>
</div>
  </>
}
    </div>
  )
}

export default ProjectsPreviewItem