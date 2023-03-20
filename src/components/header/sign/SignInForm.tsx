import React from 'react';
import SignInValid from '../../../validation/signInValidition';
import axios from 'axios';
const SignInForm = ({ close }: any) => {
  const [signIn, setSignIn] = React.useState({
    email: '',
    password: '',
  });

  const handleSignInSubmit = async (event: any) => {
    try {
      event.preventDefault();
      close(false);
      const validated = await SignInValid.validate(signIn);
      axios
        .post('https://student.valuxapps.com/api/login', validated)
        .then((res) => console.log(res));
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSignInSubmit}
      className='px-6 text-right mt-[25px]'
      action=''
    >
      <label className='block mb-2' htmlFor=''>
        الايميل
      </label>
      <div className='border w-full h-[50px] rounded-[12px] flex justify-end gap-1'>
        <input
          className='w-[70%] h-[45px] text-right font-light outline-none'
          type='text'
          placeholder='ادخل الايميل'
          onChange={(e) =>
            setSignIn({
              ...signIn,
              email: e.target.value,
            })
          }
        />
        <img
          className='w-[24px] mr-5'
          src='./images/Message.svg'
          alt='Message'
        />
      </div>
      <label className='block mb-2 mt-[15px]' htmlFor=''>
        كلمة المرور
      </label>
      <div className='border w-full h-[50px] rounded-[12px] flex justify-end gap-1'>
        <input
          className='w-[70%] h-[45px] text-right font-light outline-none'
          type='password'
          placeholder='ادخل كلمة المرور'
          onChange={(e) =>
            setSignIn({
              ...signIn,
              password: e.target.value,
            })
          }
        />
        <img className='w-[24px] mr-5' src='./images/Lock.svg' alt='Lock' />
      </div>
      <button
        className='w-full text-white bg-blue rounded-[50px] h-[50px] text-[18px] mt-[30px] mb-[10px] font-light'
        type='submit'
      >
        دخول
      </button>
    </form>
  );
};

export default SignInForm;
