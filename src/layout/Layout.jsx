import React, { useEffect, useState } from 'react';

import 'animate.css';
import '../index.css';

import Joke from '../components/Joke';
import Button from '../components/Button';

import ChuckApi from '../config/fetch';
import Footer from '../components/Footer';


export default function Layout() {
  const [joke, setJoke] = useState('');

  const getDataAPI = async () => {
    try {
      const response = await ChuckApi('jokes/random');
      setJoke(response);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getDataAPI();
  }, []);


  return (
    <div className='flex flex-col h-screen justify-between'>
      <section className='text-black'>
        <div className='max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8'>
          <div className='max-w-lg mx-auto text-center'>
            <h1 className='text-3xl font-bold sm:text-6xl text-orange-600'>Chuck Jokes</h1>

            <Joke joke={joke} />
            <Button getData={getDataAPI} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}