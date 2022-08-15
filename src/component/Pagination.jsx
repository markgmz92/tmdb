function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='flex justify-center'>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className='px-2 mb-4 text-2xl hover:bg-black hover:text-white'
        >
          <button
            onClick={() => paginate(number)}
            className='flex justify-center'
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
