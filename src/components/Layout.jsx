import React, { Fragment, useEffect, useState } from 'react'


const BASE_URL = 'https://api.chucknorris.io/jokes/random';

export default function Layout() {
  const [joke, setJoke] = useState('');

  const getDataAPI = async () => {
    const response = await fetch(BASE_URL)
      .then(res => res.json())
      .then(data => data.value);

    setJoke(response);
  }

  useEffect(() => {
    getDataAPI();
  }, []);


  return (
    <Fragment>
      <h1>Chuck Jokes</h1>
      <p>{joke}</p>
      <button onClick={getDataAPI}>Get Joke</button>
    </Fragment>
  )
}