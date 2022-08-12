import React from 'react';

function Banner() {
  return (
    <div className=' mx-auto'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'></div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
      </div>
    </div>
  );
}

export default Banner;
