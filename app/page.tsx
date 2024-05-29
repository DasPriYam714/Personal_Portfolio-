import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import Profile from "@/components/Profile";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={[{name: 'Home', link:'/', icon: <FaHome></FaHome>}]}></FloatingNav>
      <Hero></Hero>
      {/* <Profile></Profile> */}

      <Grid></Grid>
      <RecentProjects></RecentProjects>

      </div>
      
    </main>
    
  );
}
