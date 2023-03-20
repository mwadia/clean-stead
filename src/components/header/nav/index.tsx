import React, { useState } from 'react';
import MenuNav from './MenuNav';
import Logo from './Logo';
import SignButtons from './SignButtons';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-row-reverse justify-between items-start mt-4 mb-8 relative'>
      <Logo />
      <div className='flex w-[65%] lg:w-[65%] md:w-[80%] justify-between items-start md:max-xl:flex-row-reverse flex-col'>
        <button className='md:max-xl:hidden' onClick={() => setOpen(!open)}>
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </button>
        <div
          className={`md:flex ${
            open ? 'flex w-[57%]' : 'hidden'
          } w-[100%] lg:w-[100%] md:w-[100%] justify-between items-center md:max-xl:flex-row-reverse flex-col`}
        >
          <MenuNav />
          <SignButtons />
        </div>
      </div>
    </div>
  );
};

export default Nav;
