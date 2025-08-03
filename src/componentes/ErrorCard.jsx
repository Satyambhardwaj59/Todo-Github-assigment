import React from 'react'

const ErrorCard = ({error}) => {
  return (
    <div className="flex flex-col items-center min-w-[400px] max-h-[400px] justify-center h-screen bg-gray-200 border rounded ">
      <h1 className="text-2xl text-red-600 font-bold">Error!!!</h1>
      <p className="text-gray-600 text-xl">{error.message}</p>
      <p className="text-gray-600 text-xl">Please enter a valid userId</p>
    </div>
  )
}

export default ErrorCard;
