'use client'
import React, { useState, useRef , useEffect} from 'react'
import { Button } from './ui/button'
import PAButtonLink from './PAButtonLink'

const ProjectsPreviewItem = () => {
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
    <div ref={outsideClickRef} onClick={()=>isSelected(!selected)} className={`h-full  ${selected?'w-[654px]':''} p-5 flex-grow border bg-customBlack rounded-2xl transition-all cursor-pointer flex flex-col gap-6 items-end justify-end text-customWhite`}>
{
  selected && <>
  <h3 className='text-5xl'>Project name</h3>
<div className='flex gap-4'>
<PAButtonLink
lnk="/projects"
to="Project page"
/>
<PAButtonLink
lnk="https://github.com/BluTargaryan"
to="Github"
/>
<PAButtonLink
lnk="https://growth-group-helper.vercel.app/"
to="Website"
/>
</div>
  </>
}
    </div>
  )
}

export default ProjectsPreviewItem