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
    <div className="h-[40rem] flex flex-col gap-4 justify-center items-center px-4">
      <h2 className="font-primary text-xl text-center sm:text-5xl dark:text-white text-white">
      Need a custom browser automation?
      </h2>
      <div className='flex flex-col gap-2 w-full items-center'>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <span className='text-xs font-body text-gray-200 mt-2'>We can rapidly prototype, build and host custom browser automations for your specific use case.</span>
    </div>
    </div>
  )
}

export default Automation