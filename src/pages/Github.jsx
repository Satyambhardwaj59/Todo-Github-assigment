// import React, { useState } from 'react'
// import GithubCard from '../componentes/GithubCard';

// const Github = () => {

//   const [data, setData] = React.useState(null);
//   const [loading, setLoading] = useState(true); // start with loading true
//   const [error, setError] = useState(null);
//   const [userId, setUserId] = useState(""); 

//   const fetchData = async () => {
//     // Simulating API call
//     fetch(`https://api.github.com/users/${userId}`)
//       .then((res) => {
//         if (!res.ok) {
//           console.log(`Error ${res.status}: ${res.statusText}`);
//           throw new Error(`Error ${res.status}: ${res.statusText}`);
//           // throw new Error(`Error ${res.status}: ${res.statusText}`);
//         }
//         return res.json();
//       })
//       .then((json) => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError({ message: err.message || 'Something went wrong', code: err.code || 404 });
//         setLoading(false);
//       });
//     // You can use the data to set state or display it in the component
//   }


//   return (
//     <div>
//       <h1 className='text-3xl mt-10 mb-5 font-bold text-center'>Get Github Info with <span className='text-orange-500'>Your UserId</span></h1>
//       <div className="flex mx-auto mb-6 w-full max-w-md">
//         <input
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           placeholder="Add Your Github userId...."
//           className="flex-1 px-4 py-3 rounded border border-gray-300 rounded-l-full"
//         />
//         <button
//           onClick={fetchData}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded rounded-r-full"
//         >
//           Add
//         </button>
//       </div>
//       {loading ? (
//         <div className="text-blue-500 text-lg font-semibold">Loading...</div>
//       ) : error ? (
//         <Error error={error} />
//       ) : (
//         <GithubCard data={data} />
//       )}
//     </div>
//   )
// }

// export default Github;


import React, { useState } from 'react';
import GithubCard from '../componentes/GithubCard';
import ErrorCard from '../componentes/ErrorCard'; // assuming it's in the same folder
import ShimmerUI from '../componentes/ShimmerUI';

const Github = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // initially false
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");

  const fetchData = async () => {
    setError(null);
    setData(null);

    if (!userId.trim()) {
      setError({ message: "⚠️ Please enter your GitHub User ID." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://api.github.com/users/${userId}`);
      if (!res.ok) {
        throw new Error(`User not found (Error ${res.status})`);
      }
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError({ message: err.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center">
      <h1 className="text-3xl my-6 font-bold text-center">
        Get GitHub Info with <span className="text-orange-500">Your UserId</span>
      </h1>

      <div className="flex mx-auto mb-6 w-full max-w-md">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter Your GitHub userId..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-full"
        />
        <button
          onClick={fetchData}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-full"
        >
          Search
        </button>
      </div>
      {data && <h1 className='text-3xl my-2 font-bold text-center'>Hello {data?.name} 👋</h1>}
      {loading && <ShimmerUI/>}

      {!loading && error && <ErrorCard error={error} />}

      {!loading && data && <GithubCard data={data} />}
    </div>
  );
};

export default Github;
