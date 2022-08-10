import React from 'react';

function Navbar() {
  return (
    <div className='w-full h-20 mx-auto flex justify-between items-center p-4 shadow-lg'>
      <div className='flex items-start'>
        <h1 className='text-xl'>The Movie Database</h1>
      </div>
      <div className='flex items-end'>
        <h2 className='text-xl'>Search</h2>
      </div>
    </div>
  );
}

export default Navbar;
