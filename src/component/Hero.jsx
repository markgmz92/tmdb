function Hero() {
  return (
    <div className=' mx-auto'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'>
          <h1 className='flex justify-center px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            Home of Top Movies
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
      </div>
    </div>
  );
}

export default Hero;
