import React from 'react';
import Divider from '@mui/material/Divider';

const Taps = ({ setIsSignIn, isSignIn }: any) => {
  const buttonStyle = 'text-textGrayLight font-light text-[20px]';
  return (
    <div className='flex justify-center items-center mt-[20px] w-full gap-[40px]'>
      <div className='relative'>
        <button onClick={() => setIsSignIn(false)} className={buttonStyle}>
          انشاء حساب
        </button>
        {!isSignIn && (
          <div className='absolute sm:max-xl:w-[150px] w-[100px] bg-blue h-[5px] right-[-10px] sm:max-xl:right-[-20px] bottom-[-9px] rounded-tl-[10px] rounded-t-lg'></div>
        )}
      </div>
      <Divider orientation='vertical' flexItem />
      <div className='relative'>
        <button onClick={() => setIsSignIn(true)} className={buttonStyle}>
          تسجيل دخول
        </button>
        {isSignIn && (
          <div className='absolute sm:max-xl:w-[150px] w-[100px] bg-blue h-[5px]  right-[0px] sm:max-xl:right-[-20px] bottom-[-9px] rounded-tl-[10px] rounded-t-lg'></div>
        )}
      </div>
    </div>
  );
};

export default Taps;
