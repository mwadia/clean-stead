import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Taps from './Taps';
import SignInForm from './SignInForm';
import SingUpForm from './SignUpForm';

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setIsSignIn(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let w = window.innerWidth;

  let heightR = isSignIn ? 500 : w <= 640 ? 665 : 618;

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className='border border-blue rounded-full text-blue font-light w-[110px] h-[40px]'
      >
        دخول
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: 20,
            width: w === 375 ? 300 : 500,
            height: heightR,
            transition: 'height 0.3s ease-out',
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            marginTop: 2,
            fontSize: 20,
            lineHeight: '30px',
            fontFamily: 'Readex Pro',
            color: '#1D1D35',
            letterSpacing: -1,
          }}
        >
          من فضلك قم بتسجيل الدخول للاستمرار
        </DialogTitle>
        <DialogContent
          sx={{
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div className='flex flex-col justify-center items-center'>
            <Taps isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
            <Divider
              flexItem
              variant='middle'
              sx={{
                marginTop: 1,
                width: 400,
                alignSelf: 'center',
              }}
            />
          </div>
          {isSignIn ? (
            <SignInForm close={setOpen} />
          ) : (
            <SingUpForm close={setOpen} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
