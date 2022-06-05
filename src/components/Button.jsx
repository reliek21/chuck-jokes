export default function Button({ getData }) {
  return (
    <button className='relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-orange-600 rounded group active:bg-orange-500 focus:ring focus:outline-none' onClick={getData}>
      <span className='absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4'>
        <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
        </svg>
      </span>

      <span className='text-sm font-medium transition-all group-hover:mr-4'>
        Get Joke
      </span>
    </button>
  )
}