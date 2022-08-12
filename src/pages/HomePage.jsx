import React, { useEffect, useState } from 'react';
import Hero from '../component/Hero';
import MovieList from '../component/MovieList';
import Pagination from '../component/Pagination';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('http://localhost:3000/movies');
        if (response.status === 200) {
          let data = await response.json();
          console.log(data);
          setMovies(data);
        } else {
          console.log(isError);
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='w-full mx-auto'>
      <Hero />
      <MovieList movies={currentMovies} />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </div>
  );
}

export default HomePage;
