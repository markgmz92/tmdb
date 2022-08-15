import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../component/Banner';
import MovieDetails from '../component/MovieDetails';
import Spinner from '../component/Spinner';
import axios from 'axios';

function MovieScreen() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3000/movies/' + id);
      setMovie(res.data);
      setLoading(false);
    };
    fetchMovie();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Banner movie={movie} />

          <MovieDetails movie={movie} />
        </div>
      )}
    </>
  );
}

export default MovieScreen;
