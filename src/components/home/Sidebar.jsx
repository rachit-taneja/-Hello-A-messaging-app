import React from 'react'
import { FaSearch } from "react-icons/fa";
import Users from './users';
const Sidebar = () => {
  return (
    <div className='max-w-[22em] w-full h-screen flex flex-col bg-slate-600'>
      <h1>Gup shup </h1>
      <div className=" ml-3  p-3 input input-bordered input-primary w-full max-w-xs">
        
        <input
  type="text"
  placeholder="Search"
   /><FaSearch/></div>
      <div className='h-full overflow-auto'><Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      </div>
      <div className="h-10 bg-black "> Logout</div>
    </div>
  )
}

export default Sidebar
