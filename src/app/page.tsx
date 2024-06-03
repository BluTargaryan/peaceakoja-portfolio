import Image from "next/image";
import PAButton from "@/components/PAButton";
import Link from "next/link";
import { lustria } from "./layout";
import PAButtonWIcon from "@/components/PAButtonWIcon";
import ProjectsPreviewItem from "@/components/ProjectsPreviewItem";

import {motion as m} from 'framer-motion'
import ScrollingText from "@/components/ScrollingText";

export default function Home() {

  
  return (
 <div className="flex flex-col items-center">
   <section id="starter" className="flex w-full   text-customBlack h-[800px] items-center justify-between p-8">
   <div className="w-2/5 h-96  flex flex-col justify-between">
    <h1 className={`${lustria.className} text-6xl leading-tight`}>Welcome to the portfolio of Peace Akoja</h1>

    <div className="flex w-full  gap-5">
   <PAButton submittedLink="#projects-preview"/>
   <PAButtonWIcon 
   submittedLink="/projects"
   backgroundColor={true}
   typeLong={false}
   color="customBlack"/>
   
   </div>
   </div>
   
   <div className="w-1/2 h-[483px] rounded-2xl bg-customBlue border-[3px] border-customBlack ">

   </div>
   </section>

   <div className="w-4/5 bg-customBlack h-1"></div>

    <section id="projects-preview" className="flex flex-col gap-14 w-full   text-customBlack h-[954px] items-center justify-center p-8">
<div className="flex flex-col items-center gap-6">
  <h2 className={`${lustria.className} text-5xl`}>Projects</h2>
  <p className="text-2xl">Click an item to expand it</p>
</div>
<div className="flex w-3/5 h-[479px] gap-2">
<ProjectsPreviewItem/>
<ProjectsPreviewItem/>
<ProjectsPreviewItem/>
<ProjectsPreviewItem/>
<ProjectsPreviewItem/>
</div>
<PAButtonWIcon 
   submittedLink="/projects"
   backgroundColor={false}
   typeLong={true}
   color="gray-200"/>

   </section>
<ScrollingText/>

 </div>
  );
}
