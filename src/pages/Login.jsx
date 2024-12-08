import React from 'react'
import Banner from '../assets/Login/LoginBanner.jpg'
import logo from '../assets/logo.png'
import LoginContainer from '../components/LoginContainer'
const Login = () => {
  return (
    <div className='h-screen bg-black w-full overflow-hidden'>
        <div>
            <img src={Banner} alt="" className='w-full h-full opacity-55 z-0 fixed top-0 left-0 right-0'/>
        </div> 
        <div className='relative top-2 my-10 md:my-0 md:top-8 left-28 md:left-40'>
            <img src={logo} alt="" className='w-44'/>
        </div>
        <div className='mx-auto flex justify-center  relative'>
            <LoginContainer/>
        </div>
    </div>
  )
}

export default Login