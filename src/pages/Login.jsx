import React from 'react'
import Banner from '../assets/Login/LoginBanner.jpg'
import logo from '../assets/logo.png'
import LoginContainer from '../components/LoginContainer'
const Login = () => {
  return (
    <div className='h-screen bg-black w-full'>
        <div>
            <img src={Banner} alt="" className='w-full h-full opacity-55 z-0 fixed top-0left-0 right-0'/>
        </div> 
        <div className='relative top-8 left-40'>
            <img src={logo} alt="" className='w-44 '/>
        </div>
        <div className='mx-auto flex justify-center relative'>
            <LoginContainer/>
        </div>
    </div>
  )
}

export default Login