import React from 'react'
import { mockData } from '../../data/data'

const Card = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-3 lg:p-0 p-6">
      {mockData.data.map((item) => (
        <div className='backdrop-blur-md bg-opacity-25 bg-cyan-800 rounded-[22.84px]'>
          <div className='w-full h-[86px] lg:w-[239.19px] lg:h-[86px] z-20 rounded-[22.84px] flex items-center justify-around px-5'>
            <div className='w-[28%] lg:w-[20%]'>
              <img className=' w-[70%] lg:w-full lg:h-full object-cover' src={item.image} alt="" />
            </div>
            <div className='w-[70%] lg:w-[75%] pl-2'>
              <div className='lg:mt-0 -mt-1'>
                <h1 className='text-white text-[26.32px] font-bold font-sans'>{item.title}</h1>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-white text-xs font-bold font-sans'>{item.series}</span>
                <span className='text-white text-xs font-bold font-sans'>{item.video}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card