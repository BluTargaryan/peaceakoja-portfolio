import Image from "next/image";
import PAButton from "@/components/PAButton";
import Link from "next/link";
import { lustria } from "./layout";
import PAButtonWIcon from "@/components/PAButtonWIcon";
import ProjectsPreviewItem from "@/components/ProjectsPreviewItem";
import FixedPageMenu from "@/components/FixedPageMenu";

import {motion as m} from 'framer-motion'
import ScrollingText from "@/components/ScrollingText";
import TechStackItem from "@/components/TechStackItem";
import FooterLinks from "@/components/FooterLinks";

//importing images
import PortCharHeader from '../../public/port char at work.png'
import BobbleHead from '../../public/profile image.png'
import PortCharEd from '../../public/port char at work 1.png'
import PortCharExp from '../../public/port char at work 2.png'
import JSImage from '../../public/js.png'
import TSImage from '../../public/ts.png'
import CSSImage from '../../public/css.png'
import HTMLImage from '../../public/html.png'
import ReactImage from '../../public/react.png'
import FigmaImage from '../../public/figma.png'
import DribbbleImage from '../../public/dribbble.png'
import PhoneImage from '../../public/phone.png'
import GithubImage from '../../public/github.png'
import MailImage from '../../public/mail.png'

export default function Home() {

  
  return (
 <div className="flex flex-col items-center">
   <FixedPageMenu />
   <section id="starter" className="flex w-full   text-customBlack h-[800px] items-center justify-between px-8">
   <div className="w-2/5 h-96  flex flex-col justify-between">
    <h1 className={`${lustria.className} text-6xl leading-tight`}>Welcome to the portfolio of Peace Akoja</h1>
    
    <div className="flex w-full  gap-5">
   <PAButton submittedLink="#projects-preview"/>
   <PAButtonWIcon 
   submittedLink="/projects"
   backgroundColor='transparent'
   typeLong={false}
   color="customBlack"
   borderColor="customBlack"
   title="Go to Projects"/>
   
   </div>
   </div>
   
   <div className="w-1/2 h-[483px] rounded-2xl bg-customBlue border-[3px] border-customBlack flex items-center justify-center">
   <Image 
    src={PortCharHeader}
    width="0"
    height="0"
    sizes="100vw"
    className="w-5/6 h-auto"
    alt="boy working on his computer setup"
   />
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
   backgroundColor='customBlack'
   typeLong={true}
   color="customWhite"
   borderColor="customBlack"
   title="Go to Projects"/>

   </section>
<ScrollingText/>
<section id="aboutme" className="h-[2557px] w-full flex flex-col items-center justify-center gap-36">
<div className="w-[549px] h-[549px] rounded-full border-0 bg-customBlack flex items-end justify-center ">
<Image 
    src={BobbleHead}
    width="0"
    height="0"
    sizes="100vw"
    className="w-3/4 h-auto"
    alt="Cartoon profile image of the website creator"
   />
</div>
<div className="w-full h-[417px] px-8 flex justify-between">
<div className="w-2/5 h-[417px] rounded-2xl bg-customLightBlue border-[3px] border-customBlack flex items-center justify-center">
<Image 
    src={PortCharEd}
    width="0"
    height="0"
    sizes="100vw"
    className="w-5/6 h-auto"
    alt="graduate working on his computer setup"
   />
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

   <div className="w-2/5 h-[417px] rounded-2xl bg-customBlue border-[3px] border-customBlack flex items-center justify-center">
   <Image 
    src={PortCharExp}
    width="0"
    height="0"
    sizes="100vw"
    className="w-5/6 h-auto"
    alt="graduate working on his computer setup"
   />
   </div>
</div>

<div className="flex flex-col items-center justify-center gap-20">
<h2 className={`${lustria.className} text-5xl`}>Toolkit</h2>
<div className="w-4/5 h-auto gap-24 flex justify-center">
<TechStackItem
title='HTML'
image={HTMLImage}/>
<TechStackItem
title='CSS'
image={CSSImage}/>
<TechStackItem
title='JavaScript'
image={JSImage}/>
<TechStackItem
title='TypeScript'
image={TSImage}/>
<TechStackItem
title='React'
image={ReactImage}/>
<TechStackItem
title='Figma'
image={FigmaImage}/>
</div>
</div>
</section>

<footer id="home-footer" className="w-full h-[645px] bg-customBlack flex flex-col gap-20 items-center justify-center text-customWhite">
<h2 className={`${lustria.className} text-5xl`}>Links</h2>
<div className="w-4/5 flex gap-24 justify-center">
<FooterLinks 
image={GithubImage}
link="https://github.com/BluTargaryan"
btnTitle="Go to Github"
isLinkType={true}/>
<FooterLinks 
image={DribbbleImage}
link="https://dribbble.com/peaceakoja"
btnTitle="Go to Designs"
isLinkType={true}/>

<FooterLinks 
image={PhoneImage}
link="+4407538774045"
btnTitle="Call me"
isLinkType={false}/>
<FooterLinks 
image={MailImage}
link="opeyemiyolo@gmail.com"
btnTitle="Mail me"
isLinkType={false}/>
</div>
<p className="text-2xl">Painted by Peace</p>
</footer>
 </div>
  );
}
