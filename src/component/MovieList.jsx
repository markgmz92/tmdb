import { Link } from 'react-router-dom';

const API_IMG = 'https://image.tmdb.org/t/p/w342';

function MovieList({ movies }) {
  return (
    <div className='max-w-[1240px] m-auto px-4 py-12'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-6 w-full'>
        {movies.map((movie, index) => (
          <div
            key={index}
            className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 group hover:bg-[#032541]'
          >
            <img
              className='rounded-xl group-hover:opacity-10'
              src={API_IMG + movie.poster_path}
              alt={movie.title}
            />
            <div className='hidden group-hover:block absolute top-[40%] right-[50%] translate-x-[50%] translate-y-[-50%]'>
              <h3 className=' text-white md:tracking-wide text-sm md:py-2 md:text-lg'>
                Name of Movie:{' '}
                <span className=' md:py-2 lg:w-[100%]'>{movie.title}</span>
              </h3>
              <h3 className=' text-white text-sm md:text-lg md:tracking-wider py-2'>
                Release Date:{' '}
                <span className='md:py-2'>{movie.release_date}</span>
              </h3>
              <div className='flex justify-start mt-8'>
                <Link to={`/movies/${movie.id}`}>
                  <button className='bg-white text-black w-32 rounded-lg mx-1 py-2'>
                    View More Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
