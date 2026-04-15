
// import Card from './components/Card';
// import Card1 from './components/Card1';
// import Usest from './components/UseSt';
// import Countinc from './components/Countinc';
// import Advuse from './components/Advuse';
// import Advuse1 from './components/Advuse1';
// import Createsome from './components/Createsome';
// import Basicprops from './components/Basicprops';
// import Projprops from './components/Projprops';
// import React, { useState } from 'react';


// function App() {
//   const raw = [
//     {name: "Jhon", profession: "Editor" , image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D", freinds:false },
//     {name: "exa", profession: "Photgrapher" , image:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" ,freinds:false },
//     {name: "tony", profession: "developer" , image: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",freinds:false},
//     {name: "alexi", profession: "fashiondesigner" , image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",freinds:false},
//   ];

//   const [data,setData]= useState(raw)
//   const handleCLick = (changingIndex)=>{
//     setData((prev)=>{
//       return prev.map((item,index)=>{
//         if(index=== changingIndex) return{...item, freinds: !item.freinds};
//         return item;
//       })
//     })
//   }
//   return (
//     <>
//       {/* <Basicprops text= "know more" color= "bg-blue-600"/>
//       <Basicprops text= "Download Now" color= "bg-red-500"/> */}

//       <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
//       {data.map((item, index)=>(
//         <Projprops key={index} index={index} handleCLick={handleCLick} values={item}/>
//       ))}

//       </div>

      
      

//     </>
//   );
// }

// export  default App;


// import Musicprops from "./components/Musicprops";
// import React, {useState} from "react";
// import Navbar from "./components/Navbar";

// function App(){

//   const data= [
//     {image: "https://images.unsplash.com/photo-1774287469369-ee230c07ca28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", name: "Challenger", artist:"Tow", added:false},
//     {image: "https://images.unsplash.com/photo-1773858427856-b725c1984770?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D", name: "Xyron", artist:"Urab", added:false},
//     {image: "https://images.unsplash.com/photo-1725034836574-ff721dc52467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", name: "kite", artist:"koly", added:false},
//     {image: "https://images.unsplash.com/photo-1774455303806-753ccd0a19f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D", name: "vol", artist:"koly", added:false}


//   ];

//   const [songData , setSongData]= useState(data);
//   const handleClick = (index)=>{
//     setSongData((prev)=>{
//       return prev.map((item,  itemindex)=>{
//         if(itemindex  === index)return {...item, added: !item.added};
//         return item;
//       })
//     })
//   }

//   return (
//     <>
//     <div className="w-full h-screen bg-zinc-300  ">
//       <Navbar data={songData}/>
//       <div className="px-20 flex gap-10  mt-10 flex-wrap">
//         {songData.map((obj,index)=>(
//           <Musicprops data={obj} handleClick={handleClick}
//           index={index} key={index}/>
//         ))}
//       </div>
//     </div>
//     </>
// ) 
// }

// export default App;

import React {useRef}