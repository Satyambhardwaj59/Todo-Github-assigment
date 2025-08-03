import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-[500px] min-h-[400px] flex mx-auto mt-24 text-center bg-gray-100'>
            <div className='flex flex-col justify-center items-center w-full p-4'>
                <h1 className='text-2xl font-bold mb-4'>Welcome to My App</h1>
                <p className='mb-4 text-base'>This is the home page. Navigate to the other pages using the links below:</p>
                <div className='flex justify-around w-full pt-6'>
                    <button>
                        <Link to='/todo' className='text-black  bg-white hover:bg-black hover:text-white border p-2'>Todo Page</Link>
                    </button>
                    <button>
                        <Link to='/github' className='text-black  bg-white hover:bg-black hover:text-white border p-2'>Github Page</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;