import CopyCommand from '@/components/copy-command'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex flex-col leading-tight items-center h-screen justify-center pb-24'>
      <Link href={"https://www.ycombinator.com/companies/asteroid"} className='px-4 py-2 hover:bg-[#1F1F1F] text-white flex gap-2 items-center justify-center z-[50] duration-150 border rounded-2xl border-[#FF6600]'>Backed By 
      <Image src={"https://www.vectorlogo.zone/logos/ycombinator/ycombinator-tile.svg"} width={22} height={22} alt='yc logo' />
      </Link>
      <div className="flex flex-col gap-3 items-center mt-6">
        <h1 className='text-[2vw] leading-tight font-medium text-center font-body text-gray-100'>Supercharge Your</h1>
            <h1 className='font-bold text-[3vw] leading-[0.8] font-body text-primary'>LLM-Powered Applications</h1>
          <h1 className='text-[2vw] leading-tight font-medium text-center font-body text-gray-100'>with Intelligent <span className='underline decoration-primary'>Supervision</span></h1>
            <h1 className='text-[1vw] font-medium text-gray-400 text-center mt-2'>Effortlessly supervise and control LLM workflows with just one line of code.</h1>
            </div>
        <div className='mt-6 z-[40]'>
            <CopyCommand />
        </div>
        <BackgroundBeams />
    </div>
  )
}

export default LandingPage