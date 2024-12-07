import React from 'react'

const ReasonBox = ({text,img}) => {
  return (
    <div className='min-w-[310px] w-full  bg-[#272727] rounded-xl p-3 flex flex-col justify-center  mx-auto'>
        <div className='text-lg flex justify-start items-center mb-10 text-white font-semibold'>
            {text}
        </div>
        <div className='flex justify-end items-center'>
            <img src={img} alt="" className='w-10'/>
        </div>
    </div>
  )
}

export default ReasonBox