import React from 'react'
import YouTubePlayer from './YoutubeVid'

const SneakPeak = () => {
  return (
    <div className='h-fit w-full flex flex-col gap-12 items-center justify-center'>
        <div className='flex flex-col items-center'>
        <h1 className='text-[2.5vw] text-gray-100 text-center font-semibold'>Redefining How AI Agents Are Being Guarded</h1> 
        <span className='text-primary text-[1.5vw]'>( In 120 Seconds )</span>
        </div>
        <YouTubePlayer />
    </div>
  )
}

export default SneakPeak