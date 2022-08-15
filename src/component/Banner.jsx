function Banner({ movie }) {
  return (
    <div className=' mx-auto'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'>
          <div className='flex justify-center'>
            <h1 className='text-2xl md:text-6xl'>{movie.title}.</h1>
          </div>
        </div>
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
