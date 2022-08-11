import Spinner from '../component/shared/Spinner';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div className='max-w-[1240px] m-auto px-4 py-12'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-6'>
        {movies.map((movie, index) => (
          <div key={index} className=' bg-white rounded-lg'>
            <div className=''>
              <img
                src={
                  'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg'
                }
                className=''
                alt={movie.title}
              />
            </div>
            <div className='w-[100%]'>
              <h3 className='text-black'>Name of Movie: </h3>
              <span className=''>{movie.title}</span>
            </div>
            <div className='my-4'>
              <Link to={`/movies/${movie.id}`}>
                <button className='bg-black text-white px-4 py-2 rounded-lg mx-2'>
                  View More Info
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
