import React from 'react';
import SignIn from '../sign';

const SignButtons = () => {
  return (
    <div className='flex gap-2 md:max-xl:flex-row-reverse flex-col'>
      <SignIn  />
      <button className='bg-blue rounded-full text-white font-light w-[110px] h-[40px]'>
        احجز الان
      </button>
    </div>
  );
};

export default SignButtons;
