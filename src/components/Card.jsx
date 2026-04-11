import React from 'react'

function Card() {
    const data = [
        {image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fHww' , name: "Amazon Basics.", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, odio."},
        {image:"https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "DailyObjects.", description: "Lorem ipsum dolor, sit amet consectetur adipisicing ."},
        {image:"https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name: "Apple.", description: "Lorem ipsum doloro."},
    ]


  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
        {data.map((elem, index)=>(
            <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
            <img className='w-full h-full object-cover' src={elem.image}></img>
        </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>{elem.name}</h2>
            <p className='text-xs mt-5'>{elem.description}</p>
        </div>
        </div>
        ))}
    </div>
  )
}

export default Card