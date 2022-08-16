import { useEffect, useState } from 'react';
import Hero from '../component/Hero';
import Spinner from '../component/Spinner';
import MovieList from '../component/MovieList';
import Pagination from '../component/Pagination';
import axios from 'axios';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);

  useEffect(() => {
    setLoading(true);

    const fetchMovies = async () => {
      setLoading(true);
      const res = await axios.get('https://tmdbtestproject.herokuapp.com/movies');

      setMovies(res.data);

      setLoading(false);
    };
    fetchMovies();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='w-full mx-auto'>
          <Hero movies={movies} />

          <MovieList movies={currentMovies} />
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={movies.length}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
}

export default HomePage;
