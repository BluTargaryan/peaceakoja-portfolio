'use client'

import React, {useState, useEffect} from 'react'
import ProjectsPreviewItem from './ProjectsPreviewItem'

import projectsList from '@/app/projectsList'

interface Project {
    name: string;
    img: string;
    github: string;
    site: string;
  }

const ProjectsList = () => {

    const [projectListState, setProjectListState] = useState<Project[]>([])
   
useEffect(() => {
setProjectListState(projectsList)
console.log(projectListState)
}, [projectsList])
  return (  
  <>
   {
    projectListState.length>0 && 
    <div className="flex flex-col w-11/12 h-[200px] gap-2">
    {projectListState.map(project => (
              <ProjectsPreviewItem 
              key={project.name}
              name={project.name}
              img={project.img}
              github={project.github}
              site={project.site}/>
            ))}
    </div>
   }
  </>
  )
}

export default ProjectsList