import HeroText from './HeroText';
import './heroImage.css';
const HeroImage = () => {
  return (
    <div className='tw-grad-parent flex flex-row-reverse w-[100%] h-[550px] justify-center items-center relative'>
      <div
        className='tw-gradient w-[57vw] h-[550px] rounded-[20px]'
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: 5,
        }}
      >
        <HeroText />
      </div>
      <img
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          zIndex: 1,
          objectFit: 'cover',
        }}
        className='w-[60vw] h-[550px] rounded-[20px] sm:max-xl:block hidden'
        src='./images/girl-image.png'
        alt='hero'
      />
    </div>
  );
};

export default HeroImage;
