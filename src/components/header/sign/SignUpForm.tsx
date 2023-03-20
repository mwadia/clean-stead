import React from 'react';
import SignUpValid from '../../../validation/signUpValidition';
import axios from 'axios';

interface ISingUpForm {
  close: Function;
}

const SingUpForm = ({ close }: ISingUpForm) => {
  const [signUp, setSignUp] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSignUpSubmit = async (event: any) => {
    try {
      event.preventDefault();
      close(false);
      const validated = await SignUpValid.validate(signUp);
      axios
        .post('https://student.valuxapps.com/api/register', validated)
        .then((res) => console.log(res));
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSignUpSubmit}
      className='px-6 text-right mt-[25px]'
      action=''
    >
      <label className='block mb-2' htmlFor=''>
        الاسم
      </label>
      <div className='border w-full h-[50px] rounded-[12px] flex justify-end gap-1'>
        <input
          className='w-[70%] h-[45px] text-right font-light outline-none'
          type='text'
          placeholder='ادخل الاسم'
          onChange={(e) =>
            setSignUp({
              ...signUp,
              name: e.target.value,
            })
          }
          value={signUp.name}
        />
        <img
          className='w-[24px] mr-5'
          src='./images/Message.svg'
          alt='Message'
        />
      </div>

      <label className='block mb-2' htmlFor=''>
        الايميل
      </label>
      <div className='border w-full h-[50px] rounded-[12px] flex justify-end gap-1'>
        <input
          className='w-[70%] h-[45px] text-right font-light outline-none'
          type='text'
          placeholder='ادخل الايميل'
          onChange={(e) =>
            setSignUp({
              ...signUp,
              email: e.target.value,
            })
          }
          value={signUp.email}
        />
        <img
          className='w-[24px] mr-5'
          src='./images/Message.svg'
          alt='Message'
        />
      </div>
      <label className='block mb-2' htmlFor=''>
        رقم الجوال
      </label>
      <div className='border w-full h-[50px] rounded-[12px] flex justify-end gap-1'>
        <input
          className='w-[70%] h-[45px] text-right font-light outline-none'
          type='text'
          placeholder='رقم الجوال'
          onChange={(e) =>
            setSignUp({
              ...signUp,
              phone: e.target.value,
            })
          }
          value={signUp.phone}
        />
        <img
          className='w-[24px] mr-5'
          src='./images/Phone_duotone.svg'
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
            setSignUp({
              ...signUp,
              password: e.target.value,
            })
          }
          value={signUp.password}
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

export default SingUpForm;
