"use client"
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import React from 'react'

const Automation = () => {
  const placeholders = [
    "I need an agent to automate data entry across multiple insurance portals.",
    "I need a tool to streamline form submissions for insurance platforms.",
    "I need an agent to automate input tasks across various client portals.",
    "I need automation to handle repetitive data entry for online systems."
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[35rem] flex flex-col gap-4 relative justify-end pb-40 items-center px-4">
      <h1 className='text-[34vw] top-0 leading-none absolute font-semibold font-primary text-white/20'>Build</h1>
      <h2 className="font-body text-xl text-center backdrop-blur-lg sm:text-5xl dark:text-white text-white">
      Smarter, Safer AI
      </h2>
      <div className='flex flex-col gap-2 w-full items-center'>
        {/* <span className='text-gray-500 text-base font-body p-2 bg-gray-200/20 rounded-xl'>We quickly prototype, build, and host custom browser automations for your needs.</span> */}
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
    </div>
  )
}

export default Automation