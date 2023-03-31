import React from 'react';
import ServiceTitle from './ServiceTitle';
import Service from './Service';

const servicesData = [
  {
    id: 0,
    title: 'تنظيف المنازل',
    paragraph:
      'ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..',
    image: './images/clean1.png',
  },
  {
    id: 1,
    title: 'التنظيف التجاري',
    paragraph:
      'ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..',
    image: './images/clean2.png',
  },
  {
    id: 2,
    title: 'تنظيف السجاد',
    paragraph:
      'ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..',
    image: './images/clean3.png',
  },
  {
    id: 3,
    title: 'تنظيف النوافذ',
    paragraph:
      'ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..',
    image: './images/clean4.png',
  },
  {
    id: 4,
    title: 'تنظيف السيارات',
    paragraph:
      'ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..',
    image: './images/clean5.png',
  },
  {
    id: 5,
    title: 'تنظيف بعد البناء',
    paragraph:
      'ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..',
    image: './images/clean6.png',
  },
];

const Services = () => {
  return (
    <div className='mt-[80px] '>
      <ServiceTitle />
      <div className='flex flex-wrap justify-center items-center flex-row-reverse gap-[30px]'>
        {servicesData.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
