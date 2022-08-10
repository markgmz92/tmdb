import React from 'react';
import MovieList from '../component/MovieList';

function HomePage() {
  return (
    <div className='w-full mx-auto p-4 py-24'>
      <div>
        <h2 className='text-2xl bold'>Main Page</h2>
        <MovieList />
      </div>
    </div>
  );
}

export default HomePage;
