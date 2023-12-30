import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo 1.png';

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full'>
      <div className='md:flex items-center justify-between bg-blue-900 py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <img className='w-7 lg:w-7 object-cover' src={logo} alt="" />
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        {/* linke items */}
        <ul className={`md:flex md:items-center justify-start md:pb-0 pb-8 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-[78px] pt-8 z-10' : 'top-[-490px]'}`}>
          <div className="gap-5 flex">
            <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Sign In</button>
            <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
          </div>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
