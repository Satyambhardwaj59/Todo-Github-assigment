import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' w-[100%] bottom-0 fixed bg-gray-800 text-white text-center '>
      <p className='text-lg py-2'>© 2025 Satyam. All rights reserved.</p>
      <div className='flex justify-center gap-6 mb-4'>
        <Link to='https://github.com/Satyambhardwaj59' className="">
          <FaGithub className="text-3xl" />
        </Link>
        <Link to="https://www.linkedin.com/in/satyam-kumar-297a3b27b" className="">
          <FaLinkedin className="text-3xl" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
