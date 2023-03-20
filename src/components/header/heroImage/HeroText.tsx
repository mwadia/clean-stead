import React from 'react';

const HeroText = () => {
  return (
    <div className='flex h-full flex-col items-center sm:max-xl:items-end justify-center text-[6vw] sm:max-xl:text-[4vw] text-center sm:max-xl:text-right sm:max-xl:mr-9'>
      <p className='leading-[35px] sm:max-md:leading-[45px] lg:max-xl:leading-[75px]'>
        اختار يلي <span className='text-green '>بخلصك</span> <br />
        !من مره وحده
      </p>
      <p className='text-textGrayLight text-[4vw] sm:max-xl:text-[2vw] font-light mt-8'>
        ما تشيل هم كلمنا بنساعدك
      </p>
      <p className='text-textGrayLight text-[4vw] sm:max-xl:text-[2vw] font-light'>
        احجز خدمة مضمونة بكبسة زر
      </p>
      <button className='text-[14px] sm:max-xl:text-[20px] font-light bg-white rounded-full w-[100px] h-[40px] sm:max-xl:w-[150px] sm:max-xl:h-[50px] mt-10'>
        تواصل معنا
      </button>
    </div>
  );
};

export default HeroText;
