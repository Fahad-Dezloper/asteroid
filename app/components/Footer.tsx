import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const documentation = ["Documentation", "Blog", "Demo"]
    const company = ["About", "Pricing", "Contact"]

  return (
    <div className='w-full h-[60vh] flex flex-col justify-between overflow-hidden px-8 pt-8 pb-5 bg-white rounded-t-3xl'>
        <div className='flex justify-between font-body z-50'>
            <div className='section1 flex flex-col text-[2.5vw] gap-1 leading-none text-black font-semibold'>
                <h1 className=''>Building</h1>
                <h1 className=''>Infrastructure for</h1>
                <h1 className='text-primary'>AI Agents</h1>
            </div>
            <div className='section2 h-fit flex flex-col gap-3'>
                <h1 className='text-xl font-semibold text-gray-500'>Resources</h1>
                <div className='flex flex-col gap-2 border-l pl-2'>
                    {documentation.map((item, i) => (
                        <h3 key={i} className="hover:underline duration-200 transition-all cursor-pointer ease-in-out decoration-primary">{item}</h3>
                    ))}
                </div>
            </div>
            <div className='section3 h-fit flex flex-col gap-3'>
                <h1 className='text-xl font-semibold text-gray-500'>Company</h1>
                <div className='flex flex-col gap-2 border-l pl-2'>
                    {company.map((item, i) => (
                        <h3 key={i} className="hover:underline duration-200 transition-all cursor-pointer ease-in-out decoration-primary">{item}</h3>
                    ))}
                </div>
            </div>
            <div className='section4 h-fit w-fit flex flex-col gap-3'>
                <h1 className='w-full text-xl font-semibold text-center text-gray-500'>Quick Links</h1>
                <div className="flex gap-3">
                    <div className='flex gap-2 py-2 px-3 bg-gray-200 rounded-full cursor-pointer hover:border-blue-500/20 hover:bg-blue-500/[0.03] hover:transition-shadow duration-200 ease-in-out hover:shadow-lg'>
                    <Image src="././github.svg" alt="github logo" width={18} height={18} />
                    Github
                    </div>
                    <div className='flex gap-2 py-2 px-3 bg-gray-200 rounded-full cursor-pointer hover:border-blue-500/20 hover:bg-blue-500/[0.03] hover:transition-shadow duration-200 ease-in-out hover:shadow-lg'>
                    <Image src="././slack.svg" alt="github logo" width={18} height={18} />
                    Slack
                    </div>
                </div>
            </div>
            <div className='section5 h-fit w-fit flex flex-col gap-3'>
                <h1 className='text-xl font-semibold text-gray-500'>Newsletter</h1>
                <div className='flex gap-2 items-center'>
                    <input type='email' className='p-2 border outline-none rounded-lg' placeholder='johndoe@gmail.com' />
                    <Button className='bg-primary text-white'>Join</Button>
                </div>
            </div>
        </div>

        
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className='text-[23vw] leading-[0.7] font-primary font-bold flex tracking-tight'>Aster<span className='flex items-end'>
                <Image
                    src="https://asteroid.ai/logo-128-nobg.png"
                    width={500}
                    height={500}
                    className='scale-125'
                    alt="Enterprise Icon"
                  />
                  </span>id</h1>
                <span className='mt-4 text-gray-500 text-base w-full'>© 2025 Entropy Systems, Inc. All rights reserved</span>    
                  <hr />
        </div>
    </div>
  )
}

export default Footer