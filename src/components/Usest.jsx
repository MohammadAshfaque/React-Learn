import React, { useState } from "react";

function UseSt() {
  const [banned, setBanned] = useState(false);

  return (
    <div className="p-4">
      <h1>{banned.toString()}</h1>
      <button
        onClick={() => setBanned(!banned)}
        className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white"
      >
        Toggle
      </button>
    </div>
  );
}

export default UseSt;