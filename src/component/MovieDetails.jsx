import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const API_IMG = 'https://image.tmdb.org/t/p/w342';

function MovieDetails({ movie }) {
  return (
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          <h2 className='my-8 px-4 text-4xl'>Movie Details</h2>

          <div>
            <img
              src={API_IMG + movie.poster_path}
              alt={movie.title}
              className='mx-4  w-72'
            />
          </div>
          <div className='mt-8 md:mb-40'>
            <h4 className='px-4 font-bold tracking-wide'>
              View movie social media
            </h4>
            <ul className='flex px-4'>
              <li>
                <BsFacebook size={32} />
              </li>
              <li className='px-2'>
                <BsInstagram size={32} />
              </li>
              <li className='px-2'>
                <BsTwitter size={32} />
              </li>
            </ul>
          </div>
        </div>

        <div className='my-8'>
          <h1 className='text-4xl'>Movie Overview</h1>
          <h2 className='my-6 text-xl font-bold'>
            Original Title:{' '}
            <span className='font-normal'>{movie.original_title}</span>
          </h2>
          <h3 className='my-6 text-xl font-bold'>
            Release Date:{' '}
            <span className='font-normal'>{movie.release_date}</span>
          </h3>
          <h3 className='my-4 text-xl font-bold'>
            Original Language:{' '}
            <span className='font-normal'>{movie.original_language}</span>
          </h3>
          <h3 className='my-4 text-xl font-bold'>
            Rating: <span className='font-normal'>{movie.vote_average}</span>
          </h3>
          <h3 className='my-8 text-xl grid grid-cols-1 font-bold'>
            Overview<p className='text-xl font-normal my-2'>{movie.overview}</p>
          </h3>

          <Link to={'/'}>
            <button className='bg-black text-white px-6 py-2 rounded-lg hover:scale-105'>
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
