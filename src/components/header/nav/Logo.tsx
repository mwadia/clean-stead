import React from 'react';
const Logo = () => {
  return (
    <div className='flex flex-row-reverse gap-1'>
      <img src='./images/logo.svg' alt='logo' className='w-6' />
      <p>
        كلين <span className='text-blue'>ستيد</span>
      </p>
    </div>
  );
};

export default Logo;
