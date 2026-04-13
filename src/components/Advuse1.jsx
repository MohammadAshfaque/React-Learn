import React, { useState } from "react";

function Advuse1() {
  const [val, setVal] = useState([
    { name: "arman", age: 23 },
    { name: "arman1", age: 24 },
    { name: "arman2", age: 25 },
  ]);

  return (
    <div className="p-5">
      {val.map((item, index) => (
        <h1 key={index}>
          {item.name} - {item.age}
        </h1>
      ))}

      <button
        onClick={() => {
            //   setVal(() => val.filter((item, index) => index != val.length - 1 // setVal(() => val.filter((item, index) => index !=2 // setVal(() => val.filter((item, index) => index !=2 // setVal(() => val.filter((item=> item%2 !==0) // removal of array
          setVal(val.map((item) =>
            item.name === "arman2"
              ? { name: "arman2", age: 26 }
              : item
          ));
        }}
        className="px-2 py-1 text-white rounded-full bg-blue-500"
      >
        click
      </button>
    </div>
  );
}

export default Advuse1;