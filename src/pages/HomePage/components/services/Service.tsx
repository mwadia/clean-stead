import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Service = ({
  title,
  paragraph,
  image,
}: {
  title: string;
  paragraph: string;
  image: string;
}) => {
  return (
    <div
      className='w-[370px] h-[237px] mb-[100px] gap-2 shadow-sm text-right rounded-[25px]'
      style={{
        boxShadow: '0px 8px 24px rgba(0, 173, 238, 0.1)',
      }}
    >
      <div className='flex justify-center items-center gap-2 relative'>
        <p className='absolute left-[40px] sm:max-xl:left-[70px] top-12 sm:-max-xl:top-8 text-[17px] sm:-max-xl:text-[20px]'>
          {title}
        </p>
        <img
          className='rounded-full w-[80px] h-[80px] sm:max-xl:w-[130px] sm:max-xl:h-[130px] absolute top-[-40px] sm:max-xl:top-[-60px] right-[20px] sm:max-xl:right-[28px]'
          src={image}
          alt='cleaning'
        />
      </div>
      <div className='flex px-7 mt-[80px] sm:max-xl:mt-[100px] mb-[24px]'>
        <p className='mr-3 sm:max-xl:text-[18px] text-[14px] font-light'>
          {paragraph}
        </p>
        <img src='./images/greenLine.png' alt='line' />
      </div>
      <a className='text-blue mr-7'>
        <ArrowBackIosIcon sx={{ fontSize: '18px' }} />
        رؤية المزيد
      </a>
    </div>
  );
};

export default Service;
