import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch('http://localhost:3000/movies/' + id);

      const postMovie = await response.json();
      setMovie(postMovie);
    };
    fetchMovie();
  }, []);

  return (
    <div className='w-max-[1240px] mx-auto w-full'>
      <div className='py-12 mx-4'>
        <h1 className='text-4xl'>This is the page for {movie.title} </h1>
      </div>
    </div>
  );
}

export default MovieDetails;
