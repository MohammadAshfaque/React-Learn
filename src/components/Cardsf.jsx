import React from 'react'
import Cardf from './Cardf'

function Cardsf({users, handleRemove}) {
  return (
    <div className='w-full  max-h-96 overflow-auto flex  justify-center items-center gap-4'>
        {users.map((item, index)=>{ 
        return <Cardf handleRemove={handleRemove} id={index} key={index} user={item}/>

        })}
          
    </div>
  )
}

export default Cardsf