import React from 'react';

const MenuNav = () => {
  return (
    <ul className='flex md:max-xl:flex-row-reverse flex-col justify-center text-center md:max-xl:gap-6 gap-1 my-3'>
      <li>
        <a className='text-purble' href='/'>
          الرئيسية
        </a>
      </li>
      <li>
        <a className='text-purble' href='/services'>
          الخدمات
        </a>
      </li>
      <li>
        <a className='text-purble' href='/about'>
          من نحن
        </a>
      </li>
      <li>
        <a className='text-purble' href='/contact'>
          اتصل بنا
        </a>
      </li>
    </ul>
  );
};

export default MenuNav;
