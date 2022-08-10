import React from 'react';
import { data } from '../db/data.js';

function MovieList() {
  return (
    <div className='max-w-[1240px] m-auto px-4 py-12'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {data.map((item, index) => (
          <div
            key={index}
            className='max-w-sm rounded overflow-hidden shadow-lg'
          >
            <img src={item.poster_path} alt={item.name} className='w-full' />
            <h2 className='font-bold sm:text-xl'>Movie Name:{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
