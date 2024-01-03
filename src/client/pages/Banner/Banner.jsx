import React from 'react'
import BannerLogo from '../../assets/logo 1.png'
import Card from '../../components/Card/Card'

const Banner = () => {
  return (
    <div className=' p-2 bg-gradient-to-t from-black to-blue-900 w-[100%] h-[92.4vh] overflow-x-hidden'>
      <div className="container mx-auto flex lg:flex-nowrap flex-wrap">
        <div className=' w-full lg:w-[50%] text-center'>
          <div className="h-[400px] lg:h-[600px] flex items-center justify-center lg:pt-40">
            <img className='w-[204.42px] lg:w-[254.42px] object-cover' src={BannerLogo} alt="" />
          </div>
          <div className="">
            <h1 className='text-white text-5xl lg:text-[101.22px] font-bold font-sans'>GENERIC.UZ</h1>
          </div>
        </div>
        <div className=' w-full lg:w-[45%] pt-5'>
          <h1 className='ml-20 text-white md:ml-0 text-2xl lg:text-[33.62px] font-bold font-sans'>BARCHA KURSLAR</h1>
          <Card/>
        </div>
  </div>
    </div>
  )
}

export default Banner