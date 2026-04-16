// import React, { useState } from 'react';
// import Cardsf from './components/Cardsf'
// import Form from './components/Form';

// function App() {
//   const [users, setUsers]=  useState([]);

//   const handleFormSubmitData = (data)=>{
//     setUsers([...users , data])
//   }
  
//   const handleRemove = (id)=>{
//    setUsers(()=>users.filter((item , index)=>index!=id))
//   }

//   return (
//     <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
//         <div className="container mx-auto">
//             <Cardsf handleRemove={handleRemove} users={users}/>
//             <Form handleFormSubmitData={handleFormSubmitData}/>
//         </div>
//     </div>
//   )
// }

// export default App


import Nav from './components/Nav';
import Routing from './utils/Routing';

const App=()=> {
  return (
    <>
      <Nav/>
      <Routing/>
    </>
  )
}

export default App
