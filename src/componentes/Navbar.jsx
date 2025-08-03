import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='h-16 w-[100%] bg-gray-800 text-white'>
        <h1 className='text-center py-4 text-xl'><Link to="/">My App</Link></h1>
      </div>
    </>
  )
}

export default Navbar;
