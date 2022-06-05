import { Fragment } from "react";


export default function Joke({ joke }) {
  return (
    <Fragment>
      <blockquote className='mt-12 mb-5 text-black p-5 bg-gray-50 rounded animate__animated animate__wobble'>
        {(!joke) ? 'Loading Joke...' : joke}
      </blockquote>

      <p className='mb-10 text-black'> - Chuck Norris</p>
    </Fragment>
  )
}