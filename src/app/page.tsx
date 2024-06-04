import Image from "next/image";
import PAButton from "@/components/PAButton";
import Link from "next/link";
import { lustria } from "./layout";
import PAButtonWIcon from "@/components/PAButtonWIcon";
import ProjectsPreviewItem from "@/components/ProjectsPreviewItem";

import {motion as m} from 'framer-motion'
import ScrollingText from "@/components/ScrollingText";
import TechStackItem from "@/components/TechStackItem";

export default function Home() {

  
  return (
 <div className="flex flex-col items-center">
   <section id="starter" className="flex w-full   text-customBlack h-[800px] items-center justify-between px-8">
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
<section id="aboutme" className="h-[2557px] w-full flex flex-col items-center justify-center gap-36">
<div className="w-[549px] h-[549px] bg-customBlack rounded-full">

</div>
<div className="w-full h-[417px] px-8 flex justify-between">
<div className="w-2/5 h-[417px] rounded-2xl bg-customBlue border-[3px] border-customBlack ">

   </div>

   <div className="h-full w-1/2  flex flex-col items-end justify-center gap-20 text-right">
   <h2 className={`${lustria.className} text-5xl`}>Education</h2>
   <ul className="flex flex-col items-end justify-center gap-5 text-2xl">
    <li>Master’s in Computer Science, Coventry University<br/>(2023 - 2024)</li>
    <li>Bachelor’s in Computer Science, Redeemer’s University <br/>(2016 - 2020)</li>
    <li>IBM Frontend Developer Professional Certificate, Coursera <br/>(2024)</li>
   </ul>
   </div>
</div>


<div className="w-full h-[417px] px-8 flex justify-between">


   <div className="h-full w-1/2  flex flex-col items-start justify-center gap-20 ">
   <h2 className={`${lustria.className} text-5xl`}>Experience</h2>
   <ul className="flex flex-col items-start justify-center gap-5 text-2xl">
    <li>Software Developer - Volunteer, THEITAPPRENTICE<br/>(2024 -)</li>
    <li>Web Designer - Volunteer, RCCG HGZ Coventry <br/>(2023 -)</li>
    <li>Web Designer/Developer, Freelance <br/>(2022 -)</li>
   </ul>
   </div>

   <div className="w-2/5 h-[417px] rounded-2xl bg-customBlue border-[3px] border-customBlack ">

   </div>
</div>

<div className="flex flex-col items-center justify-center gap-20">
<h2 className={`${lustria.className} text-5xl`}>Toolkit</h2>
<div className="w-4/5 h-auto gap-24 flex justify-center border border-red-100">
<TechStackItem
title='HTML'/>
<TechStackItem
title='HTML'/>
</div>
</div>
</section>

 </div>
  );
}
