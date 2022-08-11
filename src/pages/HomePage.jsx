import React, { useEffect, useState } from 'react';
import MovieList from '../component/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState();

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
  return (
    <div className='w-full mx-auto p-4 py-24'>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
