import React from 'react'
import HomeNav from '../components/Home/HomeNav'
import HomeHero from '../components/Home/HomeHero'
import HomeMovies from '../components/Home/HomeMovies'
import Questions from '../components/Home/Questions'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='bg-black'>
    <HomeNav/>
    <HomeHero/>
    <HomeMovies/>
    <Questions/>
    <Footer/>
    </div>
  )
}

export default Home