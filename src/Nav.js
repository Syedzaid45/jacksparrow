import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
<>
<div className='flex absolute z-50 flex-row justify-center mb-8   bg-transparent  w-full  p-3 bottom-0   '>
    
    <div className=' bg-black p-3 rounded-xl  opacity-50 text-white  ' >
    <ul className='flex flex-row justify-between '>
        <li className='mx-4 text-xl font-serif   hover:text-gray-400 hover:underline  cursor-pointer ' ><Link to="/">Home</Link></li>
        <li className='mx-4 text-xl font-serif   hover:text-gray-400 hover:underline  cursor-pointer ' ><Link  to="/About">Career</Link></li>
        <li className='mx-4 text-xl font-serif   hover:text-gray-400 hover:underline  cursor-pointer ' ><Link to="/Contact">Contact</Link></li>
    </ul>
    </div>
</div>
</>
  )
}
