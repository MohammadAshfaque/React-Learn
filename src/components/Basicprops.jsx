import React from 'react'

function Basicprops({text, color}) {
  return (
    <button className={`px-3 py-2 ${color} text-xs rounded m-2 text-zinc-100`}>{text}</button>
  )
}

export default Basicprops