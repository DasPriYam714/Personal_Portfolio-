import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";

import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Profile from "@/components/Profile";

import Interests from "@/components/Interests";
import Resume from "@/components/Resume";
import ContactMe from "@/components/ContactMe";
import WhatIDo from "@/components/WhatIDo";
import { MyApproach } from "@/components/MyApproach";
import Achievement from "@/components/Achievement";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems}></FloatingNav>
      <Hero></Hero>
      <Profile></Profile>

      <Grid></Grid>
      <RecentProjects></RecentProjects>
      {/* <Achievement></Achievement> */}
      <Interests></Interests>
      <Resume></Resume>
      <WhatIDo></WhatIDo>
      <MyApproach></MyApproach>
      <Achievement></Achievement>


      <ContactMe></ContactMe>
      



      </div>
      
    </main>
    
  );
}
