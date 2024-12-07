import React, { useState } from 'react';
import { questions } from '../index.js';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

const Questions = () => {
  const [show, setShow] = useState(null); // Tracks the currently visible answer

  const toggleAnswer = (id) => {
    // Toggles the visibility of the answer
    setShow((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-[1340px] mx-auto px-5">
      <h1 className="text-white font-bold text-2xl md:text-3xl mb-7">
        Frequently Asked Questions
      </h1>
      {questions.map((item) => (
        <div key={item.id} className="text-white bg-[#272727] hover:bg-[#3d3d3d] mb-2 rounded-lg " >
          <h1
            className="flex justify-between items-center mx-6 md:text-xl py-7 font-semibold  cursor-pointer" onClick={() => toggleAnswer(item.id)}
          >
            {item.que}
            <span>
              {show === item.id ? (
                <IoRemoveOutline size={30} />
              ) : (
                <IoAddOutline size={30} />
              )}
            </span>
          </h1>
          {show === item.id && (
            <div className="px-6 py-4 text-base text-gray-200 font-semibold">
              {item.ans}
            </div>
          )}
        </div>
      ))}
      <div className='flex justify-center flex-col items-center mt-7'>
        <button className='py-4 px-8 bg-red-600 rounded-full font-bold text-lg text-white'>Get Started</button>
        <p className='text-white mb-7 mt-2 font-semibold'>Create or restart your membership</p>
      </div>
    </div>
  );
};

export default Questions;
