import React, { useState } from 'react'
import GithubCard from '../componentes/GithubCard';

const Github = () => {

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = useState(true); // start with loading true
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(""); 

  const fetchData = async () => {
    // Simulating API call
    fetch(`https://api.github.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    // You can use the data to set state or display it in the component
  }


  return (
    <div>
      <h1 className='text-3xl mt-10 mb-5 font-bold text-center'>Get Github Info with <span className='text-orange-500'>Your UserId</span></h1>
      <div className="flex mx-auto mb-6 w-full max-w-md">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Add Your Github userId...."
          className="flex-1 px-4 py-3 rounded border border-gray-300 rounded-l-full"
        />
        <button
          onClick={fetchData}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded rounded-r-full"
        >
          Add
        </button>
      </div>
      {loading ? (
        <div className="text-blue-500 text-lg font-semibold">Loading...</div>
      ) : error ? (
        <div className="text-red-500 text-lg font-semibold">
          Error: {error}
        </div>
      ) : (
        <GithubCard data={data} />
      )}
    </div>
  )
}

export default Github;
