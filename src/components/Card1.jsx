import React from 'react'

function Card1() {

    const handleClickDownload = () =>{
        alert("Chal rha hai")
    }
    
    const data = [
        {name: "Mahiya Ve", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi aut nisi repellendus."},
        {name : "Junoon" , description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi aut nisi repellendus."}

    ];
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center'>
        {data.map((elem, index)=>(
            <div className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
            <h3 className='font-semibold text-xl '>{elem.name}</h3>
            <p className='text-xs mt-2'>{elem.description}</p>
            <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
        </div>
        ))}
    </div>
  );
}

export default Card1;