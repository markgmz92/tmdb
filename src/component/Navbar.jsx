import { useState } from 'react';

import TMDB from '../component/assets/TMDB.jpg';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlinePlus,
  AiFillBell
} from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { RiEnglishInput } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=' w-full h-16 mx-auto flex justify-between items-center p-4 shadow-lg'>
      <div className=' hidden md:flex md:items-start md:px-24'>
        <img src={TMDB} width={240} alt='TMDB logo' />

        <ul className='hidden md:flex md:m-auto px-8'>
          <li className='px-4 text-lg'>Movies</li>
          <li className='px-4 text-lg'>TV Shows</li>
          <li className='px-4 text-lg'>People</li>
          <li className='px-4 text-lg'>More</li>
        </ul>
      </div>

      <div>
        <ul className='hidden md:flex justify-start px-56'>
          <li className='px-4'>
            <AiOutlinePlus size={20} />
          </li>
          <li className='border-black px-2'>
            <RiEnglishInput size={20} />
          </li>
          <li className='px-2'>
            <AiFillBell size={20} />
          </li>
          <li className='px-2'>
            <CgProfile size={20} />
          </li>
        </ul>
      </div>

      <div onClick={handleNav} className='block md:hidden z-50'>
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}

        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 '
              : ''
          }
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
                : 'ease-in-out duration-500 fixed left-[-100%]'
            }
          >
            <div>
              <div className='flex flex-col w-full items-center justify-between z-50'>
                <div className='mt-16'>
                  <img src={TMDB} width={240} alt='TMDB Logo' />
                </div>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='mx-4'>
                <li className='px-4 py-2 text-lg'>Movies</li>
                <li className='px-4 py-2 text-lg'>TV Shows</li>
                <li className='px-4 py-2 text-lg'>People</li>
                <li className='px-4 py-2 text-lg'>More</li>
              </ul>

              <div className='p-4 mx-4'>
                <h2 className='tracking-wider text-xl'>Profile</h2>
                <ul className='flex justify-start md:px-56 md:py-2'>
                  <li className='md:px-4'>
                    <AiOutlinePlus size={20} />
                  </li>
                  <li className=' px-2 border-black md:px-2'>
                    <RiEnglishInput size={20} />
                  </li>
                  <li className='px-2 md:px-2'>
                    <AiFillBell size={20} />
                  </li>
                  <li className='px-2 md:px-2'>
                    <CgProfile size={20} />
                  </li>
                </ul>
              </div>

              <div className='pt-24 mx-8'>
                <p className='uppercase tracking-widest'>Follow us</p>
                <ul className='flex mt-2'>
                  <li>
                    <BsFacebook size={32} className='shadow-lg' />
                  </li>
                  <li className='mx-2'>
                    <BsInstagram size={32} className='shadow-lg' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
