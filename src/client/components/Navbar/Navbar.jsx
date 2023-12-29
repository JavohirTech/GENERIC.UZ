import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo 1.png';

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
      // <div className="px-4 md:px-10 py-2 text-white flex justify-between bg-blue-900">
      //   <img className='w-5 lg:w-8 object-cover' src={logo} alt="" />
      //   <div className={toggleMenu ? 'md:flex md:pt-0 pt-10 w-full md:w-auto' : 'hidden md:flex'} id="menu">
      //     <ul className="md:flex gap-5">
      //       <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
      //         <button className="text-white focus:outline-none focus:shadow-outline-blue hover:bg-blue-800 font-bold py-2 px-4 rounded">Sign In</button>
      //       </li>
      //       <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative group">
      //         <button className="text-white bg-blue-700 focus:outline-none focus:shadow-outline-blue font-bold py-2 px-4 rounded">Get Started for Free</button>
      //       </li>
      //     </ul>
      //   </div>
      //   <div className="cursor-pointer md:hidden flex items-center justify-center">
      //     <span onClick={handleToggle} className="navicon bg-white-darkest flex items-center relative">
      //       {toggleMenu ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}
      //     </span>
      //   </div>
      // </div>
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
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
              </li>))
          }
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
