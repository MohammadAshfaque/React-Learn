import React, { useState } from 'react';

function Advuse() {
  const [val, setVal] = useState({ name: "arman", isbanned: false });

  return (
    <div className='p-4'>
      <h1>name: {val.name}</h1>
      <h2>isbanned: {val.isbanned.toString()}</h2>

      <button
        onClick={() => setVal({ ...val, isbanned: !val.isbanned })}
        className='px-3 py-1 bg-blue-500 text-white'
      >
        Toggle
      </button>
    </div>
  );
}

export default Advuse;