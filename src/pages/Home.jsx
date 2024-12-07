import React from 'react'
import HomeNav from '../components/Home/HomeNav'
import HomeHero from '../components/Home/HomeHero'
import HomeMovies from '../components/Home/HomeMovies'
import Questions from '../components/Home/Questions'
const Home = () => {
  return (
    <div className='bg-black'>
    <HomeNav/>
    <HomeHero/>
    <HomeMovies/>
    <Questions/>
    </div>
  )
}

export default Home