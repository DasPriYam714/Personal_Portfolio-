import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";

import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Profile from "@/components/Profile";
import Achievement from "@/components/ui/achievement";
import Interests from "@/components/Interests";
import Resume from "@/components/Resume";

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



      </div>
      
    </main>
    
  );
}
