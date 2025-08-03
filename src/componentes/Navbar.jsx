import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='h-16 w-[100%] bg-gray-800 text-white'>
        <ul className='flex justify-center space-x-6'>
          <li className='text-center py-4 text-xl'><Link to="/">Home</Link></li>
          <li className='text-center py-4 text-xl'><Link to="/todo">Todo</Link></li>
          <li className='text-center py-4 text-xl'><Link to="/github">Github</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;
