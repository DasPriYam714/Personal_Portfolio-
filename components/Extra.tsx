"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function Extra() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-[#030315] relative flex flex-col items-center justify-center antialiased mb-10">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="relative z-15 text-xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Are you prepared to elevate your digital presence to new heights?
        </h2>
        
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm sm:text-lg text-center relative z-10 mt-5">
        Connect with me today to explore how I can assist you in reaching your goals.
        </p>
        {/* <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        /> */}
      </div>
      <BackgroundBeams />
    </div>
  );
}
// bg-[#04031d]