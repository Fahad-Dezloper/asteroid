import React from 'react'
import YouTubePlayer from './YoutubeVid'

const SneakPeak = () => {
  return (
    <div className='h-fit w-full flex flex-col gap-12 justify-center items-center'>
        <div className='flex flex-col w-full'>
        <h1 className='text-[4vw] text-center text-gray-100 font-semibold font-primary'>See <span className='underline decoration-primary'>Asteroid AI</span> in <span className='text-[4vw]'>Action</span></h1> 
        {/* <span className='text-primary text-[1.5vw]'>( In 120 Seconds )</span> */}
        </div>
        <div className='w-full shadow-2xl overflow-hidden rounded-2xl' style={{transform:"rotateX(9deg) translateZ(40px)"}}>
        <YouTubePlayer />
        </div>
    </div>
  )
}

export default SneakPeak