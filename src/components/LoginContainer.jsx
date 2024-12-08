import React, { useState } from 'react'
import {login,signup} from '../Firebase.js'

const LoginContainer = () => {

    const [Sign,setSign] = useState("Sign In")

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setpass] = useState('')

    const user_auth = async (e) => {
      e.preventDefault();
      if(Sign === "Sign In"){
        login(email,pass)
      }else{
        await signup(name,email,pass)
      }
    }

  return (
    <div className='w-[350px] sm:w-[450px] bg-black text-white p-10 bg-opacity-60'>
        <h1 className='text-3xl font-semibold mb-10'>{Sign}</h1>
        <form className='flex justify-center flex-col gap-5'>
            {Sign === "Sign Up" ? 
            <input type="text" name="" id="" value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Enter name' className='py-4 px-6 outline-none border-2  bg-transparent border-gray-400 placeholder:text-gray-300'/>
            :
            ""}
            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter email' className='py-4 px-6 outline-none border-2  bg-transparent border-gray-400 placeholder:text-gray-300'/>
            <input type="password" value={pass} onChange={(e) => {setpass(e.target.value)}} placeholder='Enter password' className='py-4 px-6 outline-none border-2  bg-transparent border-gray-400 placeholder:text-gray-300'/>
            <button className='flex justify-center bg-red-600 hover:bg-red-700 transition-colors duration-300 font-semibold py-1.5' type='submit' onClick={user_auth}>{Sign}</button>
            <div className='flex justify-between'>
              <div className='flex items-center gap-1'>
              <input type="checkbox"/>
              <p>Remember me</p>
              </div>
                <p className='cursor-pointer'>Need Help?</p>
            </div>
        </form>
        <div className='mt-[40px] text-[#737373]'>
            {Sign === "Sign In" ? <p>New to Netflix? <span className='ml-2 text-white font-semibold cursor-pointer' onClick={() => {setSign("Sign Up")}}>Sign Up Now</span></p> : <p>Already have account? <span className='md:ml-2 text-white font-semibold cursor-pointer' onClick={() => {setSign("Sign In")}}>Sign In Now</span></p>}
        </div>
    </div>
  )
}

export default LoginContainer