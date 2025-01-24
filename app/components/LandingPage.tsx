import CopyCommand from '@/components/copy-command'
import { BackgroundBeams } from '@/components/ui/background-beams'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex flex-col leading-tight items-center h-screen justify-center'>
        <h1 className='text-[3vw] leading-tight font-medium font-body text-gray-100'>Mission Critical</h1>
            <h1 className='font-bold text-[4vw] leading-[0.8] font-body text-primary'>Browser Agents</h1>
            <h1 className='text-[1vw] font-medium text-gray-400 text-center mt-4'>Automate previously impossible workflows on the web, <br />
            In one line of code.</h1>

        <div className='mt-6 z-[40]'>
            <CopyCommand />
        </div>
        <BackgroundBeams />
    </div>
  )
}

export default LandingPage