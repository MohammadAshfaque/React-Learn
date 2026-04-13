import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

function Createsome() {
  const [val, setVal] = useState(false);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      
      <div className='relative w-60 h-32 overflow-hidden rounded-md'>
        
        {/* SLIDER TRACK */}
        <div
          className={`flex transition-transform duration-300 ease-in-out
          ${val ? "-translate-x-[100%]" : "translate-x-0"}`}
        >
          <img
            className="w-60 h-32 object-cover shrink-0"
            src="https://plus.unsplash.com/premium_photo-1687411984360-9560bc31048f?q=80&w=1170"
          />
          <img
            className="w-60 h-32 object-cover shrink-0"
            src="https://plus.unsplash.com/premium_photo-1669653214121-60a9e4107271?q=80&w=1170"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setVal(!val)}
          className="absolute bottom-2 right-2 bg-white p-2 rounded-full bg-[#dadada7b]"
        >
          <FaArrowRight size={".7em"} />
        </button>

      </div>
    </div>
  );
}

export default Createsome;