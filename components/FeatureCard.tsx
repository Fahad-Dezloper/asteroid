import React from 'react'

const FeatureCard = ({num, heading, image, tags, des}) => {
  return (
    <div className={`text-white flex items-start ${num % 2 == 0 ? "flex-row-reverse" : ""} gap-32 justify-center`}>
            <div className="flex flex-col gap-6">
              <h1 className='text-[6vw] text-gray-300/40 font-black leading-[0.95]'>0<span className='text-primary'>{num}</span></h1>
              <div className='flex flex-col gap-2'>
              <h1 className="text-xl text-white font-semibold font-body">{heading}</h1>
              
              <div className='flex gap-2'>
              {tags.map((item, i) => (
                <div key={i} className='text-xs font-semibold py-2 px-3 bg-blue-200/80 text-gray-800 rounded-lg'>{item}</div>
              ))}
              </div>
              </div>
              <p>{des}</p>
            </div>
            
            {/* rotate-12 */}
              <div className="w-[28rem] h-[24rem] relative backdrop-blur-xl hover:shadow-lg p-6 rounded-xl">
                  <div className="w-full h-full bg-primary/40 rounded-3xl -rotate-12 scale-110 absolute top-0 left-0 z-[30]"></div>
                  <div className="w-full h-full bg-blue-200/50 rounded-3xl rotate-12 scale-110 absolute top-0 left-0 z-[30]"></div>
                  <img 
                      src={image} 
                      className="w-full h-full object-contain relative z-[50] scale-110 rounded-xl" 
                  />
              </div>

        </div>
  )
}

export default FeatureCard